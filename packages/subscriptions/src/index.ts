import {
  GQlessError,
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

export type PossiblePromise<T> = Promise<T> | T;

type SubContext = {
  selections: Selection[];
  query: string;
  variables: Record<string, unknown> | undefined;
  operationId: string;
};

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
    ((ctx: SubContext) => SubscribeEvents) | SubscribeEvents,
    OperationCallback
  >();

  return {
    subscribe({ query, variables, events, cacheKey, selections }) {
      let operationId: string = 'NO_ID';
      const ctx: SubContext = {
        query,
        variables,
        operationId,
        selections,
      };
      if (wsClientValue) {
        return execSubscribe(wsClientValue);
      } else {
        return wsClientPromise.then((wsSubClient) =>
          execSubscribe(wsSubClient)
        );
      }

      function execSubscribe(
        wsSubClient: Client
      ): ReturnType<SubscriptionsClient['subscribe']> {
        let callback: OperationCallback | undefined;

        if (!(callback = eventsReference.get(events))) {
          const { onData, onError, onComplete, onStart } =
            typeof events === 'function' ? events(ctx) : events;

          callback = function ({ payload, operationId }) {
            ctx.operationId = operationId;
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
                    error: GQlessError.fromGraphQLErrors(errors),
                  });
                } else if (data) {
                  onData(data);
                }
            }
          };
          eventsReference.set(events, callback);
        }

        const operationIdPromise = wsSubClient.createSubscription(
          query,
          variables,
          callback,
          cacheKey
        );

        if (operationIdPromise instanceof Promise) {
          return operationIdPromise.then((id) => {
            ctx.operationId = operationId = id;
            return returnSub(id);
          });
        } else {
          ctx.operationId = operationId = operationIdPromise;
          return returnSub(operationId);
        }

        function returnSub(operationId: string) {
          const unsubscribe = async () => {
            await wsSubClient.unsubscribe(operationId, true);
            SubscriptionsSelections.delete(operationId);
          };
          SubscriptionsSelections.set(operationId, new Set(selections));

          return {
            unsubscribe,
            operationId,
          };
        }
      }
    },
    async unsubscribe(selections) {
      const wsClient = wsClientValue || (await wsClientPromise);

      let promises: Promise<void>[] = [];
      const operationIds: string[] = [];

      checkOperations: for (const [
        operationId,
        operationSelections,
      ] of SubscriptionsSelections.entries()) {
        for (const selection of selections) {
          if (operationSelections.has(selection)) {
            operationIds.push(operationId);
            promises.push(wsClient.unsubscribe(operationId, true));
            SubscriptionsSelections.delete(operationId);
            continue checkOperations;
          }
        }
      }

      if (promises.length) await Promise.all(promises);

      return operationIds;
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
