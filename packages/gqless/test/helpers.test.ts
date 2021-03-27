import {
  getArrayFields,
  getFields,
  selectFields,
  prepass,
  castNotSkeleton,
  castNotSkeletonDeep,
} from '../src';
import { createTestClient } from './utils';

describe('selectFields', () => {
  test('recursive *, depth 1', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(
        query.human({
          name: 'foo',
        })
      );
    });

    expect(data).toMatchInlineSnapshot(`
      Object {
        "__typename": "Human",
        "dogs": Array [
          null,
          null,
        ],
        "father": null,
        "id": "1",
        "name": "foo",
        "nullFather": null,
        "sons": Array [
          null,
          null,
        ],
      }
    `);
  });

  test('recursive *, depth 2', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(
        query.human({
          name: 'foo',
        }),
        '*',
        2
      );
    });

    expect(data).toMatchInlineSnapshot(`
      Object {
        "__typename": "Human",
        "dogs": Array [
          Object {
            "__typename": "Dog",
            "id": "1",
            "name": "a",
            "owner": null,
          },
          Object {
            "__typename": "Dog",
            "id": "2",
            "name": "b",
            "owner": null,
          },
        ],
        "father": Object {
          "__typename": "Human",
          "dogs": Array [
            null,
            null,
          ],
          "father": null,
          "id": "2",
          "name": "default",
          "nullFather": null,
          "sons": Array [
            null,
            null,
          ],
        },
        "id": "1",
        "name": "foo",
        "nullFather": null,
        "sons": Array [
          Object {
            "__typename": "Human",
            "dogs": Array [
              null,
              null,
            ],
            "father": null,
            "id": "2",
            "name": "default",
            "nullFather": null,
            "sons": Array [
              null,
              null,
            ],
          },
          Object {
            "__typename": "Human",
            "dogs": Array [
              null,
              null,
            ],
            "father": null,
            "id": "2",
            "name": "default",
            "nullFather": null,
            "sons": Array [
              null,
              null,
            ],
          },
        ],
      }
    `);
  });

  test('named no recursive', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(
        query.human({
          name: 'bar',
        }),
        ['name', 'father.name']
      );
    });

    expect(data).toMatchInlineSnapshot(`
      Object {
        "father": Object {
          "name": "default",
        },
        "name": "bar",
      }
    `);
  });

  test('named recursive, depth 1', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(
        query.human({
          name: 'bar',
        }),
        ['father']
      );
    });

    expect(data).toMatchInlineSnapshot(`
      Object {
        "father": Object {
          "__typename": "Human",
          "dogs": Array [
            null,
            null,
          ],
          "father": null,
          "id": "2",
          "name": "default",
          "nullFather": null,
          "sons": Array [
            null,
            null,
          ],
        },
      }
    `);
  });

  test('named recursive, depth 2', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(
        query.human({
          name: 'bar',
        }),
        ['father'],
        2
      );
    });

    expect(data).toMatchInlineSnapshot(`
      Object {
        "father": Object {
          "__typename": "Human",
          "dogs": Array [
            Object {
              "__typename": "Dog",
              "id": "1",
              "name": "a",
              "owner": null,
            },
            Object {
              "__typename": "Dog",
              "id": "2",
              "name": "b",
              "owner": null,
            },
          ],
          "father": Object {
            "__typename": "Human",
            "dogs": Array [
              null,
              null,
            ],
            "father": null,
            "id": "2",
            "name": "default",
            "nullFather": null,
            "sons": Array [
              null,
              null,
            ],
          },
          "id": "2",
          "name": "default",
          "nullFather": null,
          "sons": Array [
            Object {
              "__typename": "Human",
              "dogs": Array [
                null,
                null,
              ],
              "father": null,
              "id": "2",
              "name": "default",
              "nullFather": null,
              "sons": Array [
                null,
                null,
              ],
            },
            Object {
              "__typename": "Human",
              "dogs": Array [
                null,
                null,
              ],
              "father": null,
              "id": "2",
              "name": "default",
              "nullFather": null,
              "sons": Array [
                null,
                null,
              ],
            },
          ],
        },
      }
    `);
  });

  test('named recursive - array', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(query.human().sons, ['name']);
    });

    expect(data).toMatchInlineSnapshot(`
      Array [
        Object {
          "name": "default",
        },
        Object {
          "name": "default",
        },
      ]
    `);
  });

  test('recursive * - array', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(query.human().sons, '*');
    });

    expect(data).toMatchInlineSnapshot(`
      Array [
        Object {
          "__typename": "Human",
          "dogs": Array [
            null,
            null,
          ],
          "father": null,
          "id": "1",
          "name": "default",
          "nullFather": null,
          "sons": Array [
            null,
            null,
          ],
        },
        Object {
          "__typename": "Human",
          "dogs": Array [
            null,
            null,
          ],
          "father": null,
          "id": "1",
          "name": "default",
          "nullFather": null,
          "sons": Array [
            null,
            null,
          ],
        },
      ]
    `);
  });

  test('empty named fields array', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(query.human(), []);
    });

    expect(data).toEqual({});
  });

  test('named fields array values - depth 1', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(query.human(), ['sons']);
    });

    expect(data).toMatchInlineSnapshot(`
      Object {
        "sons": Array [
          Object {
            "__typename": "Human",
            "dogs": Array [
              null,
              null,
            ],
            "father": null,
            "id": "1",
            "name": "default",
            "nullFather": null,
            "sons": Array [
              null,
              null,
            ],
          },
          Object {
            "__typename": "Human",
            "dogs": Array [
              null,
              null,
            ],
            "father": null,
            "id": "1",
            "name": "default",
            "nullFather": null,
            "sons": Array [
              null,
              null,
            ],
          },
        ],
      }
    `);
  });

  test('named fields array values - depth 2', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(query.human(), ['sons'], 2);
    });

    expect(data).toMatchInlineSnapshot(`
      Object {
        "sons": Array [
          Object {
            "__typename": "Human",
            "dogs": Array [
              Object {
                "__typename": "Dog",
                "id": "1",
                "name": "a",
                "owner": null,
              },
              Object {
                "__typename": "Dog",
                "id": "2",
                "name": "b",
                "owner": null,
              },
            ],
            "father": Object {
              "__typename": "Human",
              "dogs": Array [
                null,
                null,
              ],
              "father": null,
              "id": "1",
              "name": "default",
              "nullFather": null,
              "sons": Array [
                null,
                null,
              ],
            },
            "id": "1",
            "name": "default",
            "nullFather": null,
            "sons": Array [
              Object {
                "__typename": "Human",
                "dogs": Array [
                  null,
                  null,
                ],
                "father": null,
                "id": "1",
                "name": "default",
                "nullFather": null,
                "sons": Array [
                  null,
                  null,
                ],
              },
              Object {
                "__typename": "Human",
                "dogs": Array [
                  null,
                  null,
                ],
                "father": null,
                "id": "1",
                "name": "default",
                "nullFather": null,
                "sons": Array [
                  null,
                  null,
                ],
              },
            ],
          },
          Object {
            "__typename": "Human",
            "dogs": Array [
              Object {
                "__typename": "Dog",
                "id": "1",
                "name": "a",
                "owner": null,
              },
              Object {
                "__typename": "Dog",
                "id": "2",
                "name": "b",
                "owner": null,
              },
            ],
            "father": Object {
              "__typename": "Human",
              "dogs": Array [
                null,
                null,
              ],
              "father": null,
              "id": "1",
              "name": "default",
              "nullFather": null,
              "sons": Array [
                null,
                null,
              ],
            },
            "id": "1",
            "name": "default",
            "nullFather": null,
            "sons": Array [
              Object {
                "__typename": "Human",
                "dogs": Array [
                  null,
                  null,
                ],
                "father": null,
                "id": "1",
                "name": "default",
                "nullFather": null,
                "sons": Array [
                  null,
                  null,
                ],
              },
              Object {
                "__typename": "Human",
                "dogs": Array [
                  null,
                  null,
                ],
                "father": null,
                "id": "1",
                "name": "default",
                "nullFather": null,
                "sons": Array [
                  null,
                  null,
                ],
              },
            ],
          },
        ],
      }
    `);
  });

  test('named fields object values - depth 1', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(query.human(), ['father']);
    });

    expect(data).toMatchInlineSnapshot(`
      Object {
        "father": Object {
          "__typename": "Human",
          "dogs": Array [
            null,
            null,
          ],
          "father": null,
          "id": "1",
          "name": "default",
          "nullFather": null,
          "sons": Array [
            null,
            null,
          ],
        },
      }
    `);
  });

  test('named fields object values - depth 2', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(query.human(), ['father'], 2);
    });

    expect(data).toMatchInlineSnapshot(`
      Object {
        "father": Object {
          "__typename": "Human",
          "dogs": Array [
            Object {
              "__typename": "Dog",
              "id": "1",
              "name": "a",
              "owner": null,
            },
            Object {
              "__typename": "Dog",
              "id": "2",
              "name": "b",
              "owner": null,
            },
          ],
          "father": Object {
            "__typename": "Human",
            "dogs": Array [
              null,
              null,
            ],
            "father": null,
            "id": "1",
            "name": "default",
            "nullFather": null,
            "sons": Array [
              null,
              null,
            ],
          },
          "id": "1",
          "name": "default",
          "nullFather": null,
          "sons": Array [
            Object {
              "__typename": "Human",
              "dogs": Array [
                null,
                null,
              ],
              "father": null,
              "id": "1",
              "name": "default",
              "nullFather": null,
              "sons": Array [
                null,
                null,
              ],
            },
            Object {
              "__typename": "Human",
              "dogs": Array [
                null,
                null,
              ],
              "father": null,
              "id": "1",
              "name": "default",
              "nullFather": null,
              "sons": Array [
                null,
                null,
              ],
            },
          ],
        },
      }
    `);
  });

  test('named non-existent field', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(query.human(), ['non_existent_field']);
    });

    expect(data).toStrictEqual({});
  });

  test('null accessor', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(query.nullArray);
    });

    expect(data).toBe(null);
  });

  test('primitive wrong accessor', async () => {
    const { resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields(123 as any);
    });

    expect(data).toBe(123);
  });

  test('object wrong accessor', async () => {
    const { resolved } = await createTestClient();

    const data = await resolved(() => {
      return selectFields({
        a: 1,
      });
    });

    expect(data).toStrictEqual({
      a: 1,
    });
  });
});

