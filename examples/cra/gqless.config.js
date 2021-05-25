/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  enumsAsStrings: true,
  react: true,
  scalarTypes: {
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
