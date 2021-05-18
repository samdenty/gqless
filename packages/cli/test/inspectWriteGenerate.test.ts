import fs from 'fs';
import { createTestApp } from 'test-utils';
import tmp from 'tmp-promise';

import { inspectWriteGenerate } from '../src/inspectWriteGenerate';
import { getTempDir } from './utils';

const { readFile } = fs.promises;
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

test('basic inspectWriteGenerate functionality', async () => {
  const tempDir = await getTempDir();

  try {
    await inspectWriteGenerate({
      endpoint,
      destination: tempDir.clientPath,
    });

    expect(
      (
        await readFile(tempDir.clientPath, {
          encoding: 'utf-8',
        })
      ).replace(new RegExp(endpoint, 'g'), '/graphql')
    ).toMatchInlineSnapshot(`
      "/**
       * GQLESS: You can safely modify this file and Query Fetcher based on your needs
       */

      import { createReactClient } from '@gqless/react';

      import { createClient, QueryFetcher } from 'gqless';
      import {
        generatedSchema,
        scalarsEnumsHash,
        GeneratedSchema,
        SchemaObjectTypes,
        SchemaObjectTypesNames,
      } from './schema.generated';

      const queryFetcher: QueryFetcher = async function (query, variables) {
        // Modify \\"/graphql\\" if needed
        const response = await fetch('/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
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

      export const {
        graphql,
        useQuery,
        usePaginatedQuery,
        useTransactionQuery,
        useLazyQuery,
        useRefetch,
        useMutation,
        useMetaState,
        prepareReactRender,
        useHydrateCache,
        prepareQuery,
      } = createReactClient<GeneratedSchema>(client, {
        defaults: {
          // Set this flag as \\"true\\" if your usage involves React Suspense
          // Keep in mind that you can overwrite it in a per-hook basis
          suspense: false,

          // Set this flag based on your needs
          staleWhileRevalidate: false,
        },
      });

      export * from './schema.generated';
      "
    `);

    expect(
      await readFile(tempDir.schemaPath, {
        encoding: 'utf-8',
      })
    ).toMatchInlineSnapshot(`
      "/**
       * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
       */

      export type Maybe<T> = T | null;
      export type Exact<T extends { [key: string]: unknown }> = {
        [K in keyof T]: T[K];
      };
      export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
        { [SubKey in K]?: Maybe<T[SubKey]> };
      export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
        { [SubKey in K]: Maybe<T[SubKey]> };
      /** All built-in and custom scalars, mapped to their actual values */
      export interface Scalars {
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
      }

      export const scalarsEnumsHash: import('gqless').ScalarsEnumsHash = {
        String: true,
        Boolean: true,
      };
      export const generatedSchema = {
        query: { __typename: { __type: 'String!' }, hello: { __type: 'String!' } },
        mutation: {},
        subscription: {},
      } as const;

      export interface Query {
        __typename: 'Query' | undefined;
        hello: ScalarsEnums['String'];
      }

      export interface Mutation {
        __typename: 'Mutation' | undefined;
      }

      export interface Subscription {
        __typename: 'Subscription' | undefined;
      }

      export interface SchemaObjectTypes {
        Query: Query;
        Mutation: Mutation;
        Subscription: Subscription;
      }
      export type SchemaObjectTypesNames = 'Query' | 'Mutation' | 'Subscription';

      export interface GeneratedSchema {
        query: Query;
        mutation: Mutation;
        subscription: Subscription;
      }

      export type MakeNullable<T> = {
        [K in keyof T]: T[K] | undefined;
      };

      export interface ScalarsEnums extends MakeNullable<Scalars> {}
      "
    `);
  } finally {
    await tempDir.cleanup();
  }
});

