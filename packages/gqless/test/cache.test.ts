import { assertIsDefined } from 'test-utils';

import { CacheNotFound, createAccessorCache, createCache } from '../src/Cache';
import { EventHandler } from '../src/Events';
import { createNormalizationHandler } from '../src/Normalization';
import { Selection } from '../src/Selection';
import { get } from '../src/Utils';
import { createTestClient } from './utils';

describe('accessorCache', () => {
  test('getAccessor', () => {
    const cache = createAccessorCache();

    const selection = new Selection({
      key: 'a',
      id: 0,
    });

    const obj = cache.getAccessor(selection, null, () => {
      return {
        a: 1,
      };
    });

    expect(obj).toEqual({
      a: 1,
    });

    const obj2 = cache.getAccessor(selection, null, () => {
      throw Error("This shouldn't be called");
    });

    expect(obj).toBe(obj2);

    const selectionFromCache = cache.getProxySelection(obj);

    expect(selectionFromCache).toBe(selection);

    assertIsDefined(selection);

    expect(selection.key).toBe('a');
    expect(selection.cachePath).toEqual(['a']);
    expect(selection.pathString).toBe('a');

    const isProxyFromCache = cache.isProxy(obj);

    expect(isProxyFromCache).toBe(true);

    expect(cache.isProxy({})).toBe(false);
  });

  test('getArrayAccessor', () => {
    const cache = createAccessorCache();

    const selection = new Selection({
      key: 'a',
      id: 0,
    });

    const arrayValue = [123];

    const obj = cache.getArrayAccessor(selection, arrayValue, () => {
      return {
        a: 1,
      };
    });

    expect(obj).toEqual({
      a: 1,
    });

    const obj2 = cache.getArrayAccessor(selection, arrayValue, () => {
      throw Error("This shouldn't be called");
    });

    expect(obj).toBe(obj2);

    const selectionFromCache = cache.getProxySelection(obj);

    expect(selectionFromCache).toBe(selection);

    assertIsDefined(selection);

    expect(selection.key).toBe('a');
    expect(selection.cachePath).toEqual(['a']);
    expect(selection.pathString).toBe('a');

    const isProxyFromCache = cache.isProxy(obj);

    expect(isProxyFromCache).toBe(true);

    expect(cache.isProxy({})).toBe(false);
  });

  test('getting selections history', () => {
    const {
      addSelectionToAccessorHistory,
      getAccessor,
      getSelectionSetHistory,
      addAccessorChild,
    } = createAccessorCache();

    const rootAccessor = getAccessor(
      new Selection({
        key: 'root',
        id: 0,
      }),
      null,
      () => {
        return {
          root: true,
        };
      }
    );

    const selectionA = new Selection({
      key: 'a',
      id: 1,
    });

    const accessorA = getAccessor(selectionA, null, () => {
      return {
        a: 1,
      };
    });

    addAccessorChild(rootAccessor, accessorA);

    const selectionB = new Selection({
      key: 'b',
      id: 2,
    });

    const accessorB = getAccessor(selectionB, null, () => {
      return {
        b: 2,
      };
    });

    addAccessorChild(accessorA, accessorB);

    addSelectionToAccessorHistory(accessorA, selectionA);

    const selections1 = getSelectionSetHistory(accessorA)!;

    expect(selections1).toBeTruthy();

    expect(selections1).toStrictEqual(new Set([selectionA]));

    addSelectionToAccessorHistory(accessorB, selectionB);

    const selections2 = getSelectionSetHistory(accessorB)!;

    expect(selections2).toBeTruthy();

    expect(selections2).toStrictEqual(new Set([selectionB]));

    const selections3 = getSelectionSetHistory(accessorA)!;

    expect(selections3).toBeTruthy();

    expect(selections3).toStrictEqual(new Set([selectionA, selectionB]));

    const selections4 = getSelectionSetHistory(rootAccessor)!;

    expect(selections4).toBeTruthy();

    expect(selections4).toStrictEqual(new Set([selectionA, selectionB]));
  });
});

