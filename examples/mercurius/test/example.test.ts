import { createMercuriusTestClient } from 'mercurius-integration-testing';
import { waitForExpect } from 'test-utils';

import { selectFields } from 'gqless';

import { app, codegen } from '../src';
import {
  client as generatedClient,
  GreetingsEnum,
  mutation,
  query,
  resolved,
} from '../src/generated/gqless';
import {
  arrayObjectArgsDocument,
  multipleArgsDocument,
  simpleStringDocument,
} from '../src/generated/mercurius';

const testClient = createMercuriusTestClient(app);

beforeAll(async () => {
  await codegen();
});

resolved(() => query.union.map((v) => selectFields(v)))
  .then((data) => {
    console.log(data);
  })
  .catch(console.error);

test('works', async () => {
  await testClient.query(simpleStringDocument).then((response) => {
    expect(typeof response.data?.simpleString).toBe('string');
  });

  await testClient.query(arrayObjectArgsDocument).then((resp) => {
    expect(resp.errors).toBe(undefined);
  });
});

test('multiple args', async () => {
  const response = await testClient.query(multipleArgsDocument);

  expect(response).toEqual({
    data: {
      a1: {
        zxc: 'hello',
        abc: 'hello',
      },
      a2: {
        name: 'hello2',
      },
    },
  });
});

describe('gqless integration tests', () => {
  test('generatedClient', async () => {
    const anon = generatedClient.query.objectWithArgs({
      who: 'anon',
    });

    const { name, fatherName } = await resolved(() => {
      return {
        name: anon.name,
        fatherName: anon.father.father.name,
      };
    });

    expect(typeof name).toBe('string');

    expect(typeof fatherName).toBe('string');

    expect(typeof anon.name).toBe('string');

    expect(typeof anon.father.father.name).toBe('string');

    const arrayDataAfterResolved = await resolved(() => {
      return generatedClient.query.objectArray?.map((v) => v?.name);
    });

    expect((arrayDataAfterResolved?.length ?? 0) > 0).toBeTruthy();

    expect(
      arrayDataAfterResolved?.every(
        (v) => typeof v === 'string' && v.length > 30
      )
    ).toBeTruthy();
  });

  test('args', async () => {
    const name = await resolved(() => {
      return generatedClient.query.objectWithArgs({
        who: 'asd',
      }).name;
    });

    expect(name).toBe('asd');
  });

  test('refetch works', async () => {
    const firstHumanName = await resolved(() => {
      return generatedClient.query.object?.name;
    });

    expect((firstHumanName?.length ?? 0) > 20).toBeTruthy();

    const secondHumanName = await resolved(
      () => {
        return generatedClient.query.object?.name;
      },
      {
        refetch: true,
      }
    );

    expect((secondHumanName?.length ?? 0) > 20).toBeTruthy();

    expect(firstHumanName !== secondHumanName).toBeTruthy();
  });

  test('scheduler', async () => {
    const hello = 'zxczxc';
    const shouldBeUndefined = generatedClient.query.stringWithArgs({
      hello,
    });

    expect(shouldBeUndefined).toBe(undefined);

    waitForExpect(() => {
      const shouldBeString = generatedClient.query.stringWithArgs({
        hello,
      });

      expect(shouldBeString).toBe(hello);
    });
  });

  test('resolved no cache', async () => {
    const hello = 'asdasd';
    const helloQueryString = await resolved(
      () => {
        return generatedClient.query.stringWithArgs({
          hello,
        });
      },
      {
        noCache: true,
      }
    );

    expect(helloQueryString).toBe(hello);

    const shouldBeUndefined = generatedClient.query.stringWithArgs({
      hello,
    });

    expect(shouldBeUndefined).toBe(undefined);
  });

  test('arrays', async () => {
    const result = await resolved(() => {
      return generatedClient.query.arrayString;
    });

    expect(result.length).toBeGreaterThanOrEqual(1);

    expect(
      result.every((v) => {
        expect(v!.length).toBeGreaterThan(10);
        expect(typeof v).toBe('string');
      })
    );
  });

  test('input type', async () => {
    const result = await resolved(() => {
      return generatedClient.query.giveGreetingsInput({
        input: {
          language: 'spanish',
        },
      });
    });

    expect(result).toBe('spanish');
  });

  test('enum', async () => {
    const result = await resolved(() => {
      return generatedClient.query.greetings;
    });

    expect(Object.values(GreetingsEnum).includes(result!)).toBeTruthy();
  });

  test('nullable', async () => {
    const resultA = await resolved(() => {
      return generatedClient.query.stringNullableWithArgs({
        hello: 'a',
      });
    });

    expect(resultA).toBe('a');

    const resultB = await resolved(() => {
      return generatedClient.query.stringNullableWithArgs({
        hello: '',
        helloTwo: 'b',
      });
    });

    expect(resultB).toBe('b');
  });

  test('args array', async () => {
    const resultA = await resolved(() => {
      return generatedClient.query.stringNullableWithArgsArray({
        hello: ['a', 'b', 'c'],
      });
    });

    expect(resultA).toBe('a');

    const resultEmpty = await resolved(() => {
      return generatedClient.query.stringNullableWithArgsArray({
        hello: [],
      });
    });

    expect(resultEmpty).toBe(null);
  });

  test('type field with args', async () => {
    const result = await resolved(() => {
      return generatedClient.query.object?.fieldWithArgs({
        id: 123,
      });
    });

    expect(result).toBe(123);
  });

  describe('mutation', () => {
    test('mutation works', async () => {
      await resolved(() => {
        return mutation.increment({
          n: 1,
        });
      }).then((n) => {
        expect(n).toBe(1);
      });

      await resolved(
        () => {
          return mutation.increment({
            n: 2,
          });
        },
        {
          refetch: true,
        }
      ).then((n) => {
        expect(n).toBe(3);
      });

      const n = mutation.increment({
        n: 2,
      });

      expect(n).toBe(3);

      await resolved(() => {
        return query.number;
      }).then((n) => {
        expect(n).toBe(3);
      });
    });
  });
});

describe('select fields', () => {
  test('selectFields recursive', async () => {
    await resolved(
      () => {
        const one = selectFields(query, '*', 1);
        const two = selectFields(query, '*', 2);
        const three = selectFields(query, '*', 3);

        return {
          one,
          two,
          three,
        };
      },
      {
        refetch: true,
      }
    ).then((response) => {
      expect(typeof response.one?.arrayObjectArgs).toBe('function');
      expect(response.one?.objectArray?.length).toBeGreaterThanOrEqual(2);
      expect(typeof response.two?.object?.name).toBe('string');
    });
  });

  test('selectFields an array', async () => {
    await resolved(
      () => {
        return selectFields(query.objectArray, '*', 2);
      },
      {
        noCache: true,
      }
    ).then((response) => {
      expect(typeof response?.[0]?.name).toBe('string');
      expect(typeof response?.[0]?.father.name).toBe('string');
    });
  });

  test('selectFields named', async () => {
    await resolved(
      () => {
        return selectFields(query.object, [
          'name',
          'father.name',
          'sons.0.name',
          'fieldWithArgs',
          'sons',
        ]);
      },
      {
        noCache: true,
      }
    ).then((response) => {
      expect(typeof response?.name).toBe('string');
      expect(typeof response?.father?.name).toBe('string');
      expect(typeof response?.fieldWithArgs).toBe('function');
      expect(response?.sons?.length).toBeGreaterThanOrEqual(2);
      expect(typeof response?.sons?.[0]?.name).toBe('string');
      expect(typeof response?.sons?.[1]?.name).toBe('string');
    });
  });
});
