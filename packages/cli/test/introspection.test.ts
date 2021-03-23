import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { assertIsDefined, createTestApp } from 'test-utils';

import { getRemoteSchema } from '../src';

const { server, isReady } = createTestApp({
  schema: `
      type Query {
          hello: String!
      }
      `,
  resolvers: {
    Query: {
      hello() {
        return 'hello world';
      },
    },
  },
});

let endpoint: string;
beforeAll(async () => {
  await isReady;

  endpoint = (await server.listen(0)) + '/graphql';
});

afterAll(async () => {
  server.close();
});

test('introspection works', async () => {
  const schema = await getRemoteSchema(endpoint);

  expect(schema).toBeInstanceOf(GraphQLSchema);

  const queryType = schema.getQueryType();

  expect(queryType).toBeInstanceOf(GraphQLObjectType);

  assertIsDefined(queryType);

  const fieldsMap = queryType.getFields();

  const hello = fieldsMap['hello'];

  assertIsDefined(hello);
});
