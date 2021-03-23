import { createMercuriusTestClient } from 'mercurius-integration-testing';

import { createClient, QueryFetcher } from 'gqless';

import { app } from '../';
import {
  GeneratedSchema,
  generatedSchema,
  scalarsEnumsHash,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from './schema.generated';

const testClient = createMercuriusTestClient(app);
const queryFetcher: QueryFetcher = function (query, variables) {
  return testClient.query(query, {
    variables,
  });
};

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
  normalization: {
    identifier(obj) {
      switch (obj.__typename) {
        case 'A': {
          return obj.a;
        }
        default: {
          return;
        }
      }
    },
    keyFields: {},
  },
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
