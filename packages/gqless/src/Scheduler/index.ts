import { gqlessError } from '../Error';
import { InterceptorManager } from '../Interceptor';
import { Selection } from '../Selection';
import { createDeferredPromise, DeferredPromise } from '../Utils';
import { debounce } from '../Utils/debounce';

export type SchedulerPromiseValue = {
  error?: gqlessError;
  data?: unknown;
  selections: Set<Selection>;
};

export type ErrorSubscriptionEvent =
  | {
      type: 'new_error';
      newError: gqlessError;
      selections: Selection[];
      isLastTry: boolean;
    }
  | {
      type: 'errors_clean';
      selectionsCleaned: Selection[];
    }
  | {
      type: 'retry';
      retryPromise: Promise<SchedulerPromiseValue>;
      selections: Set<Selection>;
    };

export type ErrorSubscriptionFn = (event: ErrorSubscriptionEvent) => void;

export type IsFetchingSubscriptionFn = (isFetching: boolean) => void;

export interface Scheduler {
  resolving: DeferredPromise<SchedulerPromiseValue> | null;
  subscribeResolve: (
    fn: (promise: Promise<SchedulerPromiseValue>, selection: Selection) => void
  ) => () => void;
  errors: {
    map: Map<Selection, gqlessError>;
    subscribeErrors: (fn: ErrorSubscriptionFn) => () => void;
    triggerError: (
      newError: gqlessError,
      selections: Selection[],
      isLastTry: boolean
    ) => void;
    removeErrors: (selectionsCleaned: Selection[]) => void;
    retryPromise: (
      retryPromise: Promise<SchedulerPromiseValue>,
      selections: Set<Selection>
    ) => void;
  };
  isFetching: boolean;
  pendingSelectionsGroups: Set<Set<Selection>>;
  pendingSelectionsGroupsPromises: Map<
    Set<Selection>,
    Promise<SchedulerPromiseValue>
  >;
}

