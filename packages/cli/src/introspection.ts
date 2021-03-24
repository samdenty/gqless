import { fetch } from 'cross-fetch';
import { print } from 'graphql';

import { introspectSchema, wrapSchema } from '@graphql-tools/wrap';

import { gqlessConfigPromise, defaultConfig } from './config';

import type { AsyncExecutor } from '@graphql-tools/delegate';
export interface IntrospectionOptions {
  /**
   * Endpoint of the remote GraphQL API or schema file
   */
  endpoint?: string;
  /**
   * Specify headers for the introspection
   */
  headers?: Record<string, string>;
}

export const getRemoteSchema = async (
  /**
   * Endpoint of the remote GraphQL API
   */
  endpoint: string,
  /**
   * Specify options for the introspection
   */
  { headers }: Pick<IntrospectionOptions, 'headers'> = {}
) => {
  const executor: AsyncExecutor = async ({ document, variables }) => {
    headers ||=
      (await gqlessConfigPromise).config.introspection?.headers ||
      defaultConfig.introspection.headers;
    const query = print(document);
    const fetchResult = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify({ query, variables }),
    });
    return fetchResult.json();
  };

  const schema = wrapSchema({
    schema: await introspectSchema(executor, {
      endpoint,
    }),
    executor,
  });

  return schema;
};
