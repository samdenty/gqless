/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
  endpoint: '/api/graphql',
  enumsAsStrings: false,
  react: false,
  scalars: { DateTime: 'string', Upload: 'File' },
  preImport: '',
  introspection: { endpoint: 'SPECIFY_ENDPOINT_OR_SCHEMA_FILE_PATH_HERE' },
  destination: './src/generated/graphql.ts',
};

module.exports = config;