describe('dataCache', () => {
  test('works', () => {
    const cache = createCache();

    const selectionBase = new Selection({
      key: 'query',
      id: 0,
    });

    const selection = new Selection({
      key: 'a',
      prevSelection: selectionBase,
      id: 1,
    });

    const dataEmpty = cache.getCacheFromSelection(selection);

    expect(dataEmpty).toBe(CacheNotFound);

    cache.mergeCache(
      {
        a: 1,
      },
      'query'
    );

    const data = cache.getCacheFromSelection(selection);

    expect(data).toBe(1);
  });

  test('toJSON', async () => {
    const { query, scheduler } = await createTestClient();

    expect(JSON.stringify(query)).toBe('{}');

    expect(JSON.stringify(query.nullArray)).toBe('[]');

    await scheduler.resolving?.promise;
  });

  test('merge works as it should with arrays', () => {
    const { cache, mergeCache } = createCache();

    function expectCacheToBe(v: typeof cache) {
      try {
        expect(JSON.stringify(cache)).toBe(JSON.stringify(v));
      } catch (err) {
        Error.captureStackTrace(err, expectCacheToBe);
        throw err;
      }
    }

    mergeCache(
      {
        other: 123,
        array1: [1, 2],
        array2: [
          {
            a: 1,
          },
        ],
      },
      'query'
    );

    expectCacheToBe({
      query: {
        other: 123,
        array1: [1, 2],
        array2: [
          {
            a: 1,
          },
        ],
      },
    });

    mergeCache(
      {
        array1: [3],
      },
      'query'
    );

    expectCacheToBe({
      query: {
        other: 123,
        array1: [3],
        array2: [
          {
            a: 1,
          },
        ],
      },
    });

    mergeCache(
      {
        array2: [
          {
            b: 2,
          },
        ],
      },
      'query'
    );

    expectCacheToBe({
      query: {
        other: 123,
        array1: [3],
        array2: [
          {
            a: 1,
            b: 2,
          },
        ],
      },
    });

    mergeCache(
      {
        array2: [],
      },
      'query'
    );

    expectCacheToBe({
      query: {
        other: 123,
        array1: [3],
        array2: [],
      },
    });

    mergeCache(
      {
        array2: [
          {
            c: 1,
          },
          {
            d: 1,
          },
          {
            e: 1,
          },
        ],
      },
      'query'
    );

    expectCacheToBe({
      query: {
        other: 123,
        array1: [3],
        array2: [
          {
            c: 1,
          },
          {
            d: 1,
          },
          {
            e: 1,
          },
        ],
      },
    });

    mergeCache(
      {
        array1: null,
      },
      'query'
    );

    expectCacheToBe({
      query: {
        other: 123,
        array1: null,
        array2: [
          {
            c: 1,
          },
          {
            d: 1,
          },
          {
            e: 1,
          },
        ],
      },
    });
  });
});

describe('data normalization', () => {
  test('should work', async () => {
    const {
      cache,
      mergeCache,
      normalizedCache,
      getCacheFromSelection,
    } = createCache(
      createNormalizationHandler(
        true,
        new EventHandler(),
        {
          mutation: {},
          query: {},
          subscription: {},
          a: {
            __typename: { __type: 'String!' },
            id: { __type: 'Int!' },
          },
        },
        {
          Int: true,
        }
      )
    );

    assertIsDefined(normalizedCache);

    function expectCacheToBe(v: typeof normalizedCache) {
      try {
        expect(JSON.stringify(cache)).toBe(JSON.stringify(v));
      } catch (err) {
        Error.captureStackTrace(err, expectCacheToBe);
        throw err;
      }
    }
    function expectNormalizedCacheToBe(v: typeof normalizedCache) {
      try {
        expect(JSON.stringify(normalizedCache)).toBe(JSON.stringify(v));
      } catch (err) {
        Error.captureStackTrace(err, expectNormalizedCacheToBe);
        throw err;
      }
    }

    mergeCache(
      {
        a: {
          __typename: 'a',
          id: 1,
          v: 1,
        },
      },
      'query'
    );

    expectNormalizedCacheToBe({
      a1: {
        __typename: 'a',
        id: 1,
        v: 1,
      },
    });

    expectCacheToBe({
      query: {
        a: {
          __typename: 'a',
          id: 1,
          v: 1,
        },
      },
    });

    mergeCache(
      {
        a: {
          __typename: 'a',
          id: 1,
          g: 2,
        },
      },
      'query'
    );

    expectNormalizedCacheToBe({
      a1: {
        __typename: 'a',
        id: 1,
        v: 1,
        g: 2,
      },
    });

    expectCacheToBe({
      query: {
        a: {
          __typename: 'a',
          id: 1,
          v: 1,
          g: 2,
        },
      },
    });

    mergeCache(
      {
        otherQuery: {
          __typename: 'o',
          deep: {
            __typename: 'a',
            id: 1,
            n: 3,
          },
        },
      },
      'query'
    );

    expectNormalizedCacheToBe({
      a1: {
        __typename: 'a',
        id: 1,
        v: 1,
        g: 2,
        n: 3,
      },
    });

    const querySelection = new Selection({
      key: 'query',
      id: 0,
    });
    const aSelection = new Selection({
      key: 'a',
      prevSelection: querySelection,
      id: 1,
    });

    const aData = getCacheFromSelection(aSelection);

    expect(aData).toStrictEqual({ __typename: 'a', id: 1, v: 1, g: 2, n: 3 });

    expect(get(cache, 'query.a')).toStrictEqual({
      __typename: 'a',
      id: 1,
      v: 1,
      g: 2,
      n: 3,
    });

    expect(normalizedCache['a1']).toStrictEqual({
      __typename: 'a',
      id: 1,
      v: 1,
      g: 2,
      n: 3,
    });

    expectCacheToBe({
      query: {
        a: {
          __typename: 'a',
          id: 1,
          v: 1,
          g: 2,
          n: 3,
        },
        otherQuery: {
          __typename: 'o',
          deep: {
            __typename: 'a',
            id: 1,
            n: 3,
          },
        },
      },
    });
  });
});

process.on('SIGTERM', () => {
  console.log('CACHE TEST EXIT');
});