describe('from file', () => {
  test('generate from graphql schema file', async () => {
    const tempFile = await tmp.file();
    const tempDir = await getTempDir();

    try {
      await fs.promises.writeFile(
        tempFile.path,
        `
      type Query {
        hello: Int!
      }
      `
      );

      await inspectWriteGenerate({
        endpoint: tempFile.path,
        destination: tempDir.clientPath,
      });

      const generatedFileContentClient = await readFile(tempDir.clientPath, {
        encoding: 'utf-8',
      });

      const generatedFileContentSchema = await readFile(tempDir.schemaPath, {
        encoding: 'utf-8',
      });

      expect(
        generatedFileContentClient.replace(
          new RegExp(endpoint, 'g'),
          '/graphql'
        )
      ).toMatchInlineSnapshot(`
        "/**
         * GQLESS: You can safely modify this file and Query Fetcher based on your needs
         */

        import { createReactClient } from '@gqless/react';

        import { createClient, QueryFetcher } from 'gqless';
        import {
          generatedSchema,
          scalarsEnumsHash,
          GeneratedSchema,
          SchemaObjectTypes,
          SchemaObjectTypesNames,
        } from './schema.generated';

        const queryFetcher: QueryFetcher = async function (query, variables) {
          // Modify \\"/api/graphql\\" if needed
          const response = await fetch('/api/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
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

        export const {
          graphql,
          useQuery,
          usePaginatedQuery,
          useTransactionQuery,
          useLazyQuery,
          useRefetch,
          useMutation,
          useMetaState,
          prepareReactRender,
          useHydrateCache,
          prepareQuery,
        } = createReactClient<GeneratedSchema>(client, {
          defaults: {
            // Set this flag as \\"true\\" if your usage involves React Suspense
            // Keep in mind that you can overwrite it in a per-hook basis
            suspense: false,

            // Set this flag based on your needs
            staleWhileRevalidate: false,
          },
        });

        export * from './schema.generated';
        "
      `);
      expect(generatedFileContentSchema).toMatchInlineSnapshot(`
        "/**
         * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
         */

        export type Maybe<T> = T | null;
        export type Exact<T extends { [key: string]: unknown }> = {
          [K in keyof T]: T[K];
        };
        export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
          { [SubKey in K]?: Maybe<T[SubKey]> };
        export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
          { [SubKey in K]: Maybe<T[SubKey]> };
        /** All built-in and custom scalars, mapped to their actual values */
        export interface Scalars {
          ID: string;
          String: string;
          Boolean: boolean;
          Int: number;
          Float: number;
        }

        export const scalarsEnumsHash: import('gqless').ScalarsEnumsHash = {
          Int: true,
          Boolean: true,
          String: true,
        };
        export const generatedSchema = {
          query: { __typename: { __type: 'String!' }, hello: { __type: 'Int!' } },
          mutation: {},
          subscription: {},
        } as const;

        export interface Query {
          __typename: 'Query' | undefined;
          hello: ScalarsEnums['Int'];
        }

        export interface Mutation {
          __typename: 'Mutation' | undefined;
        }

        export interface Subscription {
          __typename: 'Subscription' | undefined;
        }

        export interface SchemaObjectTypes {
          Query: Query;
          Mutation: Mutation;
          Subscription: Subscription;
        }
        export type SchemaObjectTypesNames = 'Query' | 'Mutation' | 'Subscription';

        export interface GeneratedSchema {
          query: Query;
          mutation: Mutation;
          subscription: Subscription;
        }

        export type MakeNullable<T> = {
          [K in keyof T]: T[K] | undefined;
        };

        export interface ScalarsEnums extends MakeNullable<Scalars> {}
        "
      `);
    } finally {
      await tempFile.cleanup();
      await tempDir.cleanup();
    }
  });

  test('generate from graphql JSON introspection schema file with data field', async () => {
    const { getIntrospectionQuery, graphqlSync } = await import('graphql');
    const tempFile = await tmp.file({
      postfix: '.json',
    });
    const tempDir = await getTempDir();

    try {
      await fs.promises.writeFile(
        tempFile.path,
        JSON.stringify(
          graphqlSync(server.graphql.schema, getIntrospectionQuery())
        )
      );

      await inspectWriteGenerate({
        endpoint: tempFile.path,
        destination: tempDir.clientPath,
      });

      const generatedFileContentClient = await readFile(tempDir.clientPath, {
        encoding: 'utf-8',
      });

      const generatedFileContentSchema = await readFile(tempDir.schemaPath, {
        encoding: 'utf-8',
      });

      expect(
        generatedFileContentClient.replace(
          new RegExp(endpoint, 'g'),
          '/graphql'
        )
      ).toMatchInlineSnapshot(`
        "/**
         * GQLESS: You can safely modify this file and Query Fetcher based on your needs
         */

        import { createReactClient } from '@gqless/react';

        import { createClient, QueryFetcher } from 'gqless';
        import {
          generatedSchema,
          scalarsEnumsHash,
          GeneratedSchema,
          SchemaObjectTypes,
          SchemaObjectTypesNames,
        } from './schema.generated';

        const queryFetcher: QueryFetcher = async function (query, variables) {
          // Modify \\"/api/graphql\\" if needed
          const response = await fetch('/api/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
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

        export const {
          graphql,
          useQuery,
          usePaginatedQuery,
          useTransactionQuery,
          useLazyQuery,
          useRefetch,
          useMutation,
          useMetaState,
          prepareReactRender,
          useHydrateCache,
          prepareQuery,
        } = createReactClient<GeneratedSchema>(client, {
          defaults: {
            // Set this flag as \\"true\\" if your usage involves React Suspense
            // Keep in mind that you can overwrite it in a per-hook basis
            suspense: false,

            // Set this flag based on your needs
            staleWhileRevalidate: false,
          },
        });

        export * from './schema.generated';
        "
      `);
      expect(generatedFileContentSchema).toMatchInlineSnapshot(`
        "/**
         * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
         */

        export type Maybe<T> = T | null;
        export type Exact<T extends { [key: string]: unknown }> = {
          [K in keyof T]: T[K];
        };
        export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
          { [SubKey in K]?: Maybe<T[SubKey]> };
        export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
          { [SubKey in K]: Maybe<T[SubKey]> };
        /** All built-in and custom scalars, mapped to their actual values */
        export interface Scalars {
          ID: string;
          String: string;
          Boolean: boolean;
          Int: number;
          Float: number;
        }

        export const scalarsEnumsHash: import('gqless').ScalarsEnumsHash = {
          String: true,
          Boolean: true,
        };
        export const generatedSchema = {
          query: { __typename: { __type: 'String!' }, hello: { __type: 'String!' } },
          mutation: {},
          subscription: {},
        } as const;

        export interface Query {
          __typename: 'Query' | undefined;
          hello: ScalarsEnums['String'];
        }

        export interface Mutation {
          __typename: 'Mutation' | undefined;
        }

        export interface Subscription {
          __typename: 'Subscription' | undefined;
        }

        export interface SchemaObjectTypes {
          Query: Query;
          Mutation: Mutation;
          Subscription: Subscription;
        }
        export type SchemaObjectTypesNames = 'Query' | 'Mutation' | 'Subscription';

        export interface GeneratedSchema {
          query: Query;
          mutation: Mutation;
          subscription: Subscription;
        }

        export type MakeNullable<T> = {
          [K in keyof T]: T[K] | undefined;
        };

        export interface ScalarsEnums extends MakeNullable<Scalars> {}
        "
      `);
    } finally {
      await tempFile.cleanup();
      await tempDir.cleanup();
    }
  });

  test('generate from graphql JSON introspection schema file', async () => {
    const { getIntrospectionQuery, graphqlSync } = await import('graphql');
    const tempFile = await tmp.file({
      postfix: '.json',
    });
    const tempDir = await getTempDir();

    try {
      await fs.promises.writeFile(
        tempFile.path,
        JSON.stringify(
          graphqlSync(server.graphql.schema, getIntrospectionQuery()).data
        )
      );

      await inspectWriteGenerate({
        endpoint: tempFile.path,
        destination: tempDir.clientPath,
      });

      const generatedFileContentClient = await readFile(tempDir.clientPath, {
        encoding: 'utf-8',
      });

      const generatedFileContentSchema = await readFile(tempDir.schemaPath, {
        encoding: 'utf-8',
      });

      expect(
        generatedFileContentClient.replace(
          new RegExp(endpoint, 'g'),
          '/graphql'
        )
      ).toMatchInlineSnapshot(`
        "/**
         * GQLESS: You can safely modify this file and Query Fetcher based on your needs
         */

        import { createReactClient } from '@gqless/react';

        import { createClient, QueryFetcher } from 'gqless';
        import {
          generatedSchema,
          scalarsEnumsHash,
          GeneratedSchema,
          SchemaObjectTypes,
          SchemaObjectTypesNames,
        } from './schema.generated';

        const queryFetcher: QueryFetcher = async function (query, variables) {
          // Modify \\"/api/graphql\\" if needed
          const response = await fetch('/api/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
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

        export const {
          graphql,
          useQuery,
          usePaginatedQuery,
          useTransactionQuery,
          useLazyQuery,
          useRefetch,
          useMutation,
          useMetaState,
          prepareReactRender,
          useHydrateCache,
          prepareQuery,
        } = createReactClient<GeneratedSchema>(client, {
          defaults: {
            // Set this flag as \\"true\\" if your usage involves React Suspense
            // Keep in mind that you can overwrite it in a per-hook basis
            suspense: false,

            // Set this flag based on your needs
            staleWhileRevalidate: false,
          },
        });

        export * from './schema.generated';
        "
      `);
      expect(generatedFileContentSchema).toMatchInlineSnapshot(`
        "/**
         * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
         */

        export type Maybe<T> = T | null;
        export type Exact<T extends { [key: string]: unknown }> = {
          [K in keyof T]: T[K];
        };
        export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
          { [SubKey in K]?: Maybe<T[SubKey]> };
        export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
          { [SubKey in K]: Maybe<T[SubKey]> };
        /** All built-in and custom scalars, mapped to their actual values */
        export interface Scalars {
          ID: string;
          String: string;
          Boolean: boolean;
          Int: number;
          Float: number;
        }

        export const scalarsEnumsHash: import('gqless').ScalarsEnumsHash = {
          String: true,
          Boolean: true,
        };
        export const generatedSchema = {
          query: { __typename: { __type: 'String!' }, hello: { __type: 'String!' } },
          mutation: {},
          subscription: {},
        } as const;

        export interface Query {
          __typename: 'Query' | undefined;
          hello: ScalarsEnums['String'];
        }

        export interface Mutation {
          __typename: 'Mutation' | undefined;
        }

        export interface Subscription {
          __typename: 'Subscription' | undefined;
        }

        export interface SchemaObjectTypes {
          Query: Query;
          Mutation: Mutation;
          Subscription: Subscription;
        }
        export type SchemaObjectTypesNames = 'Query' | 'Mutation' | 'Subscription';

        export interface GeneratedSchema {
          query: Query;
          mutation: Mutation;
          subscription: Subscription;
        }

        export type MakeNullable<T> = {
          [K in keyof T]: T[K] | undefined;
        };

        export interface ScalarsEnums extends MakeNullable<Scalars> {}
        "
      `);
    } finally {
      await tempFile.cleanup();
      await tempDir.cleanup();
    }
  });

  test('invalid json', async () => {
    const tempFile = await tmp.file({
      postfix: '.json',
    });
    const tempDir = await getTempDir();

    try {
      await fs.promises.writeFile(tempFile.path, JSON.stringify({}));

      await expect(async () => {
        await inspectWriteGenerate({
          endpoint: tempFile.path,
          destination: tempDir.clientPath,
        });
      }).rejects.toMatchInlineSnapshot(
        `[Error: Invalid JSON introspection result, expected "__schema" or "data.__schema" field.]`
      );
    } finally {
      await tempFile.cleanup();
      await tempDir.cleanup();
    }
  });

  test('non-existant file', async () => {
    const tempDir = await getTempDir();

    try {
      const endpoint = './non-existant-file.gql';
      const result = await inspectWriteGenerate({
        endpoint,
        destination: tempDir.clientPath,
      }).catch((err) => err);

      expect(result).toStrictEqual(
        Error(
          `File "${endpoint}" doesn't exists. If you meant to inspect a GraphQL API, make sure to put http:// or https:// in front of it.`
        )
      );
    } finally {
      tempDir.cleanup();
    }
  });
});

