import { GQlessClient, prepass } from 'gqless';
import { useMemo, useState } from 'react';

import {
  OnErrorHandler,
  useInterceptSelections,
  useIsomorphicLayoutEffect,
} from '../common';
import { ReactClientOptionsWithDefaults } from '../utils';

export interface UseQueryPrepareHelpers<
  GeneratedSchema extends {
    query: object;
  }
> {
  readonly prepass: typeof prepass;
  readonly query: GeneratedSchema['query'];
}
export interface UseQueryOptions<
  GeneratedSchema extends {
    query: object;
  } = never
> {
  suspense?: boolean;
  staleWhileRevalidate?: boolean | object | number | string | null;
  onError?: OnErrorHandler;
  prepare?: (helpers: UseQueryPrepareHelpers<GeneratedSchema>) => void;
}

export interface UseQueryState {
  /**
   * Useful for `Non-Suspense` usage.
   */
  readonly isLoading: boolean;
}

export type UseQueryReturnValue<
  GeneratedSchema extends { query: object }
> = GeneratedSchema['query'] & {
  $state: UseQueryState;
};
export interface UseQuery<GeneratedSchema extends { query: object }> {
  (
    options?: UseQueryOptions<GeneratedSchema>
  ): UseQueryReturnValue<GeneratedSchema>;
}

export function createUseQuery<
  GeneratedSchema extends {
    query: object;
    mutation: object;
    subscription: object;
  }
>(client: GQlessClient<GeneratedSchema>, opts: ReactClientOptionsWithDefaults) {
  const {
    suspense: defaultSuspense,
    staleWhileRevalidate: defaultStaleWhileRevalidate,
  } = opts.defaults;
  const { scheduler, eventHandler, interceptorManager } = client;

  const clientQuery: GeneratedSchema['query'] = client.query;

  const prepareHelpers: UseQueryPrepareHelpers<GeneratedSchema> = {
    prepass,
    query: clientQuery,
  };

  type Writeable<T> = { -readonly [P in keyof T]: T[P] };

  const useQuery: UseQuery<GeneratedSchema> = function useQuery({
    suspense = defaultSuspense,
    staleWhileRevalidate = defaultStaleWhileRevalidate,
    onError,
    prepare,
  }: UseQueryOptions<GeneratedSchema> = {}): UseQueryReturnValue<GeneratedSchema> {
    const [$state] = useState<Writeable<UseQueryState>>(() => {
      return {
        isLoading: true,
      };
    });
    const { unsubscribe, fetchingPromise } = useInterceptSelections({
      staleWhileRevalidate,
      eventHandler,
      interceptorManager,
      scheduler,
      onError,
      updateOnFetchPromise: true,
    });

    if (prepare) {
      try {
        prepare(prepareHelpers);
      } catch (err) {
        if (err instanceof Error && Error.captureStackTrace!) {
          Error.captureStackTrace(err, useQuery);
        }
        throw err;
      }
    }

    useIsomorphicLayoutEffect(unsubscribe);

    if (fetchingPromise.current) {
      $state.isLoading = true;

      if (suspense) throw fetchingPromise.current;
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