describe('refetch function', () => {
  test('refetch works', async () => {
    const { query, refetch, scheduler } = await createTestClient();

    const a = query.hello;

    expect(a).toBe(undefined);

    expect(scheduler.resolving).toBeTruthy();

    await scheduler.resolving!.promise;

    const a2 = query.hello;

    expect(scheduler.resolving).toBe(null);

    expect(a2).toBe('hello world');

    const a3Promise = refetch(() => query.hello);

    expect(scheduler.resolving).toBeTruthy();

    const a3 = await a3Promise;

    expect(a3).toBe(a2);
  });

  test('warns about no selections inside function, except on production', async () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation((message) => {
      expect(message).toBe('gqless: No selections made!');
    });
    const prevEnv = process.env.NODE_ENV;

    try {
      const { refetch } = await createTestClient();

      const value = await refetch(() => {
        return 123;
      });

      expect(value).toBe(123);
      expect(spy).toBeCalledTimes(1);

      process.env.NODE_ENV = 'production';

      const value2 = await refetch(() => {
        return 456;
      });

      expect(value2).toBe(456);
      expect(spy).toBeCalledTimes(1);
    } finally {
      process.env.NODE_ENV = prevEnv;
      spy.mockRestore();
    }
  });

  test('refetch proxy selections', async () => {
    const { query, resolved, refetch, cache } = await createTestClient();

    const time1 = await resolved(() => query.time);

    const cacheSnapshot1 = JSON.stringify(cache);

    expect(time1).toBeTruthy();

    const time2 = query.time;

    const cacheSnapshot2 = JSON.stringify(cache);

    expect(cacheSnapshot1).toBe(cacheSnapshot2);

    expect(time2).toBe(time1);

    await refetch(query);

    const cacheSnapshot3 = JSON.stringify(cache);

    expect(cacheSnapshot3).not.toBe(cacheSnapshot2);

    const time3 = query.time;

    const cacheSnapshot4 = JSON.stringify(cache);

    expect(cacheSnapshot4).toBe(cacheSnapshot3);

    expect(time3).not.toBe(time1);

    const noSelectionsToRefetchData = await refetch(query.nullArray);

    expect(noSelectionsToRefetchData).toBeTruthy();

    const cacheSnapshot5 = JSON.stringify(cache);

    expect(cacheSnapshot5).toBe(cacheSnapshot3);

    const hello = await resolved(() => query.hello);

    const cacheSnapshot6 = JSON.stringify(cache);

    expect(cacheSnapshot6).not.toBe(cacheSnapshot5);

    expect(hello).toBe('hello world');

    const time4 = query.time;

    expect(time4).toBe(time3);

    await refetch(query);

    const time5 = query.time;

    expect(time5).not.toBe(time4);
  });

  test('refetch proxy selections with invalid proxy', async () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation((message) => {
      expect(message).toBe('gqless: Invalid proxy to refetch!');
    });

    const prevNODE_ENV = process.env.NODE_ENV;
    try {
      const { refetch } = await createTestClient();

      const invalidProxy = {};
      const refetchData = await refetch(invalidProxy);

      expect(spy).toBeCalledTimes(1);
      expect(refetchData).toBe(invalidProxy);

      process.env.NODE_ENV = 'production';

      const refetchData2 = await refetch(invalidProxy);

      expect(spy).toBeCalledTimes(1);
      expect(refetchData2).toBe(invalidProxy);
    } finally {
      process.env.NODE_ENV = prevNODE_ENV;
      spy.mockRestore();
    }
  });
});

