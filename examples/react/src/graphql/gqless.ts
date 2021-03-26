import { createClient, QueryFetcher, debounce } from 'gqless';
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

if (typeof window !== 'undefined') {
  client.restorePersistence(localStorage.getItem('gqless-cache'), 'v1');
  const backup = debounce(() => {
    localStorage.setItem('gqless-cache', client.backupPersistence('v1'));
  }, 1000);

  client.eventHandler.onFetchSubscribe((promise) => promise.then(backup));

  client.eventHandler.onCacheChangeSubscribe(backup);
}

export const {
  query,
  mutation,
  mutate,
  subscription,
  resolved,
  refetch,
} = client;

export * from './schema.generated';
