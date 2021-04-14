/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  endpoint: '/api/graphql',
  enumsAsStrings: false,
  react: false,
  scalars: { DateTime: 'string' },
  preImport: '',
  introspection: { endpoint: 'SPECIFY_ENDPOINT_OR_SCHEMA_FILE_PATH_HERE' },
  destination: './src/generated/graphql.ts',
  subscriptions: false,
};

module.exports = config;