describe('get fields', () => {
  test('getFields works', async () => {
    const { query, scheduler, accessorCache } = await createTestClient();

    const humanProxy = getFields(query.human(), 'name');

    expect(accessorCache.isProxy(humanProxy)).toBe(true);

    await scheduler.resolving!.promise;

    expect(humanProxy.id).toBe('1');

    expect(humanProxy.name).toBe('default');

    const human2 = query.human({
      name: 'other',
    });

    getFields(human2);

    await scheduler.resolving!.promise;

    expect(JSON.stringify(human2)).toMatchInlineSnapshot(
      `"{\\"__typename\\":\\"Human\\",\\"id\\":\\"2\\",\\"name\\":\\"other\\"}"`
    );

    expect(getFields(null)).toBe(null);
  });

  test('getArrayFields works', async () => {
    const { query, scheduler, accessorCache } = await createTestClient();

    const dogsArrayProxy = getArrayFields(query.dogs, 'name');

    expect(accessorCache.isProxy(dogsArrayProxy)).toBe(true);

    await scheduler.resolving!.promise;

    expect(query.dogs.map((v) => v.name).join(',')).toBe('a,b');

    expect(getArrayFields(null)).toBe(null);

    const emptyObj: any = {};
    expect(getArrayFields(emptyObj)).toBe(emptyObj);

    const emptyArray = [null, undefined];

    expect(getArrayFields(emptyArray)).toBe(emptyArray);
  });
});

