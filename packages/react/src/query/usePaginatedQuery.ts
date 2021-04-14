import type { GQlessClient } from 'gqless';
import { Dispatch, useCallback, useMemo, useReducer, useRef } from 'react';

import {
  coreHelpers,
  CoreHelpers,
  FetchPolicy,
  useSelectionsState,
  useSubscribeCacheChanges,
  useSuspensePromise,
  uniqBy,
  sortBy,
} from '../common';
import { ReactClientOptionsWithDefaults } from '../utils';

export type PaginatedQueryFetchPolicy = Extract<
  FetchPolicy,
  'cache-first' | 'cache-and-network' | 'network-only'
>;

export interface UsePaginatedQueryMergeParams<TData> {
  data: {
    existing: TData | undefined;
    incoming: TData;
  };
  uniqBy: typeof uniqBy;
  sortBy: typeof sortBy;
}

export interface UsePaginatedQueryOptions<TData, TArgs> {
  /**
   * Initial arguments used on first request
   */
  initialArgs: TArgs;
  /**
   * Custom merge function
   */
  merge?: (
    params: UsePaginatedQueryMergeParams<TData>
  ) => TData | undefined | void;
  /**
   * Fetch Policy behavior
   *
   * If using `cache-and-network` and `merge`, we recomend using the `uniqBy` helper included inside the `merge` parameters.
   */
  fetchPolicy?: PaginatedQueryFetchPolicy;
  /**
   * Skip initial query call
   *
   * @default false
   */
  skip?: boolean;
  /**
   * Activate suspense on first call
   */
  suspense?: boolean;
}

export interface UsePaginatedQueryData<TData, TArgs> {
  /**
   * Query Data
   */
  data: TData | undefined;
  /**
   * Current arguments used in the query
   */
  args: TArgs;
  /**
   * Network fetch is loading
   */
  isLoading: boolean;
  /**
   * Main function to be used
   *
   * If new args are not specified, the previous or initial args are used
   *
   * In the second parameter you can override the `"fetchPolicy"`, for example you can set it to `"network-only"` to do a refetch.
   */
  fetchMore: (
    /**
     * Optional new args. It can receive a function that receives the previous data/args and returns the new args, or the new args directly
     *
     * If not specified or `undefined`, the previous or initial args are used.
     */
    newArgs?:
      | ((data: FetchMoreCallbackArgs<TData, TArgs>) => TArgs)
      | TArgs
      | undefined,
    /**
     * Override hook fetchPolicy
     */
    fetchPolicy?: PaginatedQueryFetchPolicy
  ) => Promise<TData> | TData;
  /**
   * Has the function been called
   */
  called: boolean;
}

interface UsePaginatedQueryState<TData, TArgs> {
  data: TData | undefined;
  args: TArgs;
  isLoading: boolean;
  called: boolean;
}

type UsePaginatedQueryReducerAction<TData> =
  | {
      type: 'loading';
    }
  | {
      type: 'cache_found';
      payload: TData;
    }
  | {
      type: 'data';
      payload: TData;
    };

function UsePaginatedQueryReducer<TData, TArgs>(
  state: UsePaginatedQueryState<TData, TArgs>,
  action: UsePaginatedQueryReducerAction<TData>
): UsePaginatedQueryState<TData, TArgs> {
  switch (action.type) {
    case 'loading': {
      if (state.isLoading) return state;
      return {
        ...state,
        isLoading: true,
        called: true,
      };
    }
    case 'cache_found': {
      return {
        data: action.payload,
        args: state.args,
        isLoading: true,
        called: true,
      };
    }
    case 'data': {
      return {
        data: action.payload,
        args: state.args,
        isLoading: false,
        called: true,
      };
    }
    default:
      return state;
  }
}

function InitUsePaginatedQueryReducer<TData, TArgs>(
  opts: UsePaginatedQueryOptions<TData, TArgs>
): UsePaginatedQueryState<TData, TArgs> {
  return {
    data: undefined,
    args: opts.initialArgs,
    isLoading: !opts.skip,
    called: false,
  };
}

export interface FetchMoreCallbackArgs<TData, TArgs> {
  existingData: TData | undefined;
  existingArgs: TArgs;
}

export interface UsePaginatedQuery<
  GeneratedSchema extends {
    query: object;
    mutation: object;
    subscription: object;
  }
> {
  <TData, TArgs extends Record<string, any> | string | number | null>(
    fn: (
      query: GeneratedSchema['query'],
      args: TArgs,
      helpers: CoreHelpers
    ) => TData,
    options: UsePaginatedQueryOptions<TData, TArgs>
  ): UsePaginatedQueryData<TData, TArgs>;
}

