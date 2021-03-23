import '../src/Client';

import { waitForExpect } from 'test-utils';

import { gqlessError, Selection } from '../src';
import { createTestClient } from './utils';

describe('core', () => {
  test('scheduler', async () => {
    const { query } = await createTestClient();

    expect(typeof query).toBe('object');

    expect(query.hello).toBe(undefined);

    waitForExpect(
      () => {
        expect(query.hello).toBe('hello world');
      },
      100,
      10
    );
  });

  test('resolved', async () => {
    const { query, resolved } = await createTestClient();

    expect(typeof query).toBe('object');

    await resolved(() => {
      return query.hello;
    }).then((value) => {
      expect(value).toBe('hello world');
    });
  });

  test('resolved with onCacheData', async () => {
    const { query, resolved } = await createTestClient();

    expect(typeof query).toBe('object');

    await resolved(() => {
      return query.hello;
    }).then((value) => {
      expect(value).toBe('hello world');
    });

    const onCacheData = jest
      .fn()
      .mockImplementation((data: string): boolean => {
        expect(data).toBe('hello world');

        return true;
      });
    await resolved(
      () => {
        return query.hello;
      },
      {
        refetch: true,
        onCacheData,
      }
    ).then((value) => {
      expect(value).toBe('hello world');
    });

    expect(onCacheData).toBeCalledTimes(1);

    const onCacheData2 = jest
      .fn()
      .mockImplementation((data: string): boolean => {
        expect(data).toBe('hello world');

        return false;
      });
    await resolved(
      () => {
        return query.hello;
      },
      {
        refetch: true,
        onCacheData: onCacheData2,
      }
    ).then((value) => {
      expect(value).toBe('hello world');
    });

    expect(onCacheData2).toBeCalledTimes(1);
  });
});

describe('resolved cache options', () => {
  test('refetch', async () => {
    const { query, resolved } = await createTestClient();

    const resolveFn = () => {
      const human = query.human({
        name: 'a',
      });
      return {
        name: human.name,
        nFetchCalls: query.nFetchCalls,
      };
    };

    const data = await resolved(resolveFn);

    expect(data.name).toBe('a');
    expect(data.nFetchCalls).toBe(1);

    const cachedData = await resolved(resolveFn);

    expect(cachedData.name).toBe('a');
    expect(cachedData.nFetchCalls).toBe(1);

    const refetchedData = await resolved(resolveFn, {
      refetch: true,
    });
    expect(refetchedData.name).toBe('a');
    expect(refetchedData.nFetchCalls).toBe(2);
  });

  test('noCache', async () => {
    const { query, resolved } = await createTestClient();

    const resolveFn = () => {
      const human = query.human({
        name: 'a',
      });
      return {
        name: human.name,
        nFetchCalls: query.nFetchCalls,
      };
    };

    const data = await resolved(resolveFn);

    expect(data.name).toBe('a');
    expect(data.nFetchCalls).toBe(1);

    const nonCachedData = await resolved(resolveFn, {
      noCache: true,
    });
    expect(nonCachedData.name).toBe('a');
    expect(nonCachedData.nFetchCalls).toBe(2);

    const cachedData = await resolved(resolveFn);

    expect(cachedData.name).toBe('a');
    expect(cachedData.nFetchCalls).toBe(1);
  });
});