describe('prefetch', () => {
  test('returns promise only data not found', async () => {
    const { prefetch } = await createTestClient();

    const resultPromise = prefetch((query) => {
      return query.time;
    });

    expect(resultPromise instanceof Promise).toBeTruthy();

    const result = await resultPromise;
    expect(typeof result).toBe('string');

    expect(prefetch((query) => query.time)).toBe(result);
  });
});

test('prepass works', () => {
  const proxy1 = new Proxy(
    {
      a: 123,
      passed: false,
    },
    {
      set(t, p, v) {
        return Reflect.set(t, p, v);
      },
      get(t, p) {
        if (p === 'a') {
          t.passed = true;
        }
        return Reflect.get(t, p);
      },
    }
  );

  const proxy2 = new Proxy(
    {
      b: proxy1,
      passed: false,
    },
    {
      set(t, p, v) {
        return Reflect.set(t, p, v);
      },
      get(t, p) {
        if (p === 'b') {
          t.passed = true;
        }
        return Reflect.get(t, p);
      },
    }
  );

  const arrayProxy = new Proxy(
    Object.assign([null, proxy2], {
      passed: false,
    }),
    {
      set(t, p, v) {
        return Reflect.set(t, p, v);
      },
      get(t, p) {
        if (p === '1') {
          t.passed = true;
        }
        return Reflect.get(t, p);
      },
    }
  );

  const expectedVariable = {
    n: 999,
  };

  const proxyWithFn = new Proxy(
    {
      fnField(variable: unknown) {
        expect(JSON.stringify(variable)).toBe(JSON.stringify(expectedVariable));
        return arrayProxy;
      },
      passed: false,
    },
    {
      set(t, p, v) {
        return Reflect.set(t, p, v);
      },
      get(t, p) {
        if (p === 'fnField') {
          t.passed = true;
        }

        return Reflect.get(t, p);
      },
    }
  );

  expect(proxy1.passed).toBe(false);
  expect(proxy2.passed).toBe(false);
  expect(arrayProxy.passed).toBe(false);
  expect(proxyWithFn.passed).toBe(false);

  prepass(
    proxyWithFn,
    [
      {
        field: 'fnField',
        variables: {
          n: 999,
        },
      },
      'b',
      'a',
      'z',
    ],
    'non.existent.field'
  );

  expect(proxy1.passed).toBe(true);
  expect(proxy2.passed).toBe(true);
  expect(arrayProxy.passed).toBe(true);
  expect(proxyWithFn.passed).toBe(true);

  const arr = [null, undefined];
  const returnedArr = prepass(arr, 'helloWorld');
  expect(arr).toBe(returnedArr);

  expect(prepass(null)).toBe(null);

  expect(prepass(undefined)).toBe(undefined);

  const proxy3 = new Proxy(
    {
      c: 123,
      passed: false,
    },
    {
      set(t, p, v) {
        return Reflect.set(t, p, v);
      },
      get(t, p) {
        if (p === 'c') {
          t.passed = true;
        }
        return Reflect.get(t, p);
      },
    }
  );

  const proxy4 = new Proxy(
    {
      a: {
        b: proxy3,
      },
      passed: false,
    },
    {
      set(t, p, v) {
        return Reflect.set(t, p, v);
      },
      get(t, p) {
        if (p === 'a') {
          t.passed = true;
        }
        return Reflect.get(t, p);
      },
    }
  );

  expect(proxy3.passed).toBe(false);
  expect(proxy4.passed).toBe(false);

  expect(prepass(proxy4, 'a.b.c')).toBe(proxy4);

  expect(proxy3.passed).toBe(true);
  expect(proxy4.passed).toBe(true);
});

test('type casters', async () => {
  type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
    T
  >() => T extends Y ? 1 : 2
    ? true
    : false;

  const a1: {
    a: string | undefined;
    b: number | null | undefined;
    c: {
      d: number | undefined;
    };
  } = {} as any;

  let a2 = castNotSkeleton(a1);

  expect(a2).toBe(a1);

  const equals: true = true as Equals<
    typeof a2,
    {
      a: string;
      b: number | null;
      c: {
        d: number | undefined;
      };
    }
  >;

  expect(equals).toBe(true);

  const b1: {
    a: string | undefined;
    b: {
      c:
        | {
            d: {
              e: (
                | {
                    f: {
                      h: [
                        {
                          i: number | undefined;
                        }
                      ];
                    };
                  }
                | undefined
                | null
              )[];
              j: () => string | undefined;
            };
          }
        | undefined;
    };
  } = {} as any;

  let b2 = castNotSkeletonDeep(b1);

  const equal2: true = true as Equals<
    typeof b2,
    {
      a: string;
      b: {
        c: {
          d: {
            e: ({
              f: {
                h: {
                  i: number;
                }[];
              };
            } | null)[];
            j: () => string;
          };
        };
      };
    }
  >;

  expect(equal2).toBe(true);
});