test('specify generateOptions to inspectWriteGenerate', async () => {
  const tempDir = await getTempDir();

  const shouldBeIncluded = '// This should be included';

  try {
    await inspectWriteGenerate({
      endpoint,
      destination: tempDir.clientPath,
      generateOptions: {
        preImport: `
            ${shouldBeIncluded}
            `,
      },
    });

    const generatedFileContentClient = await readFile(tempDir.clientPath, {
      encoding: 'utf-8',
    });

    const generatedFileContentSchema = await readFile(tempDir.schemaPath, {
      encoding: 'utf-8',
    });

    expect(
      generatedFileContentClient.replace(new RegExp(endpoint, 'g'), '/graphql')
    ).toMatchInlineSnapshot(`
      "/**
       * GQLESS: You can safely modify this file and Query Fetcher based on your needs
       */

      import { createReactClient } from '@gqless/react';

      import { createClient, QueryFetcher } from 'gqless';
      import {
        generatedSchema,
        scalarsEnumsHash,
        GeneratedSchema,
        SchemaObjectTypes,
        SchemaObjectTypesNames,
      } from './schema.generated';

      const queryFetcher: QueryFetcher = async function (query, variables) {
        // Modify \\"/graphql\\" if needed
        const response = await fetch('/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
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

      export const {
        graphql,
        useQuery,
        usePaginatedQuery,
        useTransactionQuery,
        useLazyQuery,
        useRefetch,
        useMutation,
        useMetaState,
        prepareReactRender,
        useHydrateCache,
        prepareQuery,
      } = createReactClient<GeneratedSchema>(client, {
        defaults: {
          // Set this flag as \\"true\\" if your usage involves React Suspense
          // Keep in mind that you can overwrite it in a per-hook basis
          suspense: false,

          // Set this flag based on your needs
          staleWhileRevalidate: false,
        },
      });

      export * from './schema.generated';
      "
    `);
    expect(generatedFileContentSchema).toMatchInlineSnapshot(`
      "/**
       * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
       */

      // This should be included

      export type Maybe<T> = T | null;
      export type Exact<T extends { [key: string]: unknown }> = {
        [K in keyof T]: T[K];
      };
      export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
        { [SubKey in K]?: Maybe<T[SubKey]> };
      export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
        { [SubKey in K]: Maybe<T[SubKey]> };
      /** All built-in and custom scalars, mapped to their actual values */
      export interface Scalars {
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
      }

      export const scalarsEnumsHash: import('gqless').ScalarsEnumsHash = {
        String: true,
        Boolean: true,
      };
      export const generatedSchema = {
        query: { __typename: { __type: 'String!' }, hello: { __type: 'String!' } },
        mutation: {},
        subscription: {},
      } as const;

      export interface Query {
        __typename: 'Query' | undefined;
        hello: ScalarsEnums['String'];
      }

      export interface Mutation {
        __typename: 'Mutation' | undefined;
      }

      export interface Subscription {
        __typename: 'Subscription' | undefined;
      }

      export interface SchemaObjectTypes {
        Query: Query;
        Mutation: Mutation;
        Subscription: Subscription;
      }
      export type SchemaObjectTypesNames = 'Query' | 'Mutation' | 'Subscription';

      export interface GeneratedSchema {
        query: Query;
        mutation: Mutation;
        subscription: Subscription;
      }

      export type MakeNullable<T> = {
        [K in keyof T]: T[K] | undefined;
      };

      export interface ScalarsEnums extends MakeNullable<Scalars> {}
      "
    `);

    expect(
      generatedFileContentSchema
        .split('\n')
        .slice(3)
        .join('\n')
        .trim()
        .startsWith(shouldBeIncluded)
    ).toBeTruthy();
  } finally {
    await tempDir.cleanup();
  }
});

