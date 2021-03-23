import {
  doRetry,
  GqlessClient,
  gqlessError,
  RetryOptions,
  Selection,
  SelectionType,
} from 'gqless';
import { useCallback, useMemo, useReducer, useRef, useState } from 'react';

import { useIsomorphicLayoutEffect, useLazyRef } from '../common';
import { ReactClientOptionsWithDefaults } from '../utils';

function initSelectionsState() {
  return new Set<Selection>();
}

interface UseRefetchReducerState {
  isLoading: boolean;
  error?: gqlessError;
}

type UseRefetchReducerAction =
  | {
      type: 'loading';
    }
  | {
      type: 'done';
    }
  | {
      type: 'error';
      error: gqlessError;
    };

function UseRefetchReducer(
  state: UseRefetchReducerState,
  action: UseRefetchReducerAction
): UseRefetchReducerState {
  switch (action.type) {
    case 'loading': {
      if (state.isLoading) return state;
      return {
        isLoading: true,
      };
    }
    case 'done': {
      return {
        isLoading: false,
      };
    }
    case 'error': {
      return {
        isLoading: false,
        error: action.error,
      };
    }
  }
}

function InitUseRefetchReducer(): UseRefetchReducerState {
  return {
    isLoading: false,
  };
}

export interface UseRefetchState extends UseRefetchReducerState {
  startWatching: () => void;
  stopWatching: () => void;
}

export interface UseRefetchOptions {
  notifyOnNetworkStatusChange?: boolean;
  startWatching?: boolean;
  retry?: RetryOptions;
}

export interface UseRefetch {
  (refetchOptions?: UseRefetchOptions): (<T = void>(
    refetchArg?: T | (() => T)
  ) => Promise<T | undefined>) &
    UseRefetchState;
}

export function createUseRefetch(
  client: GqlessClient<any>,
  { defaults: { retry: defaultRetry } }: ReactClientOptionsWithDefaults
) {
  const { interceptorManager, buildAndFetchSelections, refetch } = client;

  function initInnerState() {
    return {
      watching: true,
    };
  }

  const useRefetch: UseRefetch = function useRefetch(
    refetchOptions
  ): (<T = undefined>(refetchArg?: T | (() => T)) => Promise<T | undefined>) &
    UseRefetchState {
    const opts = Object.assign({}, refetchOptions);
    opts.notifyOnNetworkStatusChange ??= true;
    opts.startWatching ??= true;
    opts.retry ??= defaultRetry;

    const optsRef = useRef(opts);
    optsRef.current = opts;

    const { retry } = opts;

    const innerState = useLazyRef(initInnerState);
    innerState.current.watching = opts.startWatching;

    const startWatching = useCallback(() => {
      innerState.current.watching = true;
    }, [innerState]);

    const stopWatching = useCallback(() => {
      innerState.current.watching = false;
    }, [innerState]);

    const [selections] = useState(initSelectionsState);
    const [reducerState, dispatch] = useReducer(
      UseRefetchReducer,
      undefined,
      InitUseRefetchReducer
    );

    const interceptor = interceptorManager.createInterceptor();

    setTimeout(() => {
      interceptorManager.removeInterceptor(interceptor);
    }, 0);

    useIsomorphicLayoutEffect(() => {
      interceptorManager.removeInterceptor(interceptor);
    });

    interceptor.selectionAddListeners.add((selection) => {
      if (!innerState.current.watching) return;

      selections.add(selection);
    });

    interceptor.selectionCacheListeners.add((selection) => {
      if (!innerState.current.watching) return;

      selections.add(selection);
    });

    const refetchCallback = useCallback(
      async <T = undefined>(
        refetchArg?: T | (() => T)
      ): Promise<T | undefined> => {
        if (refetchArg !== undefined) {
          if (optsRef.current.notifyOnNetworkStatusChange) {
            dispatch({
              type: 'loading',
            });
          }

          try {
            const refetchData = await refetch(refetchArg);

            dispatch({
              type: 'done',
            });

            return refetchData;
          } catch (err) {
            const error = gqlessError.create(err, useRefetch);
            dispatch({
              type: 'error',
              error,
            });
            throw error;
          }
        }

        const selectionsToRefetch = Array.from(selections).filter(
          (v) => v.type === SelectionType.Query
        );
        if (selectionsToRefetch.length === 0) {
          if (process.env.NODE_ENV !== 'production')
            console.warn('Warning! No selections available to refetch!');
          return;
        }

        if (optsRef.current.notifyOnNetworkStatusChange)
          dispatch({
            type: 'loading',
          });

        try {
          await buildAndFetchSelections(selectionsToRefetch, 'query');
          dispatch({
            type: 'done',
          });
        } catch (err) {
          const error = gqlessError.create(err, useRefetch);
          dispatch({
            type: 'error',
            error,
          });
          throw error;
        }

        return;
      },
      [selections, dispatch, optsRef]
    );

    const state: UseRefetchState = useMemo(
      () =>
        Object.assign(reducerState, {
          startWatching,
          stopWatching,
        }),
      [reducerState, startWatching, stopWatching]
    );

    return useMemo(() => {
      const fn = refetchCallback.bind(undefined);

      const returnValue: ReturnType<UseRefetch> = Object.assign(
        retry
          ? (...args: any[]) => {
              return fn(...args).catch((err) => {
                doRetry(retry, {
                  onRetry: () => fn(...args),
                });
                throw err;
              });
            }
          : fn,
        state
      );

      return returnValue;
    }, [refetchCallback, state, retry]);
  };

  return useRefetch;
}
