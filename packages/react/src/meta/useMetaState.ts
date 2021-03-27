import type { GqlessClient, gqlessError, Selection } from 'gqless';
import type { SchedulerPromiseValue } from 'gqless/dist/Scheduler';
import { useCallback, useEffect, useRef, useState } from 'react';

import {
  BuildSelections,
  isAnySelectionIncluded,
  isAnySelectionIncludedInMatrix,
  isSelectionIncluded,
  useBuildSelections,
  useIsomorphicLayoutEffect,
} from '../common';
import { areArraysEqual } from '../utils';

export interface UseMetaStateOptions<T> {
  onStartFetching?: () => void;
  onDoneFetching?: () => void;
  onError?: (data: {
    newError: gqlessError;
    selections: Selection[];
    isLastTry: boolean;
  }) => void;
  onRetry?: (data: {
    retryPromise: Promise<SchedulerPromiseValue>;
    selections: Set<Selection>;
  }) => void;
  filterSelections?: BuildSelections<T>;
}

export interface MetaState {
  isFetching: boolean;
  errors?: gqlessError[];
}

export interface UseMetaState {
  <T>(opts?: UseMetaStateOptions<T>): MetaState;
}

export function createUseMetaState(client: GqlessClient<any>) {
  const scheduler = client.scheduler;

  const {
    buildSelection,
    accessorCache: { getProxySelection },
  } = client;

  const errorsMap = scheduler.errors.map;

  const defaultEmptyOpts = {};

  const useMetaState: UseMetaState = function useMetaState(
    opts: UseMetaStateOptions<any> = defaultEmptyOpts
  ) {
    const {
      hasSpecifiedSelections: hasFilterSelections,
      selections: selectionsToFilter,
    } = useBuildSelections(
      opts.filterSelections,
      buildSelection,
      getProxySelection,
      useMetaState
    );

    const [promisesInFly] = useState(() => {
      return new Set<Promise<unknown>>();
    });

    const isMountedRef = useRef(true);
    useEffect(() => {
      return () => {
        isMountedRef.current = false;
      };
    }, []);

    const getState = useCallback(
      (isMounted: { current: boolean } = isMountedRef): MetaState => {
        let isFetching: boolean;
        if (scheduler.pendingSelectionsGroups.size) {
          if (hasFilterSelections) {
            isFetching = isAnySelectionIncludedInMatrix(
              selectionsToFilter,
              scheduler.pendingSelectionsGroups
            );
          } else {
            isFetching = true;
          }

          if (isFetching && scheduler.pendingSelectionsGroupsPromises.size) {
            Promise.all(
              scheduler.pendingSelectionsGroupsPromises.values()
            ).finally(() => setStateIfChanged(isMounted));
          }
        } else {
          isFetching = false;
        }

        let errors: gqlessError[] | undefined;

        if (hasFilterSelections) {
          const errorsSet = new Set<gqlessError>();

          selectionsToFilter.forEach((selection) => {
            const error = errorsMap.get(selection);

            if (error) errorsSet.add(error);
          });

          if (errorsSet.size) errors = Array.from(errorsSet);
        } else if (errorsMap.size) {
          errors = Array.from(new Set(errorsMap.values()));
        }

        return errors ? { isFetching, errors } : { isFetching };
      },
      [hasFilterSelections, selectionsToFilter]
    );

    const setStateIfChanged = useCallback(
      function setStateIfChanged(isMounted: { current: boolean }) {
        if (!isMounted.current) return;

        const prevState = stateRef.current;

        const newState = getState(isMounted);

        if (
          prevState.isFetching !== newState.isFetching ||
          !areArraysEqual(prevState.errors, newState.errors)
        ) {
          stateRef.current = newState;
          setTimeout(() => {
            if (isMounted.current) setState(newState);
          }, 0);
        }
      },
      []
    );

    const [state, setState] = useState(getState);

    const stateRef = useRef(state);
    stateRef.current = state;

    const optsRef = useRef(opts);
    optsRef.current = opts;

    useIsomorphicLayoutEffect(() => {
      const isMounted = { current: true };

      const unsubscribeIsFetching = scheduler.subscribeResolve(
        (promise, selection) => {
          if (promisesInFly.has(promise)) return;

          if (
            hasFilterSelections &&
            !isSelectionIncluded(selection, selectionsToFilter)
          ) {
            return;
          }

          if (promisesInFly.size === 0) optsRef.current.onStartFetching?.();

          promisesInFly.add(promise);

          setStateIfChanged(isMounted);

          promise.then(() => {
            promisesInFly.delete(promise);

            if (promisesInFly.size === 0) optsRef.current.onDoneFetching?.();

            setStateIfChanged(isMounted);
          });
        }
      );

      const unsubscribeErrors = scheduler.errors.subscribeErrors((data) => {
        switch (data.type) {
          case 'new_error': {
            if (hasFilterSelections) {
              if (isAnySelectionIncluded(selectionsToFilter, data.selections))
                optsRef.current.onError?.({
                  newError: data.newError,
                  selections: data.selections,
                  isLastTry: data.isLastTry,
                });
              else return;
            } else {
              optsRef.current.onError?.({
                newError: data.newError,
                selections: data.selections,
                isLastTry: data.isLastTry,
              });
            }
            break;
          }
          case 'retry': {
            if (hasFilterSelections) {
              if (isAnySelectionIncluded(selectionsToFilter, data.selections)) {
                optsRef.current.onRetry?.({
                  retryPromise: data.retryPromise,
                  selections: data.selections,
                });
                data.retryPromise.finally(() => {
                  setTimeout(() => {
                    setStateIfChanged(isMounted);
                  }, 0);
                });
              }
            } else {
              optsRef.current.onRetry?.({
                retryPromise: data.retryPromise,
                selections: data.selections,
              });
              data.retryPromise.finally(() => {
                setTimeout(() => {
                  setStateIfChanged(isMounted);
                }, 0);
              });
            }
            break;
          }
          case 'errors_clean': {
          }
        }

        setStateIfChanged(isMounted);
      });

      return () => {
        isMounted.current = false;
        unsubscribeIsFetching();
        unsubscribeErrors();
      };
    }, [getState, hasFilterSelections, setState, optsRef, selectionsToFilter]);

    return state;
  };

  return useMetaState;
}
