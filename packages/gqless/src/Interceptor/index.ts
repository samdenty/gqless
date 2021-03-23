import { Selection } from '../Selection';

export class Interceptor {
  fetchSelections = new Set<Selection>();
  listening = true;
  selectionAddListeners = new Set<(selection: Selection) => void>();
  selectionCacheListeners = new Set<(selection: Selection) => void>();
  selectionCacheRefetchListeners = new Set<(selection: Selection) => void>();

  addSelection(selection: Selection) {
    if (this.listening) {
      this.fetchSelections.add(selection);

      for (const listener of this.selectionAddListeners) {
        listener(selection);
      }
    }
  }

  addSelectionCache(selection: Selection) {
    if (this.listening) {
      for (const listener of this.selectionCacheListeners) {
        listener(selection);
      }
    }
  }

  addSelectionCacheRefetch(selection: Selection) {
    if (this.listening && this.selectionCacheRefetchListeners.size) {
      this.fetchSelections.add(selection);

      for (const listener of this.selectionCacheRefetchListeners) {
        listener(selection);
      }
    }
  }

  removeSelections(selections: Set<Selection> | Selection[]) {
    for (const selection of selections) {
      this.fetchSelections.delete(selection);
    }
  }
}

export interface InterceptorManager {
  interceptors: Set<Interceptor>;
  globalInterceptor: Interceptor;
  createInterceptor: () => Interceptor;
  removeInterceptor: (interceptor: Interceptor) => void;
  addSelection: (selection: Selection) => void;
  addSelectionCache: (selection: Selection) => void;
  addSelectionCacheRefetch: (selection: Selection) => void;
  addSelections: (selection: Selection[] | Set<Selection>) => void;
  removeSelections: (selections: Selection[] | Set<Selection>) => void;
}

export function createInterceptorManager(): InterceptorManager {
  const interceptors = new Set<Interceptor>();

  const globalInterceptor = new Interceptor();
  interceptors.add(globalInterceptor);

  function createInterceptor() {
    const interceptor = new Interceptor();
    interceptors.add(interceptor);
    return interceptor;
  }

  function removeInterceptor(interceptor: Interceptor) {
    interceptors.delete(interceptor);
  }

  function addSelection(selection: Selection) {
    for (const interceptor of interceptors) {
      interceptor.addSelection(selection);
    }
  }

  function addSelectionCache(selection: Selection) {
    for (const interceptor of interceptors) {
      if (interceptor === globalInterceptor) continue;

      interceptor.addSelectionCache(selection);
    }
  }

  function addSelectionCacheRefetch(selection: Selection) {
    for (const interceptor of interceptors) {
      if (interceptor === globalInterceptor) continue;

      interceptor.addSelectionCacheRefetch(selection);
    }
  }

  function addSelections(selection: Selection[] | Set<Selection>) {
    selection.forEach(addSelection);
  }

  function removeSelections(selections: Selection[] | Set<Selection>) {
    for (const interceptor of interceptors) {
      interceptor.removeSelections(selections);
    }
  }

  return {
    interceptors,
    globalInterceptor,
    createInterceptor,
    removeInterceptor,
    addSelection,
    addSelectionCache,
    addSelectionCacheRefetch,
    addSelections,
    removeSelections,
  };
}
