import { GQlessClient } from 'gqless';

import {
  isAnySelectionIncluded,
  useForceUpdate,
  useIsomorphicLayoutEffect,
  useSelectionsState,
} from '../common';
import { ReactClientOptionsWithDefaults } from '../utils';

export interface UseSubscription<
  GeneratedSchema extends {
    subscription: object;
  }
> {
  (): GeneratedSchema['subscription'];
}

export function createUseSubscription<
  GeneratedSchema extends {
    query: object;
    mutation: object;
    subscription: object;
  }
>(
  client: GQlessClient<GeneratedSchema>,
  _opts: ReactClientOptionsWithDefaults
): UseSubscription<GeneratedSchema> {
  const {
    interceptorManager: { createInterceptor, removeInterceptor },
    subscriptionsClient,
    eventHandler,
    scheduler,
  } = client;
  const clientSubscription: GeneratedSchema['subscription'] =
    client.subscription;

  const useSubscription: UseSubscription<GeneratedSchema> = function useSubscription() {
    const forceUpdate = useForceUpdate();
    const hookSelections = useSelectionsState();

    const interceptor = createInterceptor();

    Promise.resolve(interceptor).then(removeInterceptor);

    interceptor.selectionAddListeners.add((selection) => {
      if (selection.type === 2) hookSelections.add(selection);
    });

    useIsomorphicLayoutEffect(() => {
      removeInterceptor(interceptor);
    });

    useIsomorphicLayoutEffect(() => {
      if (!subscriptionsClient) return;

      let isMounted = true;

      const unsubscribeCache = eventHandler.onCacheChangeSubscribe(
        ({ selection }) => {
          if (!isMounted || forceUpdate.wasCalled.current) return;

          if (hookSelections.has(selection)) forceUpdate();
        }
      );

      const unsubErrors = scheduler.errors.subscribeErrors((data) => {
        if (
          isMounted &&
          data.type === 'new_error' &&
          !forceUpdate.wasCalled.current &&
          isAnySelectionIncluded(data.selections, hookSelections)
        ) {
          forceUpdate();
        }
      });

      return () => {
        isMounted = false;
        unsubErrors();
        unsubscribeCache();
        subscriptionsClient
          .unsubscribe(hookSelections)
          .then((operationsIds) => {
            if (eventHandler.hasFetchSubscribers && operationsIds.length) {
              const arraySelections = Array.from(hookSelections);
              for (const id of operationsIds) {
                eventHandler.sendFetchPromise(
                  Promise.resolve({
                    query: '',
                    variables: undefined,
                    cacheSnapshot: client.cache,
                    selections: arraySelections,
                    type: 'subscription',
                    label: `[id=${id}] [unsubscribe]`,
                  }),
                  arraySelections
                );
              }
            }
          });
      };
    }, [hookSelections, forceUpdate]);

    return clientSubscription;
  };

  return useSubscription;
}