describe('error handling', () => {
  test('resolved single throws', async () => {
    const { query, resolved } = await createTestClient();

    await resolved(
      () => {
        query.throw;
      },
      {
        retry: false,
      }
    )
      .then(() => {
        throw Error("Shouldn't reach here");
      })
      .catch((err) => {
        if (!(err instanceof Error)) throw Error('Incompatible error type');

        expect(err).toEqual(
          Object.assign(Error('expected error'), {
            locations: [{ line: 1, column: 7 }],
            path: ['throw'],
          })
        );
      });
  });

  test('resolved multiple throws, with shorter error for production', async () => {
    const { query, resolved } = await createTestClient();

    const prevProcessEnv = process.env.NODE_ENV;

    try {
      await resolved(
        () => {
          query.throw;
          query.throw2;
        },
        {
          retry: false,
        }
      )
        .then(() => {
          throw Error("Shouldn't reach here");
        })
        .catch((err) => {
          if (!(err instanceof Error)) throw Error('Incompatible error type');

          expect(err).toEqual(
            Object.assign(
              Error('GraphQL Errors, please check .graphQLErrors property'),
              {
                errors: [
                  {
                    message: 'expected error',
                    locations: [{ line: 1, column: 7 }],
                    path: ['throw'],
                  },
                  {
                    message: 'expected error 2',
                    locations: [{ line: 1, column: 13 }],
                    path: ['throw2'],
                  },
                ],
              }
            )
          );
        });

      process.env.NODE_ENV = 'production';

      await resolved(
        () => {
          query.throw;
          query.throw2;
        },
        {
          noCache: true,
          retry: false,
        }
      )
        .then(() => {
          throw Error("Shouldn't reach here");
        })
        .catch((err) => {
          if (!(err instanceof Error)) throw Error('Incompatible error type');

          expect(err).toEqual(
            Object.assign(Error('GraphQL Errors'), {
              errors: [
                {
                  message: 'expected error',
                  locations: [{ line: 1, column: 7 }],
                  path: ['throw'],
                },
                {
                  message: 'expected error 2',
                  locations: [{ line: 1, column: 13 }],
                  path: ['throw2'],
                },
              ],
            })
          );
        });
    } finally {
      process.env.NODE_ENV = prevProcessEnv;
    }
  });

  test('scheduler logs to console', async () => {
    const { query } = await createTestClient(undefined, undefined, undefined, {
      retry: false,
    });

    const logErrorSpy = jest
      .spyOn(global.console, 'error')
      .mockImplementation((message) => {
        expect(message).toEqual(
          Object.assign(Error('expected error'), {
            locations: [{ line: 1, column: 7 }],
            path: ['throw'],
          })
        );
      });

    try {
      query.throw;

      await waitForExpect(
        () => {
          expect(logErrorSpy).toBeCalledTimes(1);
        },
        100,
        5
      );
    } finally {
      logErrorSpy.mockRestore();
    }
  });

  test('network error', async () => {
    const { query, resolved } = await createTestClient(undefined, () => {
      throw Error('expected network error');
    });

    try {
      await resolved(() => query.hello);

      throw Error("shouldn't reach here");
    } catch (err) {
      expect(err.message).toBe('expected network error');
    }
  });

  test('not expect network error type', async () => {
    const { query, resolved } = await createTestClient(undefined, () => {
      throw 12345;
    });

    try {
      await resolved(() => query.hello);

      throw Error("shouldn't reach here");
    } catch (err) {
      expect(err).toStrictEqual(gqlessError.create(12345));
    }
  });
});

describe('mutation', () => {
  test('mutation usage', async () => {
    const { mutation, resolved } = await createTestClient();

    const data = await resolved(() => {
      return mutation.sendNotification({
        message: 'hello world',
      });
    });

    expect(data).toBe(true);
  });
});

describe('custom query fetcher', () => {
  test('empty data', async () => {
    const { query, resolved } = await createTestClient(
      undefined,
      (_query, _variables) => {
        return {};
      }
    );

    const data = await resolved(() => {
      return query.hello;
    });
    expect(data).toBe(undefined);
  });
});

describe('buildAndFetchSelections', () => {
  test('works with included cache', async () => {
    const { buildAndFetchSelections, cache } = await createTestClient();

    const QuerySelection = new Selection({
      key: 'query',
      id: 0,
    });

    const HelloSelection = new Selection({
      key: 'hello',
      prevSelection: QuerySelection,
      id: 1,
    });

    await buildAndFetchSelections([HelloSelection], 'query');

    expect(cache).toStrictEqual({
      query: {
        hello: 'hello world',
      },
    });
  });
});

process.on('beforeExit', () => {
  console.log('CLIENT TEST EXIT');
});
