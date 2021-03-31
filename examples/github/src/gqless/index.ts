/**
 * GQLESS: You can safely modify this file and Query Fetcher based on your needs
 */

import 'isomorphic-unfetch';
import 'dotenv/config';

import { createClient, QueryFetcher } from 'gqless';

import {
  generatedSchema,
  GeneratedSchema,
  scalarsEnumsHash,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from './schema.generated';

if (!process.env.GITHUB_TOKEN) {
  console.error(
    'You have to create a .env file with a Github Personal Access token, like this: \nGITHUB_TOKEN=your_token_here'
  );
  process.exit(1);
}

const queryFetcher: QueryFetcher = async function (query, variables) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: 'cors',
  });

  const json = await response.json();

  return json;
};

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
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
