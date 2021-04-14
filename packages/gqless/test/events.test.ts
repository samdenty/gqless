import { GraphQLError, stripIgnoredCharacters } from 'graphql';

import { GQlessError, Selection, SelectionType } from '../src';
import { CacheChangeEventData, FetchEventData } from '../src/Events';
import { createTestClient } from './utils';

describe('fetch events', () => {
  test('successful query', async () => {
    const { eventHandler, query, resolved, cache } = await createTestClient();

    const onFetchData = jest
      .fn()
      .mockImplementation(async (dataPromise: Promise<FetchEventData>) => {
        const {
          executionResult,
          cacheSnapshot,
          query,
          selections,
          type,
          variables,
          error,
        } = await dataPromise;

        expect(cache).toStrictEqual(cacheSnapshot);

        expect(stripIgnoredCharacters(query)).toBe('query{hello}');

        expect(selections.length).toBe(1);
        expect(selections[0].key).toBe('hello');
        expect(selections[0].type).toBe(SelectionType.Query);
        expect(type).toBe('query');
        expect(variables).toBe(undefined);
        expect(error).toBe(undefined);

        expect(executionResult?.data?.hello).toBe('hello world');
      });

    const unsubscribe = eventHandler.onFetchSubscribe(onFetchData);

    try {
      const dataPromise = resolved(() => {
        return query.hello;
      });
      expect(onFetchData).toBeCalledTimes(1);

      const data = await dataPromise;

      expect(data).toBe('hello world');
    } finally {
      unsubscribe();
    }
  });

  test('error query', async () => {
    const { eventHandler, query, resolved } = await createTestClient();

    const onFetchData = jest
      .fn()
      .mockImplementation(async (dataPromise: Promise<FetchEventData>) => {
        const { executionResult, error, query } = await dataPromise;

        expect(executionResult?.data).toBe(undefined);

        expect(error).toStrictEqual(
          new GQlessError('expected error', {
            graphQLErrors: [new GraphQLError('expected error')],
          })
        );

        expect(stripIgnoredCharacters(query)).toBe('query{throw}');
      });

    const unsubscribe = eventHandler.onFetchSubscribe(onFetchData);

    try {
      const dataPromise = resolved(() => {
        return query.throw;
      });
      expect(onFetchData).toBeCalledTimes(1);

      const data = await dataPromise.catch(() => {});

      expect(data).toBe(undefined);
    } finally {
      unsubscribe();
    }
  });
});

describe('cache changes events', () => {
  test('on cache change', async () => {
    const { eventHandler } = await createTestClient();

    const selectionA = new Selection({
      key: 'asd',
      id: 0,
    });
    const onCacheChangeFn = jest
      .fn()
      .mockImplementation(async ({ data, selection }: CacheChangeEventData) => {
        expect(data).toBe(123);
        expect(selection).toBe(selectionA);
      });

    const unsubscribe = eventHandler.onCacheChangeSubscribe(onCacheChangeFn);

    try {
      eventHandler.sendCacheChange({
        selection: selectionA,
        data: 123,
      });
      expect(onCacheChangeFn).toBeCalledTimes(1);
    } finally {
      unsubscribe();
    }
  });
});