describe('inspect headers', () => {
  let endpoint: string;

  const secretToken = 'super secret token';

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
    context: (req, _reply) => {
      if (req.headers.authorization !== secretToken) {
        throw Error('Unauthorized!');
      }
      return {};
    },
  });

  beforeAll(async () => {
    await isReady;
    endpoint = (await server.listen(0)) + '/graphql';
  });

  afterAll(async () => {
    await server.close();
  });

  test('specify headers to inspectWriteGenerate', async () => {
    const tempDir = await getTempDir();

    const shouldBeIncluded = '// This should be included';

    try {
      await inspectWriteGenerate({
        endpoint,
        destination: tempDir.clientPath,
        headers: {
          authorization: secretToken,
        },
        generateOptions: {
          preImport: shouldBeIncluded,
        },
      });

      const generatedFileContent = await readFile(tempDir.schemaPath, {
        encoding: 'utf-8',
      });

      expect(generatedFileContent).toMatchInlineSnapshot(`
        "/**
         * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
         */
        // This should be included

        export type Maybe<T> = T | null;
        export type Exact<T extends { [key: string]: unknown }> = {
          [K in keyof T]: T[K];
        };
        export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
          { [SubKey in K]?: Maybe<T[SubKey]> };
        export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
          { [SubKey in K]: Maybe<T[SubKey]> };
        /** All built-in and custom scalars, mapped to their actual values */
        export interface Scalars {
          ID: string;
          String: string;
          Boolean: boolean;
          Int: number;
          Float: number;
        }

        export const scalarsEnumsHash: import('gqless').ScalarsEnumsHash = {
          String: true,
          Boolean: true,
        };
        export const generatedSchema = {
          query: { __typename: { __type: 'String!' }, hello: { __type: 'String!' } },
          mutation: {},
          subscription: {},
        } as const;

        export interface Query {
          __typename: 'Query' | undefined;
          hello: ScalarsEnums['String'];
        }

        export interface Mutation {
          __typename: 'Mutation' | undefined;
        }

        export interface Subscription {
          __typename: 'Subscription' | undefined;
        }

        export interface SchemaObjectTypes {
          Query: Query;
          Mutation: Mutation;
          Subscription: Subscription;
        }
        export type SchemaObjectTypesNames = 'Query' | 'Mutation' | 'Subscription';

        export interface GeneratedSchema {
          query: Query;
          mutation: Mutation;
          subscription: Subscription;
        }

        export type MakeNullable<T> = {
          [K in keyof T]: T[K] | undefined;
        };

        export interface ScalarsEnums extends MakeNullable<Scalars> {}
        "
      `);

      expect(
        generatedFileContent
          .split('\n')
          .slice(3)
          .join('\n')
          .startsWith(shouldBeIncluded)
      ).toBeTruthy();
    } finally {
      await tempDir.cleanup();
    }
  });

  test('should throw if headers are not specified when required by server', async () => {
    const tempDir = await getTempDir({
      initClientFile: '',
    });

    try {
      await expect(
        inspectWriteGenerate({
          endpoint,
          destination: tempDir.clientPath,
        })
      ).rejects.toEqual({
        message: 'Unauthorized!',
      });

      const generatedFileContent = await readFile(tempDir.clientPath, {
        encoding: 'utf-8',
      });

      expect(generatedFileContent).toBe('');
    } finally {
      await tempDir.cleanup();
    }
  });
});

