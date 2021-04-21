/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
  endpoint: "https://examples-api.gqless.com/graphql",
  enumsAsStrings: true,
  react: true,
  scalars: {
    DateTime: "string",
    NonNegativeInt: "number",
    NonEmptyString: "string",
    EmailAddress: "string",
  },
  preImport: "",
  introspection: {
    endpoint: "https://examples-api.gqless.com/graphql",
    headers: {},
  },
  destination: "./src/gqless/index.ts",
  subscriptions: true,
  javascriptOutput: false,
};

module.exports = config;
