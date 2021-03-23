import { waitForExpect } from 'test-utils';

import { getArrayFields, SelectionType } from '../src';
import { CacheChangeEventData } from '../src/Events';
import { createTestClient, Dog } from './utils';

describe('array accessors', () => {
  test('array query', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      const human = query.human();
      return human.sons.map((son) => {
        return son.name;
      });
    });

    expect(data).toEqual(['default', 'default']);

    const cachedDataHumanOutOfSize = await resolved(() => {
      const human = query.human();
      return human.sons[2];
    });

    expect(cachedDataHumanOutOfSize).toBe(undefined);
  });

  test('null cache object array', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return query.nullArray?.map((v) => v?.name) ?? null;
    });

    expect(data).toBe(null);

    expect(query.nullArray).toBe(null);
  });

  test('null cache scalar array', async () => {
    const { query, resolved } = await createTestClient();

    const data = await resolved(() => {
      return query.nullStringArray?.map((v) => v) ?? null;
    });

    expect(data).toBe(null);

    expect(query.nullStringArray).toBe(null);
  });
});

describe('accessor undefined paths', () => {
  test('undefined object path', async () => {
    const { query } = await createTestClient();

    //@ts-expect-error
    const shouldBeUndefined = query.other;

    expect(shouldBeUndefined).toBe(undefined);
  });

  test('intentionally manipulated schema', async () => {
    const { query } = await createTestClient({
      query: {
        other: {
          __type: 'error',
        },
      },
      wrongroot: false as any,
    });

    expect(() => {
      //@ts-expect-error
      query.other;
    }).toThrow('GraphQL Type not found: error');

    expect(
      //@ts-expect-error
      query.wrongroot
    ).toBe(undefined);
  });
});

describe('setCache', () => {
  test('expected functionality', async () => {
    const {
      scheduler,
      query,
      mutation,
      setCache,
      buildSelection,
    } = await createTestClient();

    const humanQuery = query.human({
      name: 'aaa',
    });

    const name1 = humanQuery.name;

    expect(name1).toBe(undefined);

    expect(scheduler.resolving).toBeTruthy();
    await scheduler.resolving!.promise;

    const name2 = humanQuery.name;

    expect(name2).toBe('aaa');

    const humanMutation = mutation.humanMutation({
      nameArg: 'zzz',
    });

    const name3 = humanMutation.name;

    expect(name3).toBe(undefined);

    expect(scheduler.resolving).toBeTruthy();
    await scheduler.resolving!.promise;

    const name4 = humanMutation.name;

    expect(name4).toBe('zzz');

    expect(scheduler.resolving).toBe(null);

    setCache(humanQuery, humanMutation);

    expect(humanQuery.name).toBe(name4);

    humanQuery.name = 'bbb';

    expect(humanQuery.name).toBe('bbb');

    setCache(
      humanQuery,
      query.human({
        name: 'nnn',
      })
    );

    const name5 = humanQuery.name;

    expect(name5).toBe(undefined);

    expect(scheduler.resolving).toBeTruthy();
    await scheduler.resolving!.promise;

    await waitForExpect(() => {
      const name6 = humanQuery.name;

      expect(name6).toBe('aaa');
    }, 1000);

    humanQuery.sons[0] = humanQuery;

    expect(humanQuery.sons[0].name).toBe('aaa');

    setCache(
      query.human,
      {
        name: 'hhh',
      },
      {
        name: 'nnn',
      }
    );

    expect(
      query.human({
        name: 'hhh',
      }).name
    ).toBe('nnn');

    setCache(buildSelection('query', 'human', 'name'), 'zzz');

    expect(query.human().name).toBe('zzz');
  });

  test('with listeners', async () => {
    const { setCache, query, eventHandler } = await createTestClient();

    const eventListener1 = jest
      .fn()
      .mockImplementation(({ selection, data }: CacheChangeEventData) => {
        expect(selection.type).toBe(SelectionType.Query);
        expect(selection.key).toBe('hello');
        expect(data).toBe('12345');
      });

    const unsubscribe = eventHandler.onCacheChangeSubscribe(eventListener1);

    try {
      query.hello = '12345';

      expect(eventListener1).toBeCalledTimes(1);

      expect(query.hello).toBe('12345');
    } finally {
      unsubscribe();
    }

    const eventListener2 = jest
      .fn()
      .mockImplementation(({ selection, data }: CacheChangeEventData) => {
        expect(selection.type).toBe(SelectionType.Query);
        expect(selection.key).toBe('query');
        expect(data).toStrictEqual({ hello: '6789' });
      });

    const unsubscribe2 = eventHandler.onCacheChangeSubscribe(eventListener2);

    try {
      setCache(query, { hello: '6789' });

      expect(eventListener2).toBeCalledTimes(1);

      expect(query.hello).toBe('6789');
    } finally {
      unsubscribe2();
    }
  });

  test('validation', async () => {
    const { setCache, query } = await createTestClient();

    expect(() => {
      setCache((_args?: { a: string }) => {}, undefined, undefined);
    }).toThrowError('Invalid gqless function');

    expect(() => {
      setCache(
        (_args?: { a: string }) => {},
        () => {}
      );
    }).toThrowError('Invalid arguments of type: ' + 'function');

    expect(() => {
      setCache((_args?: { a: string }) => {}, 123123 as any);
    }).toThrowError('Invalid arguments of type: ' + 'number');

    expect(() => {
      setCache({}, {});
    }).toThrowError('Invalid gqless proxy');

    expect(() => {
      //@ts-expect-error
      query.human({ name: 'ñññ' }).sons['hello'] = null;
    }).toThrowError('Invalid array assignation');

    expect(() => {
      //@ts-expect-error
      query.human({ name: 'ñññ' }).zxc = null;
    }).toThrowError('Invalid proxy assignation');
  });
});

