import { selectFields } from '../src';
import { createTestClient } from './utils';

describe.skip('playground', () => {
  test('cache manipulation', async () => {
    const {
      query,
      scheduler,
      resolved,
      setCache,
      cache,
    } = await createTestClient();

    await resolved(() => query.human().sons.map((v) => selectFields(v)));

    let humanA = query.human({
      name: 'asd',
    });

    setCache(humanA, {
      name: 'asd',
    });

    expect(humanA.name).toBe('asd');
    expect(scheduler.resolving).toBe(null);

    setCache(
      query.human,
      { name: 'zxc' },
      {
        name: 'tyu',
      }
    );

    const humanB = query.human({
      name: 'zxc',
    });

    expect(scheduler.resolving).toBe(null);

    expect(humanB.name).toBe('tyu');

    expect(scheduler.resolving).toBe(null);

    query.human().sons = [];

    const xd = (query.hello = 'XDXD');

    expect(xd).toBe('XDXD');

    expect(scheduler.resolving).toBe(null);

    const hello = query.hello;

    expect(hello).toBe('XDXD');

    expect(query.human().sons).toEqual([]);

    expect(scheduler.resolving).toBe(null);

    expect(cache).toStrictEqual({
      query: {
        hello: 'XDXD',
        human0: {
          sons: [],
        },
        human1: {
          name: 'asd',
        },
        human2: {
          name: 'tyu',
        },
      },
    });

    setCache(query, {
      hello: 'ppp',
    });

    expect(cache).toStrictEqual({
      query: {
        hello: 'ppp',
      },
    });
  });

  test('assignSelections', async () => {
    const {
      assignSelections,
      query,
      scheduler,
      cache,
      mutate,
      setCache,
    } = await createTestClient();

    const human = query.human({
      name: 'asd',
    });

    human.name;

    await scheduler.resolving!.promise;

    expect(human.name).toBe('asd');

    expect(cache).toStrictEqual({ query: { human0: { name: 'asd' } } });

    const humanMutation = await mutate((mutation) => {
      const humanMutation = mutation.humanMutation({
        nameArg: 'zxc',
      });
      assignSelections(human, humanMutation);
      return humanMutation;
    });

    setCache(human, humanMutation);

    expect(cache).toStrictEqual({
      query: { human0: { name: 'zxc' } },
      mutation: { humanMutation0: { name: 'zxc' } },
    });

    expect(human.name).toBe('zxc');
    expect(humanMutation.name).toBe('zxc');
  });
});
