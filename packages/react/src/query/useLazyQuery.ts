import { doRetry, GqlessClient, gqlessError, RetryOptions } from 'gqless';
import { Dispatch, useCallback, useMemo, useReducer, useRef } from 'react';

import {
  FetchPolicy,
  fetchPolicyDefaultResolveOptions,
  OnErrorHandler,
  useDeferDispatch,
  useSuspensePromise,
} from '../common';
import { ReactClientOptionsWithDefaults } from '../utils';

export type LazyFetchPolicy = Exclude<FetchPolicy, 'cache-first'>;

export interface UseLazyQueryOptions<TData> {
  onCompleted?: (data: TData) => void;
  onError?: OnErrorHandler;
  fetchPolicy?: LazyFetchPolicy;
  retry?: RetryOptions;
  suspense?: boolean;
}

export interface UseLazyQueryState<TData> {
  data: TData | undefined;
  error?: gqlessError;
  isLoading: boolean;
  isCalled: boolean;
}

type UseLazyQueryReducerAction<TData> =
  | { type: 'cache-found'; data: TData }
  | { type: 'success'; data: TData }
  | { type: 'failure'; error: gqlessError }
  | { type: 'loading' };

function UseLazyQueryReducer<TData>(
  state: UseLazyQueryState<TData>,
  action: UseLazyQueryReducerAction<TData>
): UseLazyQueryState<TData> {
  switch (action.type) {
    case 'loading': {
      if (state.isLoading) return state;
      return {
        data: state.data,
        isLoading: true,
        isCalled: true,
      };
    }
    case 'success': {
      return {
        data: action.data,
        isLoading: false,
        isCalled: true,
      };
    }
    case 'failure': {
      return {
        data: state.data,
        isLoading: false,
        error: action.error,
        isCalled: true,
      };
    }
    case 'cache-found': {
      return {
        data: action.data,
        isLoading: state.isLoading,
        isCalled: true,
      };
    }
  }
}

function InitUseLazyQueryReducer<TData>(): UseLazyQueryState<TData> {
  return {
    data: undefined,
    isLoading: false,
    isCalled: false,
  };
}

export interface UseLazyQuery<
  GeneratedSchema extends {
    query: object;
  }
> {
  <TData = unknown, TArgs = undefined>(
    queryFn: (query: GeneratedSchema['query'], args: TArgs) => TData,
    options?: UseLazyQueryOptions<TData>
  ): readonly [
    (
      ...opts: undefined extends TArgs
        ? [
            {
              fn?: (query: GeneratedSchema['query'], args: TArgs) => TData;
              args?: TArgs;
              fetchPolicy?: LazyFetchPolicy;
            }?
          ]
        : [
            {
              fn?: (query: GeneratedSchema['query'], args: TArgs) => TData;
              args: TArgs;
              fetchPolicy?: LazyFetchPolicy;
            }
          ]
    ) => Promise<TData>,
    UseLazyQueryState<TData>
  ];
}

export function createUseLazyQuery<
  GeneratedSchema extends {
    query: object;
    mutation: object;
    subscription: object;
  }
>(
  client: GqlessClient<GeneratedSchema>,
  {
    defaults: {
      retry: defaultRetry,
      lazyQuerySuspense: defaultSuspense,
      lazyFetchPolicy: defaultFetchPolicy,
    },
  }: ReactClientOptionsWithDefaults
) {
  const { resolved } = client;
  const clientQuery: GeneratedSchema['query'] = client.query;

  const useLazyQuery: UseLazyQuery<GeneratedSchema> = function useLazyQuery<
    TData,
    TArgs = undefined
  >(
    fn: (query: typeof clientQuery, args: TArgs) => TData,
    opts: UseLazyQueryOptions<TData> = {}
  ): readonly [
    (callbackArgs?: {
      fn?: (query: GeneratedSchema['query'], args: TArgs) => TData;
      args?: TArgs;
    }) => Promise<TData>,
    UseLazyQueryState<TData>
  ] {
    const [state, dispatchReducer] = useReducer(
      UseLazyQueryReducer,
      undefined,
      InitUseLazyQueryReducer
    ) as [UseLazyQueryState<TData>, Dispatch<UseLazyQueryReducerAction<TData>>];
    const dispatch = useDeferDispatch(dispatchReducer);

    const stateRef = useRef(state);
    stateRef.current = state;

    const fnRef = useRef(fn);
    fnRef.current = fn;

    const optsRef = useRef(opts);
    optsRef.current = Object.assign({}, opts);
    optsRef.current.suspense ??= defaultSuspense;

    const setSuspensePromise = useSuspensePromise(optsRef);

    const queryFn = useCallback(
      function callback(
        callbackArgs: {
          fn?: typeof fn;
          args?: any;
          fetchPolicy?: LazyFetchPolicy;
        } = {}
      ) {
        dispatch({
          type: 'loading',
        });

        const {
          fn: fnArg,
          args,
          fetchPolicy = optsRef.current.fetchPolicy ?? defaultFetchPolicy,
        } = callbackArgs;

        const refFn = fnRef.current;

        const functionResolve = fnArg
          ? () => fnArg(clientQuery, args)
          : refFn
          ? () => refFn(clientQuery, args)
          : (() => {
              throw new gqlessError(
                'You have to specify a function to be resolved',
                {
                  caller: callback,
                }
              );
            })();

        const resolveOptions = fetchPolicyDefaultResolveOptions(fetchPolicy);

        return resolved<TData>(functionResolve, {
          ...resolveOptions,
          onCacheData(data): boolean {
            switch (fetchPolicy) {
              case 'cache-and-network': {
                dispatch({
                  type: 'cache-found',
                  data,
                });
                stateRef.current.data = data;
                return true;
              }
              default:
                return false;
            }
          },
        }).then(
          (data) => {
            optsRef.current.onCompleted?.(data);
            dispatch({
              type: 'success',
              data,
            });
            return data;
          },
          (err) => {
            const error = gqlessError.create(err, useLazyQuery);
            optsRef.current.onError?.(error);
            dispatch({
              type: 'failure',
              error,
            });

            throw error;
          }
        );
      },
      [fnRef, dispatch, optsRef]
    );

    const { retry = defaultRetry } = opts;

    return useMemo(() => {
      const fn: typeof queryFn = retry
        ? (...args) => {
            const promise = queryFn(...args).catch((err) => {
              doRetry(retry, {
                onRetry: () => {
                  const promise = queryFn(...args).then(() => {});

                  setSuspensePromise(promise);

                  return promise;
                },
              });

              throw err;
            });

            setSuspensePromise(promise);

            return promise;
          }
        : (...args: any[]) => {
            const promise = queryFn(...args);

            setSuspensePromise(promise);

            return promise;
          };

      return [fn, state];
    }, [state, queryFn, retry, optsRef, setSuspensePromise]);
  };

  return useLazyQuery;
}