describe('CLI behavior', () => {
  test('final message', async () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const tempDir = await getTempDir();

    try {
      await inspectWriteGenerate({
        endpoint,
        destination: tempDir.clientPath,
        cli: true,
      });

      expect(spy).toHaveBeenCalledTimes(1);

      expect(spy).toHaveBeenLastCalledWith(
        'Code generated successfully at ' + tempDir.clientPath
      );

      expect(
        (
          await readFile(tempDir.clientPath, {
            encoding: 'utf-8',
          })
        ).replace(new RegExp(endpoint, 'g'), '/graphql')
      ).toMatchInlineSnapshot(`
        "/**
         * GQLESS: You can safely modify this file and Query Fetcher based on your needs
         */

        import { createReactClient } from '@gqless/react';

        import { createClient, QueryFetcher } from 'gqless';
        import {
          generatedSchema,
          scalarsEnumsHash,
          GeneratedSchema,
          SchemaObjectTypes,
          SchemaObjectTypesNames,
        } from './schema.generated';

        const queryFetcher: QueryFetcher = async function (query, variables) {
          // Modify \\"/graphql\\" if needed
          const response = await fetch('/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
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

        export const {
          graphql,
          useQuery,
          usePaginatedQuery,
          useTransactionQuery,
          useLazyQuery,
          useRefetch,
          useMutation,
          useMetaState,
          prepareReactRender,
          useHydrateCache,
          prepareQuery,
        } = createReactClient<GeneratedSchema>(client, {
          defaults: {
            // Set this flag as \\"true\\" if your usage involves React Suspense
            // Keep in mind that you can overwrite it in a per-hook basis
            suspense: false,

            // Set this flag based on your needs
            staleWhileRevalidate: false,
          },
        });

        export * from './schema.generated';
        "
      `);

      expect(
        await readFile(tempDir.schemaPath, {
          encoding: 'utf-8',
        })
      ).toMatchInlineSnapshot(`
        "/**
         * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
         */

        export type Maybe<T> = T | null;
        export type Exact<T extends { [key: string]: unknown }> = {
          [K in keyof T]: T[K];
        };
        export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
          { [SubKey in K]?: Maybe<T[SubKey]> };
        export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
          { [SubKey in K]: Maybe<T[SubKey]> };
        /** All built-in and custom scalars, mapped to their actual values */
        export interface Scalars {
          ID: string;
          String: string;
          Boolean: boolean;
          Int: number;
          Float: number;
        }

        export const scalarsEnumsHash: import('gqless').ScalarsEnumsHash = {
          String: true,
          Boolean: true,
        };
        export const generatedSchema = {
          query: { __typename: { __type: 'String!' }, hello: { __type: 'String!' } },
          mutation: {},
          subscription: {},
        } as const;

        export interface Query {
          __typename: 'Query' | undefined;
          hello: ScalarsEnums['String'];
        }

        export interface Mutation {
          __typename: 'Mutation' | undefined;
        }

        export interface Subscription {
          __typename: 'Subscription' | undefined;
        }

        export interface SchemaObjectTypes {
          Query: Query;
          Mutation: Mutation;
          Subscription: Subscription;
        }
        export type SchemaObjectTypesNames = 'Query' | 'Mutation' | 'Subscription';

        export interface GeneratedSchema {
          query: Query;
          mutation: Mutation;
          subscription: Subscription;
        }

        export type MakeNullable<T> = {
          [K in keyof T]: T[K] | undefined;
        };

        export interface ScalarsEnums extends MakeNullable<Scalars> {}
        "
      `);
    } finally {
      await tempDir.cleanup();
      spy.mockRestore();
    }
  });
});

