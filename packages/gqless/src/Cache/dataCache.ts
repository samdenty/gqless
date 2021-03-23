import { Selection } from '../Selection';
import { get, isObject, mergeWith, PlainObject, set } from '../Utils';

import type { NormalizationHandler } from '../Normalization';

export const CacheNotFound = Symbol('Not Found');

export type CacheType = Record<string, unknown>;

export interface CacheInstance {
  cache: CacheType;
  getCacheFromSelection: {
    <Value = unknown>(selection: Selection): typeof CacheNotFound | Value;
    <Value = unknown, NotFound = typeof CacheNotFound>(
      selection: Selection,
      defaultValue: NotFound
    ): Value | NotFound;
  };
  setCacheFromSelection: (selection: Selection, value: unknown) => void;
  mergeCache: (
    data: Record<string, unknown>,
    prefix: 'query' | 'mutation' | 'subscription'
  ) => void;
  normalizedCache: Record<string, PlainObject | undefined> | undefined;
}

export function createCache(
  normalization?: NormalizationHandler
): CacheInstance {
  const cache: CacheType = {};

  function getCacheFromSelection<Value = unknown>(
    selection: Selection
  ): Value | typeof CacheNotFound;
  function getCacheFromSelection<
    Value = unknown,
    NotFound = typeof CacheNotFound
  >(selection: Selection, defaultValue: NotFound): Value | NotFound;
  function getCacheFromSelection<
    Value = unknown,
    NotFound = typeof CacheNotFound
  >(
    selection: Selection,
    notFoundValue: any = CacheNotFound
  ): Value | NotFound {
    return normalization
      ? normalization.getCacheFromSelection<Value, NotFound>(
          selection,
          notFoundValue,
          cache
        )
      : get<Value, NotFound>(cache, selection.cachePath, notFoundValue);
  }

  function setCacheFromSelection(selection: Selection, value: unknown) {
    if (normalization && isObject(value))
      normalization.scanNormalizedObjects(value);

    set(cache, selection.cachePath, value);
  }

  function onObjectMergeConflict(
    currentValue: object,
    incomingValue: object
  ): object | void {
    const result = normalization?.onObjectMergeConflict(
      currentValue,
      incomingValue
    );
    if (result) return result;

    if (
      Array.isArray(currentValue) &&
      Array.isArray(incomingValue) &&
      currentValue.length !== incomingValue.length
    ) {
      return incomingValue;
    }
  }

  function mergeCache(
    data: Record<string, unknown>,
    prefix: 'query' | 'mutation' | 'subscription'
  ) {
    normalization?.scanNormalizedObjects(data);

    mergeWith(cache, { [prefix]: data }, onObjectMergeConflict);
  }

  return {
    cache,
    getCacheFromSelection,
    setCacheFromSelection,
    mergeCache,
    normalizedCache: normalization?.normalizedCache,
  };
}
