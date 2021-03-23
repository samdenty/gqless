import { createClient } from 'gqless';
import { createTestApp, gql } from 'test-utils';

import { createLogger } from '../src';

describe('logger', () => {
  const { client, isReady } = createTestApp({
    schema: gql`
      type Query {
        hello(hello: String!): String!
        throw: Boolean
      }
    `,
    resolvers: {
      Query: {
        hello() {
          return 'hello world';
        },
        async throw() {
          throw Error('expected');
        },
      },
    },
  });
  const gqlessClient = createClient<{
    query: {
      hello: (args: { hello: string }) => string;
      throw?: boolean;
    };
    mutation: {};
    subscription: {};
  }>({
    schema: {
      mutation: {},
      query: {
        hello: {
          __type: 'String!',
          __args: {
            hello: 'String!',
          },
        },
        throw: {
          __type: 'Boolean',
        },
      },
      subscription: {},
    },
    scalarsEnumsHash: {
      String: true,
      Boolean: true,
    },
    queryFetcher: (query, variables) => client.query(query, { variables }),
  });

  test('default options', async () => {
    await isReady;

    const logger = createLogger(gqlessClient);

    const stop = logger.start();

    const spyGroupCollapsed = jest
      .spyOn(console, 'groupCollapsed')
      .mockImplementation();
    const spyGroup = jest.spyOn(console, 'group').mockImplementation();
    const spyLog = jest.spyOn(console, 'log').mockImplementation();
    const spyError = jest.spyOn(console, 'error').mockImplementation();

    try {
      const dataPromise = gqlessClient.resolved(() => {
        return gqlessClient.query.hello({ hello: 'hello' });
      });

      const data = await dataPromise;

      expect(spyGroupCollapsed).toBeCalledTimes(2);

      expect(spyGroup).toBeCalledTimes(1);

      expect(spyLog).toBeCalledTimes(5);

      expect(data).toBe('hello world');

      const errorPromise = gqlessClient.resolved(() => {
        return gqlessClient.query.throw;
      });

      await errorPromise.catch(() => {});

      expect(spyGroupCollapsed).toBeCalledTimes(4);

      expect(spyGroup).toBeCalledTimes(2);

      expect(spyLog).toBeCalledTimes(8);

      expect(spyError).toBeCalledTimes(1);
    } finally {
      stop();
      spyGroupCollapsed.mockRestore();
      spyGroup.mockRestore();
      spyLog.mockRestore();
      spyError.mockRestore();
    }
  });

  test('disabled options', async () => {
    const logger = createLogger(gqlessClient, {
      showCache: false,
      showSelections: false,
    });

    const stop = logger.start();

    const spyGroupCollapsed = jest
      .spyOn(console, 'groupCollapsed')
      .mockImplementation();
    const spyGroup = jest.spyOn(console, 'group').mockImplementation();
    const spyLog = jest.spyOn(console, 'log').mockImplementation();
    const spyError = jest.spyOn(console, 'error').mockImplementation();

    try {
      const dataPromise = gqlessClient.resolved(
        () => {
          return gqlessClient.query.hello({ hello: 'hello' });
        },
        {
          noCache: true,
        }
      );

      const data = await dataPromise;

      expect(spyGroupCollapsed).toBeCalledTimes(1);

      expect(spyGroup).toBeCalledTimes(1);

      expect(spyLog).toBeCalledTimes(3);

      expect(data).toBe('hello world');

      const errorPromise = gqlessClient.resolved(
        () => {
          return gqlessClient.query.throw;
        },
        {
          noCache: true,
        }
      );

      await errorPromise.catch(() => {});

      expect(spyGroupCollapsed).toBeCalledTimes(2);

      expect(spyGroup).toBeCalledTimes(2);

      expect(spyLog).toBeCalledTimes(4);

      expect(spyError).toBeCalledTimes(1);
    } finally {
      stop();
      spyGroupCollapsed.mockRestore();
      spyGroup.mockRestore();
      spyLog.mockRestore();
      spyError.mockRestore();
    }
  });

  test('stringified JSON', async () => {
    const logger = createLogger(gqlessClient, {
      stringifyJSON: true,
    });

    const stop = logger.start();

    const spyGroupCollapsed = jest
      .spyOn(console, 'groupCollapsed')
      .mockImplementation();
    const spyGroup = jest.spyOn(console, 'group').mockImplementation();
    const spyLog = jest.spyOn(console, 'log').mockImplementation();
    const spyError = jest.spyOn(console, 'error').mockImplementation();

    try {
      const dataPromise = gqlessClient.resolved(
        () => {
          return gqlessClient.query.hello({ hello: 'hello' });
        },
        {
          noCache: true,
        }
      );

      const data = await dataPromise;

      expect(spyGroupCollapsed).toBeCalledTimes(2);

      expect(spyGroup).toBeCalledTimes(1);

      expect(spyLog).toBeCalledTimes(5);

      expect(data).toBe('hello world');

      const errorPromise = gqlessClient.resolved(
        () => {
          return gqlessClient.query.throw;
        },
        {
          noCache: true,
        }
      );

      await errorPromise.catch(() => {});

      expect(spyGroupCollapsed).toBeCalledTimes(4);

      expect(spyGroup).toBeCalledTimes(2);

      expect(spyLog).toBeCalledTimes(8);

      expect(spyError).toBeCalledTimes(1);
    } finally {
      stop();
      spyGroupCollapsed.mockRestore();
      spyGroup.mockRestore();
      spyLog.mockRestore();
      spyError.mockRestore();
    }
  });
});
