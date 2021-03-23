import type { GqlessClient, gqlessError } from 'gqless';
import type { SchedulerPromiseValue } from 'gqless/dist/Scheduler';

import {
  useForceUpdate,
  useIsMounted,
  useIsomorphicLayoutEffect,
} from '../common';
import { ReactClientOptionsWithDefaults } from '../utils';

export interface UsePreparedQueryOptions {
  suspense?: boolean;
}

export interface PreparedQuery<
  GeneratedSchema extends {
    query: object;
  },
  TFunction extends (query: GeneratedSchema['query'], args: any) => any
> {
  preload(
    ...[args]: undefined extends Parameters<TFunction>['1']
      ? [Parameters<TFunction>['1']?]
      : [Parameters<TFunction>['1']]
  ): Promise<ReturnType<TFunction>>;
  refetch(
    ...[args]: undefined extends Parameters<TFunction>['1']
      ? [Parameters<TFunction>['1']?]
      : [Parameters<TFunction>['1']]
  ): Promise<ReturnType<TFunction>>;
  usePrepared(
    opts?: UsePreparedQueryOptions
  ): {
    data: ReturnType<TFunction> | undefined;
    error?: gqlessError | undefined;
    isLoading: boolean;
    isRefetching: boolean;
    called: boolean;
  };
  callback: TFunction;
}

export interface PrepareQuery<
  GeneratedSchema extends {
    query: object;
  }
> {
  <TFunction extends (query: GeneratedSchema['query'], args: any) => any>(
    fn: TFunction
  ): PreparedQuery<GeneratedSchema, TFunction>;
}

export function createPrepareQuery<
  GeneratedSchema extends {
    query: object;
    mutation: object;
    subscription: object;
  }
>(
  { prefetch, query, refetch: refetchClient }: GqlessClient<GeneratedSchema>,
  {
    defaults: { preparedSuspense: defaultSuspense },
  }: ReactClientOptionsWithDefaults
) {
  const emptyDataSymbol = Symbol();

  const prepareQuery: PrepareQuery<GeneratedSchema> = function prepareQuery<
    TFunction extends (query: GeneratedSchema['query'], args: any) => any
  >(fn: TFunction): PreparedQuery<GeneratedSchema, TFunction> {
    const state: {
      data: ReturnType<TFunction> | typeof emptyDataSymbol;
      error?: gqlessError;
      isLoading: boolean;
      isRefetching: boolean;
      called: boolean;
    } = {
      data: emptyDataSymbol,
      isLoading: false,
      isRefetching: false,
      called: false,
    };

    let promiseOnTheFly:
      | (Promise<ReturnType<TFunction>> & {
          schedulerPromise: Promise<SchedulerPromiseValue>;
        })
      | undefined;

    const subscribers = new Set<() => void>();

    function updateSubs() {
      setTimeout(() => {
        if (subscribers.size) {
          for (const cb of subscribers) cb();
        }
      }, 0);
    }

    async function refetch(
      ...[args]: undefined extends Parameters<TFunction>['1']
        ? [Parameters<TFunction>['1']?]
        : [Parameters<TFunction>['1']]
    ): Promise<ReturnType<TFunction>> {
      state.called = true;
      state.isLoading = true;
      state.isRefetching = true;
      updateSubs();
      try {
        await refetchClient(() =>
          fn(query, args as Parameters<TFunction>['1'])
        );

        return await preload(
          //@ts-expect-error
          args
        );
      } finally {
        state.isLoading = false;
        state.isRefetching = false;
      }
    }

    async function preload(
      ...[args]: undefined extends Parameters<TFunction>['1']
        ? [Parameters<TFunction>['1']?]
        : [Parameters<TFunction>['1']]
    ): Promise<ReturnType<TFunction>> {
      state.called = true;
      state.isLoading = true;
      try {
        const result = prefetch(
          (query) =>
            fn(
              query,
              args as Parameters<TFunction>['1']
            ) as ReturnType<TFunction>
        );

        if (result instanceof Promise) {
          promiseOnTheFly = result;
          updateSubs();
          result.schedulerPromise.then(({ error }) => {
            if (error) {
              state.error = error;
            } else {
              delete state.error;
            }
          });
          const data = (state.data = await result);

          if (promiseOnTheFly === result) promiseOnTheFly = undefined;

          return data;
        } else {
          delete state.error;
        }

        return (state.data = result);
      } finally {
        state.isLoading = false;
        updateSubs();
      }
    }

    function usePrepared({
      suspense = defaultSuspense,
    }: UsePreparedQueryOptions = {}) {
      const isMounted = useIsMounted();

      const forceUpdate = useForceUpdate();

      if (promiseOnTheFly) {
        const promise = promiseOnTheFly.then(() => {
          if (isMounted.current) forceUpdate();
        });
        if (suspense) throw promise;
      }

      useIsomorphicLayoutEffect(() => {
        let isMounted = true;
        const cb = () => isMounted && forceUpdate();
        subscribers.add(cb);

        return () => {
          isMounted = false;
          subscribers.delete(cb);
        };
      }, [forceUpdate]);

      return {
        ...state,
        data: state.data !== emptyDataSymbol ? state.data : undefined,
      };
    }

    return {
      preload,
      refetch,
      usePrepared,
      callback: fn,
    };
  };

  return prepareQuery;
}