export function createUsePaginatedQuery<
  GeneratedSchema extends {
    query: object;
    mutation: object;
    subscription: object;
  }
>(
  {
    query: clientQuery,
    inlineResolved,
    eventHandler,
  }: GQlessClient<GeneratedSchema>,
  {
    defaults: {
      paginatedQueryFetchPolicy: defaultFetchPolicy,
      paginatedQuerySuspense: defaultSuspense,
    },
  }: ReactClientOptionsWithDefaults
): UsePaginatedQuery<GeneratedSchema> {
  function usePaginatedQuery<
    TData,
    TArgs extends Record<string, any> | string | number | null
  >(
    fn: (query: typeof clientQuery, args: TArgs, helpers: CoreHelpers) => TData,
    opts: UsePaginatedQueryOptions<TData, TArgs>
  ): UsePaginatedQueryData<TData, TArgs> {
    const fnRef = useRef(fn);
    fnRef.current = fn;

    const optsRef = useRef(opts);
    optsRef.current = Object.assign({}, opts);

    optsRef.current.fetchPolicy ??= defaultFetchPolicy;
    optsRef.current.suspense ??= defaultSuspense;

    const [state, dispatch] = useReducer(
      UsePaginatedQueryReducer,
      opts,
      InitUsePaginatedQueryReducer
    ) as [
      UsePaginatedQueryState<TData, TArgs>,
      Dispatch<UsePaginatedQueryReducerAction<TData>>
    ];

    const hookSelections = useSelectionsState();

    const stateRef = useRef(state);
    stateRef.current = state;

    const setSuspensePromise = useSuspensePromise(optsRef);

    const isMerging = useRef(0);

    const fetchMore = useCallback(
      (
        newArgs?:
          | ((data: FetchMoreCallbackArgs<TData, TArgs>) => TArgs)
          | TArgs,
        fetchPolicy: PaginatedQueryFetchPolicy = optsRef.current.fetchPolicy ||
          defaultFetchPolicy
      ) => {
        function mergeData(incomingData: TData) {
          let mergeResult: TData | void | undefined;

          if (optsRef.current.merge) {
            const params: UsePaginatedQueryMergeParams<TData> = {
              data: {
                incoming: incomingData,
                existing: stateRef.current.data,
              },
              uniqBy,
              sortBy,
            };
            try {
              ++isMerging.current;
              mergeResult = optsRef.current.merge(params);
            } finally {
              Promise.resolve().then(() => --isMerging.current);
            }
          }

          return mergeResult === undefined ? incomingData : mergeResult;
        }

        let args: TArgs =
          newArgs !== undefined
            ? typeof newArgs === 'function'
              ? (newArgs as (
                  data: FetchMoreCallbackArgs<TData, TArgs>
                ) => TArgs)({
                  existingData: stateRef.current.data,
                  existingArgs: stateRef.current.args,
                })
              : newArgs
            : stateRef.current.args;

        const resolvedFn = () => fnRef.current(clientQuery, args, coreHelpers);

        const refetch = fetchPolicy !== 'cache-first';

        let incomingData = inlineResolved(resolvedFn, {
          onSelection(selection) {
            hookSelections.add(selection);
          },
          refetch,
          onCacheData(data) {
            if (fetchPolicy === 'cache-and-network') {
              const payload = mergeData(data);

              stateRef.current.data = payload;
              dispatch({
                type: 'cache_found',
                payload,
              });
            }
          },
        });

        if (incomingData instanceof Promise) {
          dispatch({
            type: 'loading',
          });

          return incomingData.then((incomingData) => {
            const payload = mergeData(incomingData);
            stateRef.current.data = payload;

            dispatch({
              type: 'data',
              payload,
            });
            return payload;
          });
        }

        const payload = mergeData(incomingData);
        stateRef.current.data = payload;

        dispatch({
          type: 'data',
          payload,
        });
        return payload;
      },
      [stateRef, fnRef, dispatch, optsRef, setSuspensePromise]
    );

    useSubscribeCacheChanges({
      hookSelections,
      eventHandler,
      onChange() {
        if (isMerging.current) return;

        fetchMore(undefined, 'cache-first');
      },
    });

    if (!state.called && !opts.skip) {
      state.called = true;
      const result = fetchMore();

      if (result instanceof Promise) {
        const catchedPromise = result.catch(console.error);
        if (state.data === undefined) {
          Promise.resolve().then(() => {
            setSuspensePromise(catchedPromise);
          });
        }
      }
    }

    return useMemo(() => {
      return Object.assign(state, {
        fetchMore,
      });
    }, [state, fetchMore]);
  }

  return usePaginatedQuery;
}
