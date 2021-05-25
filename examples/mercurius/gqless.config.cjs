/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  enumsAsStrings: false,
  react: false,
  scalarTypes: { DateTime: 'string' },
  preImport: '',
  introspection: { endpoint: 'SPECIFY_ENDPOINT_OR_SCHEMA_FILE_PATH_HERE' },
  destination: './src/generated/graphql.ts',
  subscriptions: false,
};

module.exports = config;