test('detect client config change between files', async () => {
  const tempDir = await getTempDir();

  const clientPathRegex = new RegExp(
    tempDir.clientPath.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'),
    'g'
  );

  let n = 0;
  const spy = jest.spyOn(console, 'warn').mockImplementation((message) => {
    switch (++n) {
      case 1: {
        expect(message.replace(clientPathRegex, 'client.ts'))
          .toMatchInlineSnapshot(`
          "[Warning] You've changed the option \\"subscriptions\\" to 'true', which is different from your existing \\"client.ts\\".
          If you meant to change this, please remove \\"client.ts\\" and re-run code generation."
        `);
        break;
      }
      case 2: {
        expect(message.replace(clientPathRegex, 'client.ts'))
          .toMatchInlineSnapshot(`
          "[Warning] You've changed the option \\"react\\" to 'true', which is different from your existing \\"client.ts\\".
          If you meant to change this, please remove \\"client.ts\\" and re-run code generation."
        `);
        break;
      }
    }
  });

  try {
    await inspectWriteGenerate({
      endpoint,
      destination: tempDir.clientPath,
      generateOptions: {
        react: false,
        subscriptions: false,
      },
    });

    expect(spy).toBeCalledTimes(0);

    await inspectWriteGenerate({
      endpoint,
      destination: tempDir.clientPath,
      generateOptions: {
        react: true,
        subscriptions: true,
      },
    });

    expect(spy).toBeCalledTimes(2);
  } finally {
    await tempDir.cleanup();
    spy.mockRestore();
  }
});
