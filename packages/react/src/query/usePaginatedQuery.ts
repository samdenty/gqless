import {
  GqlessClient,
  prepass,
  getFields,
  getArrayFields,
  selectFields,
  castNotSkeleton,
  castNotSkeletonDeep,
} from 'gqless';
import { Dispatch, useCallback, useMemo, useReducer, useRef } from 'react';
import {
  FetchPolicy,
  useSelectionsState,
  useSubscribeCacheChanges,
  useSuspensePromise,
} from '../common';
import { ReactClientOptionsWithDefaults } from '../utils';

function uniqBy<TNode>(list: TNode[], cb?: (node: TNode) => unknown): TNode[] {
  const uniqList = new Map<unknown, TNode>();
  for (const value of list) {
    let key: unknown = cb ? cb(value) : value;

    if (uniqList.has(key)) continue;
    uniqList.set(key, value);
  }
  return Array.from(uniqList.values());
}

const compare = (a: string | number, b: string | number) =>
  a < b ? -1 : a > b ? 1 : 0;

function sortBy<TNode>(
  list: TNode[],
  cb: (node: TNode) => number | string,
  order: 'asc' | 'desc' = 'asc'
): TNode[] {
  const orderedList = Array.from(list);

  orderedList.sort((a, b) => compare(cb(a), cb(b)));

  if (order === 'desc') orderedList.reverse();

  return orderedList;
}

export type PaginatedQueryFetchPolicy = Extract<
  FetchPolicy,
  'cache-first' | 'cache-and-network' | 'network-only'
>;

interface UsePaginatedQueryMergeParams<TData> {
  data: {
    existing: TData | undefined;
    incoming: TData;
  };
  uniqBy: typeof uniqBy;
  sortBy: typeof sortBy;
}

interface UsePaginatedQueryOptions<TData, TArgs> {
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

interface FetchMoreCallbackArgs<TData, TArgs> {
  existingData: TData | undefined;
  existingArgs: TArgs;
}

interface UsePaginatedQueryData<TData, TArgs> {
  data: TData | undefined;
  args: TArgs;
  isLoading: boolean;
  fetchMore: (
    newArgs?:
      | ((data: FetchMoreCallbackArgs<TData, TArgs>) => TArgs)
      | TArgs
      | undefined,
    fetchPolicy?: PaginatedQueryFetchPolicy
  ) => Promise<TData> | TData;
}

export const queryHelpers = {
  prepass,
  getFields,
  getArrayFields,
  selectFields,
  castNotSkeleton,
  castNotSkeletonDeep,
};

export interface UsePaginatedQuery<
  GeneratedSchema extends {
    query: object;
    mutation: object;
    subscription: object;
  }
> {
  <TData, TArgs extends Record<string, any> | string | number>(
    fn: (
      query: GeneratedSchema['query'],
      args: TArgs,
      helpers: typeof queryHelpers
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
  }: GqlessClient<GeneratedSchema>,
  {
    defaults: {
      paginatedQueryFetchPolicy: defaultFetchPolicy,
      paginatedQuerySuspense: defaultSuspense,
    },
  }: ReactClientOptionsWithDefaults
): UsePaginatedQuery<GeneratedSchema> {
  function usePaginatedQuery<
    TData,
    TArgs extends Record<string, any> | string | number
  >(
    fn: (
      query: typeof clientQuery,
      args: TArgs,
      helpers: typeof queryHelpers
    ) => TData,
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
            mergeResult = optsRef.current.merge(params);
          }

          return mergeResult === undefined ? incomingData : mergeResult;
        }

        const args = newArgs
          ? (stateRef.current.args =
              typeof newArgs === 'function'
                ? (newArgs as (
                    data: FetchMoreCallbackArgs<TData, TArgs>
                  ) => TArgs)({
                    existingData: stateRef.current.data,
                    existingArgs: stateRef.current.args,
                  })
                : newArgs)
          : stateRef.current.args;

        const resolvedFn = () => fnRef.current(clientQuery, args, queryHelpers);

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
