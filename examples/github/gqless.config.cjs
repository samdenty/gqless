require('dotenv').config();

/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  endpoint: 'https://api.github.com/graphql',
  enumsAsStrings: false,
  react: false,
  scalars: {
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