export const createScheduler = (
  { globalInterceptor }: InterceptorManager,
  resolveSchedulerSelections: (selections: Set<Selection>) => Promise<void>,
  catchSelectionsTimeMS: number
): Scheduler => {
  type ResolvingLazyPromise = DeferredPromise<SchedulerPromiseValue>;
  type ResolvedLazyPromise = Promise<SchedulerPromiseValue>;

  type ResolveSubscriptionFn = (
    promise: ResolvedLazyPromise,
    selection: Selection
  ) => void;

  const resolveListeners = new Set<ResolveSubscriptionFn>();

  function subscribeResolve(fn: ResolveSubscriptionFn) {
    resolveListeners.add(fn);

    return function unsubscribe() {
      resolveListeners.delete(fn);
    };
  }

  const errorsMap = new Map<Selection, gqlessError>();

  const pendingSelectionsGroups = new Set<Set<Selection>>();
  const pendingSelectionsGroupsPromises = new Map<
    Set<Selection>,
    ResolvedLazyPromise
  >();

  const selectionsOnTheFly = new Set<Selection>();

  const selectionsWithFinalErrors = new Set<Selection>();

  const scheduler = {
    resolving: null as null | ResolvingLazyPromise,
    subscribeResolve,
    errors: {
      map: errorsMap,
      subscribeErrors,
      triggerError,
      removeErrors,
      retryPromise,
    },
    isFetching: false,
    pendingSelectionsGroups,
    pendingSelectionsGroupsPromises,
  };

  const errorsListeners = new Set<ErrorSubscriptionFn>();

  function subscribeErrors(fn: ErrorSubscriptionFn) {
    errorsListeners.add(fn);

    return function unsubscribe() {
      errorsListeners.delete(fn);
    };
  }

  function retryPromise(
    retryPromise: Promise<SchedulerPromiseValue>,
    selections: Set<Selection>
  ) {
    pendingSelectionsGroups.add(selections);
    pendingSelectionsGroupsPromises.set(selections, retryPromise);

    retryPromise.finally(() => {
      pendingSelectionsGroups.delete(selections);
      pendingSelectionsGroupsPromises.delete(selections);
    });

    const data: ErrorSubscriptionEvent = {
      type: 'retry',
      retryPromise,
      selections,
    };
    errorsListeners.forEach((listener) => {
      listener(data);
    });
  }

  function triggerError(
    newError: gqlessError,
    selections: Selection[],
    isLastTry: boolean
  ) {
    if (!selections.length) return;

    for (const selection of selections) errorsMap.set(selection, newError);

    const data: ErrorSubscriptionEvent = {
      type: 'new_error',
      newError,
      selections,
      isLastTry,
    };
    errorsListeners.forEach((listener) => {
      listener(data);
    });
  }

  function removeErrors(selectionsCleaned: Selection[]) {
    if (errorsMap.size === 0) return;

    for (const selection of selectionsCleaned) {
      errorsMap.delete(selection);
      selectionsWithFinalErrors.delete(selection);
    }

    const data: ErrorSubscriptionEvent = {
      type: 'errors_clean',
      selectionsCleaned,
    };
    errorsListeners.forEach((listener) => {
      listener(data);
    });
  }

  let resolvingPromise: ResolvingLazyPromise | null = null;

  const fetchSelections = debounce((lazyPromise: ResolvingLazyPromise) => {
    resolvingPromise = null;

    const selectionsToFetch = new Set(globalInterceptor.fetchSelections);

    selectionsOnTheFly.clear();
    pendingSelectionsGroups.delete(selectionsOnTheFly);
    pendingSelectionsGroupsPromises.delete(selectionsOnTheFly);

    pendingSelectionsGroups.add(selectionsToFetch);
    pendingSelectionsGroupsPromises.set(selectionsToFetch, lazyPromise.promise);

    resolveSchedulerSelections(selectionsToFetch).then(
      () => {
        pendingSelectionsGroups.delete(selectionsToFetch);
        pendingSelectionsGroupsPromises.delete(selectionsToFetch);
        if (scheduler.resolving === lazyPromise) scheduler.resolving = null;
        lazyPromise.resolve({
          selections: selectionsToFetch,
        });
      },
      (error) => {
        pendingSelectionsGroups.delete(selectionsToFetch);
        pendingSelectionsGroupsPromises.delete(selectionsToFetch);

        /* istanbul ignore else */
        if (scheduler.resolving === lazyPromise) scheduler.resolving = null;

        lazyPromise.resolve({
          error,
          selections: selectionsToFetch,
        });
      }
    );
  }, catchSelectionsTimeMS);

  function addSelectionToScheduler(selection: Selection, notifyResolve = true) {
    if (selection.type === 2) notifyResolve = false;

    for (const group of pendingSelectionsGroups) {
      if (group.has(selection)) {
        if (!notifyResolve) return;

        const promise = pendingSelectionsGroupsPromises.get(group);
        /* istanbul ignore next */
        if (promise) {
          resolveListeners.forEach((subscription) => {
            subscription(promise, selection);
          });
        }
        return;
      }
    }

    let lazyPromise: ResolvingLazyPromise;
    if (resolvingPromise === null) {
      lazyPromise = createDeferredPromise();

      lazyPromise.promise.then(({ error }) => {
        if (error) console.error(error);
      });

      resolvingPromise = lazyPromise;
      scheduler.resolving = lazyPromise;
    } else {
      lazyPromise = resolvingPromise;
    }

    pendingSelectionsGroups.add(selectionsOnTheFly);
    selectionsOnTheFly.add(selection);
    pendingSelectionsGroupsPromises.set(
      selectionsOnTheFly,
      lazyPromise.promise
    );

    if (notifyResolve) {
      const promise = lazyPromise.promise;
      resolveListeners.forEach((subscription) => {
        subscription(promise, selection);
      });
    }

    fetchSelections(lazyPromise);
  }

  globalInterceptor.selectionCacheRefetchListeners.add((selection) =>
    addSelectionToScheduler(selection, false)
  );

  globalInterceptor.selectionAddListeners.add(addSelectionToScheduler);

  return scheduler;
};
