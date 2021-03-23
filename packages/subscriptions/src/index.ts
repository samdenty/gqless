import {
  gqlessError,
  Selection,
  SubscribeEvents,
  SubscriptionsClient,
} from 'gqless';

import {
  Client,
  ClientOptions,
  OperationCallback,
} from './subscription/client';

export interface SubscriptionsClientOptions extends ClientOptions {
  wsEndpoint: string | (() => string | Promise<string>);
}

export function createSubscriptionsClient({
  wsEndpoint,
  ...opts
}: SubscriptionsClientOptions): SubscriptionsClient {
  const urlPromise = Promise.resolve(
    typeof wsEndpoint === 'string' ? wsEndpoint : wsEndpoint()
  );

  let wsClientValue: Client | undefined;

  const wsClientPromise: Promise<Client> = new Promise((resolve, reject) => {
    urlPromise
      .then((url) => {
        const client = new Client(url, {
          ...opts,
        });
        wsClientValue = client;
        resolve(client);
      })
      .catch(reject);
  });

  const SubscriptionsSelections: Map<string, Set<Selection>> = new Map();

  const eventsReference = new WeakMap<
    ((ctx: { selections: Selection[] }) => SubscribeEvents) | SubscribeEvents,
    OperationCallback
  >();

  return {
    async subscribe({ query, variables, events, cacheKey, selections }) {
      const wsClient = wsClientValue || (await wsClientPromise);

      let callback: OperationCallback | undefined;

      if (!(callback = eventsReference.get(events))) {
        const { onData, onError, onComplete, onStart } =
          typeof events === 'function' ? events({ selections }) : events;

        callback = function ({ payload }) {
          switch (payload) {
            case 'start':
              onStart?.();
              break;
            case 'complete':
              SubscriptionsSelections.delete(operationId);
              onComplete?.();
              break;
            default:
              const { data, errors } = payload;
              if (errors?.length) {
                onError({
                  data,
                  error: gqlessError.fromGraphQLErrors(errors),
                });
              } else if (data) {
                onData(data);
              }
          }
        };
        eventsReference.set(events, callback);
      }

      const operationId = await wsClient.createSubscription(
        query,
        variables,
        callback,
        cacheKey
      );

      SubscriptionsSelections.set(operationId, new Set(selections));

      const unsubscribe = async () => {
        await wsClient.unsubscribe(operationId, true);
        SubscriptionsSelections.delete(operationId);
      };

      return {
        unsubscribe,
      };
    },
    async unsubscribe(selections) {
      const wsClient = wsClientValue || (await wsClientPromise);

      let promises: Promise<void>[] = [];

      checkOperations: for (const [
        operationId,
        operationSelections,
      ] of SubscriptionsSelections.entries()) {
        for (const selection of selections) {
          if (operationSelections.has(selection)) {
            promises.push(wsClient.unsubscribe(operationId, true));
            SubscriptionsSelections.delete(operationId);
            continue checkOperations;
          }
        }
      }

      if (promises.length) await Promise.all(promises);
    },
    async close() {
      const wsClient = wsClientValue || (await wsClientPromise);

      wsClient.close();
    },
    setConnectionParams(connectionParams, restartClient) {
      if (wsClientValue) {
        wsClientValue.connectionInitPayload = connectionParams;
        if (restartClient && wsClientValue.socket) {
          wsClientValue.close(true);
        }
      } else {
        wsClientPromise
          .then((wsClient) => {
            wsClient.connectionInitPayload = connectionParams;
            if (restartClient && wsClient.socket) {
              wsClient.close(true);
            }
          })
          .catch(console.error);
      }
    },
  };
}
