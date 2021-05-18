import fs from 'fs';
import path from 'path';
import { createTestApp } from 'test-utils';

import { writeGenerate } from '../src/writeGenerate';
import { getTempDir } from './utils';

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

beforeAll(async () => {
  await isReady;
});

test('generates code and writes existing file', async () => {
  const tempDir = await getTempDir({
    initSchemaFile: "console.log('hello world')",
  });

  try {
    const shouldBeIncluded = '// This should be included';

    const firstStats = await fs.promises.stat(tempDir.schemaPath);

    await writeGenerate(server.graphql.schema, tempDir.clientPath, {
      preImport: shouldBeIncluded,
    });

    const secondStats = await fs.promises.stat(tempDir.schemaPath);

    expect(secondStats.mtimeMs).toBeGreaterThan(firstStats.mtimeMs);

    // If the code didn't change, it shouldn't write anything
    await writeGenerate(server.graphql.schema, tempDir.clientPath, {
      preImport: shouldBeIncluded,
    });

    const thirdStats = await fs.promises.stat(tempDir.schemaPath);

    expect(secondStats.mtimeMs).toBe(thirdStats.mtimeMs);

    const generatedContent = await fs.promises.readFile(tempDir.schemaPath, {
      encoding: 'utf-8',
    });

    expect(
      generatedContent
        .split('\n')
        .slice(3)
        .join('\n')
        .startsWith(shouldBeIncluded)
    ).toBeTruthy();

    expect(generatedContent).toMatchInlineSnapshot(`
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
  } finally {
    await tempDir.cleanup();
  }
});

test('creates dir, generates code and writes new file', async () => {
  const tempDir = await getTempDir();

  try {
    const targetPath = path.join(
      tempDir.clientPath,
      '/new_path/file-to-generate.ts'
    );

    const shouldBeIncluded = '// This should be included';

    const destinationPath = await writeGenerate(
      server.graphql.schema,
      targetPath,
      {
        preImport: shouldBeIncluded,
      }
    );

    const generatedContentSchema = await fs.promises.readFile(
      path.resolve(path.dirname(destinationPath), './schema.generated.ts'),
      {
        encoding: 'utf-8',
      }
    );

    expect(
      generatedContentSchema
        .split('\n')
        .slice(3)
        .join('\n')
        .startsWith(shouldBeIncluded)
    ).toBeTruthy();

    expect(generatedContentSchema).toMatchInlineSnapshot(`
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

    const generatedContentClient = await fs.promises.readFile(
      path.resolve(path.dirname(destinationPath), './file-to-generate.ts'),
      {
        encoding: 'utf-8',
      }
    );

    expect(generatedContentClient).toMatchInlineSnapshot(`
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
  } finally {
    await tempDir.cleanup();
  }
});

test('generates code and writes existing file', async () => {
  const tempDir = await getTempDir({
    clientFileName: './client.js',
  });

  try {
    try {
      await writeGenerate(server.graphql.schema, tempDir.clientPath);

      throw Error("shouldn't react");
    } catch (err: unknown) {
      expect(err).toEqual(
        Error(
          `You have to specify the ".ts" extension, instead, it received: "${tempDir.clientPath}"`
        )
      );
    }
  } finally {
    await tempDir.cleanup();
  }
});
