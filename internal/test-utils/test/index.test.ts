import fs from 'fs';
import { resolve } from 'path';

import { assertIsDefined, createTestApp, gql, waitForExpect } from '../src';

const { readFile } = fs.promises;

test('create test app with codegen', async () => {
  const codegenPath = resolve('./test/_generated.ts');
  const { client, isReady } = createTestApp(
    {
      schema: `
      type Query {
        hello: String!
      }
      `,
      resolvers: {
        Query: {
          hello(_root) {
            return 'hello world';
          },
        },
      },
    },
    {
      codegenPath,
    }
  );

  await isReady;

  expect(
    await readFile(codegenPath, {
      encoding: 'utf-8',
    })
  ).toMatchSnapshot();

  await client
    .query(
      `
    query {
      hello
    }
    `
    )
    .then((response) => {
      expect(response).toEqual({
        data: {
          hello: 'hello world',
        },
      });
    });
});

test('create test app without codegen', async () => {
  const { client, isReady } = createTestApp({
    schema: `
      type Query {
        hello: String!
      }
      `,
    resolvers: {
      Query: {
        hello(_root) {
          return 'hello world';
        },
      },
    },
  });

  await isReady;

  await client
    .query(
      `
    query {
      hello
    }
    `
    )
    .then((response) => {
      expect(response).toEqual({
        data: {
          hello: 'hello world',
        },
      });
    });
});

test('assertIsDefined', () => {
  let a: undefined | number = 1 as undefined | number;

  //@ts-expect-error
  expect(a.toFixed(1)).toBe('1.0');

  assertIsDefined(a);

  expect(a.toFixed(1)).toBe('1.0');

  let b: undefined | number = undefined as undefined | number;

  expect(() => {
    assertIsDefined(b, 'expected error');
  }).toThrowError('expected error');

  let c: undefined | number = undefined as undefined | number;

  expect(() => {
    assertIsDefined(c);
  }).toThrowError('value is nullable');
});

test('waitForExpect', () => {
  let a: number | undefined;

  setTimeout(() => {
    a = 1;
  }, 200);
  waitForExpect(() => {
    expect(a).toBe(1);
  });
});

test('gql', () => {
  const doc = gql`
    query {
      hello
    }
  `;

  expect(doc).toBe(`
    query {
      hello
    }
  `);

  const doc2 = gql`
    query {
      hello${'world'}
    }
  `;

  expect(doc2).toBe(`
    query {
      helloworld
    }
  `);
});
