require('dotenv').config();

/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  enumsAsStrings: false,
  react: false,
  scalarTypes: {
    DateTime: 'string',
    Date: 'string',
    GitObjectID: 'string',
    GitSSHRemote: 'string',
    GitTimestamp: 'string',
    HTML: 'string',
    PreciseDateTime: 'string',
    URI: 'string',
    X509Certificate: 'string',
  },
  preImport: '',
  introspection: {
    endpoint: 'https://api.github.com/graphql',
    headers: {
      authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
  },
  destination: './src/gqless/index.ts',
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;
