import { Selection } from '../Selection';

export interface ProxyAccessor extends Object {
  __proxy?: undefined;
}

const notFoundObjectKey = {};
const nullObjectKey = {};

export interface AccessorCache {
  getAccessor: (
    selection: Selection,
    cacheValue: unknown,
    proxyFactory: () => ProxyAccessor
  ) => ProxyAccessor;
  getArrayAccessor: (
    selection: Selection,
    reference: unknown[],
    proxyFactory: () => ProxyAccessor
  ) => ProxyAccessor;
  isProxy: (obj: any) => obj is ProxyAccessor;
  getProxySelection: (proxy: ProxyAccessor) => Selection | undefined;
  addSelectionToAccessorHistory: (
    accessor: ProxyAccessor,
    selection: Selection
  ) => void;
  getSelectionSetHistory: (
    accessor: ProxyAccessor
  ) => Set<Selection> | undefined;
  addAccessorChild: (
    parent: ProxyAccessor,
    child: ProxyAccessor | null
  ) => void;
}

export function createAccessorCache(): AccessorCache {
  const proxyCacheMap = new WeakMap<
    Selection,
    WeakMap<object, ProxyAccessor>
  >();
  const arrayProxyMap = new WeakMap<
    Selection,
    WeakMap<unknown[], ProxyAccessor>
  >();
  const proxySet = new WeakSet<ProxyAccessor>();

  const selectionProxyMap = new WeakMap<ProxyAccessor, Selection>();

  const accessorSelectionHistory = new WeakMap<ProxyAccessor, Set<Selection>>();

  const accessorChildRelations = new WeakMap<
    ProxyAccessor,
    Set<ProxyAccessor>
  >();

  function getAccessor(
    selection: Selection,
    cacheValue: unknown,
    proxyFactory: () => ProxyAccessor
  ): ProxyAccessor {
    const mapKey: object =
      cacheValue == null
        ? nullObjectKey
        : typeof cacheValue === 'object'
        ? cacheValue!
        : notFoundObjectKey;
    let cacheMap = proxyCacheMap.get(selection);

    if (cacheMap == null) {
      cacheMap = new WeakMap();
      proxyCacheMap.set(selection, cacheMap);
    }

    let proxy = cacheMap.get(mapKey);

    if (proxy == null) {
      proxy = proxyFactory();
      cacheMap.set(mapKey, proxy);
      selectionProxyMap.set(proxy, selection);
      proxySet.add(proxy);
    }

    return proxy;
  }

  function getArrayAccessor(
    selection: Selection,
    reference: unknown[],
    proxyFactory: () => ProxyAccessor
  ): ProxyAccessor {
    let proxyMap = arrayProxyMap.get(selection);

    if (proxyMap == null) {
      proxyMap = new WeakMap();
      arrayProxyMap.set(selection, proxyMap);
    }

    let proxy = proxyMap.get(reference);

    if (proxy == null) {
      proxy = proxyFactory();
      proxyMap.set(reference, proxy);
      selectionProxyMap.set(proxy, selection);
      proxySet.add(proxy);
    }

    return proxy;
  }

  function getProxySelection(proxy: ProxyAccessor) {
    return selectionProxyMap.get(proxy);
  }

  function isProxy(obj: any): obj is ProxyAccessor {
    return proxySet.has(obj);
  }

  function addSelectionToAccessorHistory(
    accessor: ProxyAccessor,
    selection: Selection
  ) {
    let selectionSet = accessorSelectionHistory.get(accessor);

    if (selectionSet == null) {
      selectionSet = new Set();
      accessorSelectionHistory.set(accessor, selectionSet);
    }

    selectionSet.add(selection);
  }

  function getSelectionSetHistory(accessor: ProxyAccessor) {
    let selections = accessorSelectionHistory.get(accessor);

    const childs = accessorChildRelations.get(accessor);

    if (childs) {
      const selectionsWithChilds = selections || (selections = new Set());

      childs.forEach((childAccessor) => {
        const childSelections = getSelectionSetHistory(childAccessor);
        if (childSelections) {
          childSelections.forEach((selection) => {
            selectionsWithChilds.add(selection);
          });
        }
      });
    }

    return selections;
  }

  function addAccessorChild(
    parent: ProxyAccessor,
    child: ProxyAccessor | null
  ) {
    if (!child) return;

    let childs = accessorChildRelations.get(parent);

    if (childs == null) {
      childs = new Set();
      accessorChildRelations.set(parent, childs);
    }

    childs.add(child);
  }

  return {
    getAccessor,
    getArrayAccessor,
    isProxy,
    getProxySelection,
    addSelectionToAccessorHistory,
    getSelectionSetHistory,
    addAccessorChild,
  };
}
