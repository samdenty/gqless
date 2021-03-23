import { createClient, QueryFetcher } from 'gqless';
import { createSubscriptionsClient } from '@gqless/subscriptions';

import {
  GeneratedSchema,
  generatedSchema,
  scalarsEnumsHash,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from './schema.generated';

const queryFetcher: QueryFetcher = async function (query, variables) {
  const response = await fetch(
    typeof window !== 'undefined'
      ? '/api/graphql'
      : 'http://localhost:4141/api/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      mode: 'cors',
    }
  );

  const json = await response.json();

  return json;
};

const subscriptionsClient =
  typeof window !== 'undefined'
    ? createSubscriptionsClient({
        wsEndpoint: 'ws://localhost:4141/api/graphql',
      })
    : undefined;

const { setConnectionParams } = subscriptionsClient || {};

export { setConnectionParams };

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
  catchSelectionsTimeMS: 10,
  normalization: {
    keyFields: {},
  },
  subscriptionsClient,
});

export const {
  query,
  mutation,
  mutate,
  subscription,
  resolved,
  refetch,
} = client;

export * from './schema.generated';
