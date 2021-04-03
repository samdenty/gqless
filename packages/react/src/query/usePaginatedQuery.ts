import {
  GqlessClient,
  prepass,
  getFields,
  getArrayFields,
  selectFields,
  castNotSkeleton,
  castNotSkeletonDeep,
} from 'gqless';
import { Dispatch, useCallback, useEffect, useReducer, useRef } from 'react';
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

function compare(a: string | number, b: string | number) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

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

interface UsePaginatedQueryMergeParams<TData> {
  data: {
    existing: TData | undefined;
    incoming: TData;
  };
  uniqBy: typeof uniqBy;
  sortBy: typeof sortBy;
}

interface UsePaginatedQueryOptions<TData, TArgs> {
  merge?: (
    params: UsePaginatedQueryMergeParams<TData>
  ) => TData | undefined | void;
  initialArgs: TArgs;
}

interface UsePaginatedQueryState<TData, TArgs> {
  data: TData | undefined;
  args: TArgs;
  isLoading: boolean;
}

type UsePaginatedQueryReducerAction<TData> =
  | {
      type: 'loading';
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
      };
    }
    case 'data': {
      return {
        data: action.payload,
        args: state.args,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}

function InitUsePaginatedQueryReducer<TData, TArgs>(
  args: TArgs
): UsePaginatedQueryState<TData, TArgs> {
  return {
    data: undefined,
    args,
    isLoading: true,
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
      | undefined
  ) => Promise<TData>;
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
    { initialArgs, merge }: UsePaginatedQueryOptions<TData, TArgs>
  ): UsePaginatedQueryData<TData, TArgs>;
}

export function createUsePaginatedQuery<
  GeneratedSchema extends {
    query: object;
    mutation: object;
    subscription: object;
  }
>(
  { query: clientQuery, resolved }: GqlessClient<GeneratedSchema>,
  {}: ReactClientOptionsWithDefaults
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
    { initialArgs, merge }: UsePaginatedQueryOptions<TData, TArgs>
  ): UsePaginatedQueryData<TData, TArgs> {
    const fnRef = useRef(fn);
    fnRef.current = fn;

    const [state, dispatch] = useReducer(
      UsePaginatedQueryReducer,
      initialArgs,
      InitUsePaginatedQueryReducer
    ) as [
      UsePaginatedQueryState<TData, TArgs>,
      Dispatch<UsePaginatedQueryReducerAction<TData>>
    ];

    const stateRef = useRef(state);
    stateRef.current = state;

    const fetchMore = useCallback(
      async (
        newArgs?: ((data: FetchMoreCallbackArgs<TData, TArgs>) => TArgs) | TArgs
      ) => {
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

        dispatch({
          type: 'loading',
        });

        const incomingData = await resolved(resolvedFn);

        let mergeResult: TData | void | undefined;

        if (merge) {
          const params: UsePaginatedQueryMergeParams<TData> = {
            data: {
              incoming: incomingData,
              existing: stateRef.current.data,
            },
            uniqBy,
            sortBy,
          };
          mergeResult = merge(params);
        }

        const payload = mergeResult === undefined ? incomingData : mergeResult;

        dispatch({
          type: 'data',
          payload,
        });
        return payload;
      },
      [stateRef, fnRef, dispatch]
    );

    useEffect(() => {
      fetchMore();
    }, [fetchMore]);

    return {
      ...state,
      fetchMore,
    };
  }

  return usePaginatedQuery;
}