describe('assign selections', () => {
  test('expected usage', async () => {
    const {
      query,
      scheduler,
      mutate,
      assignSelections,
    } = await createTestClient();

    const human = query.human({
      name: 'A',
    });

    human.name;
    human.father.name;
    human.father.father.name;
    human.sons.map((son) => son.name);

    await scheduler.resolving!.promise;

    expect(human.name).toBe('A');
    expect(human.father.name).toBeTruthy();
    expect(human.father.father.name).toBeTruthy();
    expect(human.sons.length).toBe(2);
    expect(
      human.sons.every((son) => typeof son.name === 'string')
    ).toBeTruthy();

    const humanMutation = await mutate((mutation) => {
      const humanMutation = mutation.humanMutation({
        nameArg: 'B',
      });

      assignSelections(human, humanMutation);

      return humanMutation;
    });

    expect(humanMutation.name).toBe('B');

    expect(humanMutation.father.name).toBeTruthy();
    expect(human.father.name).toBeTruthy();

    expect(humanMutation.father.father.name).toBeTruthy();
    expect(human.father.father.name).toBeTruthy();

    expect(humanMutation.sons.length).toBe(2);
    expect(
      humanMutation.sons.every((son) => typeof son.name === 'string')
    ).toBeTruthy();
  });

  test('Source proxy without selections warn in non-production env', async () => {
    const {
      query,

      assignSelections,
    } = await createTestClient();

    const human = query.human({
      name: 'L',
    });

    const spy = jest.spyOn(console, 'warn').mockImplementation((message) => {
      expect(message).toBe("Source proxy doesn't have any selections made");
    });

    assignSelections(human, human);

    expect(spy).toBeCalledTimes(1);

    const prevNodeEnv = process.env.NODE_ENV;
    try {
      process.env.NODE_ENV = 'production';

      assignSelections(human, human);
    } finally {
      process.env.NODE_ENV = prevNodeEnv;
    }

    expect(spy).toBeCalledTimes(1);

    spy.mockRestore();
  });

  test('null proxies', async () => {
    const { assignSelections, query } = await createTestClient();

    assignSelections(query, null);
    assignSelections(null, query);
  });

  test('Invalid proxies', async () => {
    const { assignSelections, query } = await createTestClient();

    expect(() => {
      assignSelections({}, {});
    }).toThrowError('Invalid source proxy');

    expect(() => {
      assignSelections(query, {} as any);
    }).toThrowError('Invalid target proxy');
  });
});

describe('unions support', () => {
  test('works', async () => {
    const { query, resolved } = await createTestClient();

    await resolved(() => {
      return query.species.map((v) => {
        return {
          __typename: v.__typename,
          name: v.name,
        };
      });
    }).then((data) => {
      expect(data).toEqual([
        {
          __typename: 'Human',
          name: 'default',
        },
        {
          __typename: 'Dog',
          name: 'a',
        },
        {
          __typename: 'Dog',
          name: 'b',
        },
      ]);
    });
  });
});

describe('mutate accessors', () => {
  test('works', async () => {
    const { query, setCache, resolved } = await createTestClient();

    setCache(
      query.human,
      {},
      {
        name: 'hello',
      }
    );

    const humanHello = query.human();

    expect(humanHello.name).toBe('hello');

    humanHello.father = humanHello;

    const newDogs: Dog[] = [
      {
        __typename: 'Dog',
        name: 'zxc',
        owner: humanHello,
      },
    ];
    humanHello.dogs = newDogs;

    expect(JSON.stringify(humanHello.dogs)).toBe(
      '[{"__typename":"Dog","name":"zxc","owner":{"name":"hello","father":{"$ref":"$"}}}]'
    );

    const dogs = await resolved(() => {
      return getArrayFields(query.dogs, 'name');
    });

    const owner = (dogs[0].owner = {
      __typename: 'Human',
      dogs: [humanHello.dogs[0]],
      father: humanHello,
      name: 'ModifiedOwner',
      sons: [humanHello],
    });

    expect(JSON.stringify(owner)).toBe(
      '{"__typename":"Human","dogs":[{"__typename":"Dog","name":"zxc","owner":{"name":"hello","father":[{"$ref":"$"}]}}],"father":{"name":"hello","father":{"$ref":"$"},"dogs":[{"__typename":"Dog","name":"zxc","owner":{"name":"hello","father":{"$ref":"$[\\"dogs\\"]"}}}]},"name":"ModifiedOwner","sons":[{"name":"hello","father":{"$ref":"$"},"dogs":[{"__typename":"Dog","name":"zxc","owner":{"name":"hello","father":{"$ref":"$[\\"dogs\\"]"}}}]}]}'
    );
  });
});
