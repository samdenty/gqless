import { createClient, QueryFetcher, debounce } from 'gqless';
import { createSubscriptionsClient } from '@gqless/subscriptions';
import { extractFiles } from 'extract-files';
import {
  GeneratedSchema,
  generatedSchema,
  scalarsEnumsHash,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from './schema.generated';

const queryFetcher: QueryFetcher = async function (query, variables) {
  const extracted = extractFiles({
    query,
    variables,
  });

  if (extracted.files.size > 0) {
    const form = new FormData();
    form.append('operations', JSON.stringify(extracted.clone));

    const map: Record<number, string[]> = {};
    let i = 0;
    extracted.files.forEach((paths, file) => {
      const index = ++i;
      map[index] = paths;
    });
    form.append('map', JSON.stringify(map));
    i = 0;
    extracted.files.forEach((_paths, file) => {
      const index = ++i;
      form.append(index + '', file as Blob);
    });

    const response = await fetch(
      typeof window !== 'undefined'
        ? '/api/graphql'
        : 'http://localhost:4141/api/graphql',
      {
        method: 'POST',
        headers: {},
        body: form,
        mode: 'cors',
      }
    );

    const json = await response.json();

    return json;
  }

  console.log(15, extracted);

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
