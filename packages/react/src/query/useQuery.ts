import type { GqlessClient } from 'gqless';
import { useMemo, useState } from 'react';

import {
  OnErrorHandler,
  useInterceptSelections,
  useIsomorphicLayoutEffect,
} from '../common';
import { ReactClientOptionsWithDefaults } from '../utils';

export interface UseQueryOptions {
  suspense?: boolean;
  staleWhileRevalidate?: boolean | object | number | string | null;
  onError?: OnErrorHandler;
}

export interface UseQueryState {
  /**
   * Useful for `Non-Suspense` usage.
   */
  isLoading: boolean;
}

export type UseQueryReturnValue<
  GeneratedSchema extends { query: object }
> = GeneratedSchema['query'] & {
  $state: UseQueryState;
};
export interface UseQuery<GeneratedSchema extends { query: object }> {
  (options?: UseQueryOptions): UseQueryReturnValue<GeneratedSchema>;
}

export function createUseQuery<
  GeneratedSchema extends {
    query: object;
    mutation: object;
    subscription: object;
  }
>(client: GqlessClient<GeneratedSchema>, opts: ReactClientOptionsWithDefaults) {
  const {
    suspense: defaultSuspense,
    staleWhileRevalidate: defaultStaleWhileRevalidate,
  } = opts.defaults;
  const { scheduler, eventHandler, interceptorManager } = client;

  const clientQuery: GeneratedSchema['query'] = client.query;

  const useQuery: UseQuery<GeneratedSchema> = function useQuery({
    suspense = defaultSuspense,
    staleWhileRevalidate = defaultStaleWhileRevalidate,
    onError,
  }: UseQueryOptions = {}): UseQueryReturnValue<GeneratedSchema> {
    const [$state] = useState<UseQueryState>(() => {
      return {
        isLoading: true,
      };
    });
    const {
      unsubscribe,
      fetchingPromise: { current: fetchingPromise },
    } = useInterceptSelections({
      staleWhileRevalidate,
      eventHandler,
      interceptorManager,
      scheduler,
      onError,
      updateOnFetchPromise: true,
    });

    useIsomorphicLayoutEffect(unsubscribe);

    if (fetchingPromise) {
      $state.isLoading = true;

      if (suspense) throw fetchingPromise;
    } else {
      $state.isLoading = false;
    }

    return useMemo<UseQueryReturnValue<GeneratedSchema>>(() => {
      const gqlessProxy = Symbol('gqless-proxy');
      return new Proxy(
        Object.keys(clientQuery).reduce(
          (acum, value) => {
            //@ts-expect-error
            acum[value] = gqlessProxy;
            return acum;
          },
          {
            $state,
          }
        ),
        {
          set(_t, key, value) {
            return Reflect.set(clientQuery, key, value);
          },
          get(_t, key) {
            if (key === '$state') return $state;

            return Reflect.get(clientQuery, key);
          },
        }
      );
    }, [$state]);
  };

  return useQuery;
}
