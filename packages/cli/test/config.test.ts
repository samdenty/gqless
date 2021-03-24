import { getValidConfig, GqlessConfig } from '../src/config';

test('completely valid config', () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation();

  try {
    getValidConfig({
      destination: './gqless',
      endpoint: '/graphql',
      enumsAsStrings: true,
      introspection: {
        headers: {
          hello: 'asd',
        },
        endpoint: 'http://localhost:3000/graphql',
      },
      javascriptOutput: true,
      preImport: '',
      react: true,
      scalars: {
        DateTime: 'string',
      },
      subscriptions: true,
      other: undefined,
    } as GqlessConfig);

    expect(spy).toBeCalledTimes(0);
  } finally {
    spy.mockRestore();
  }
});

test('completely invalid config', () => {
  let nCall = 0;
  let spy: jest.SpyInstance;

  try {
    spy = jest.spyOn(console, 'warn').mockImplementation((message) => {
      switch (++nCall) {
        case 1:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config destination, got: 123, expected string. \\"./src/gqless/index.ts\\" used instead."`
          );
          break;
        case 2:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config endpoint, got: 123, expected string. \\"/api/graphql\\" used instead."`
          );
          break;
        case 3:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config enumsAsStrings, got: null, expected boolean. false used instead."`
          );
          break;
        case 4:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config introspection.headers, got: {\\"hello\\":null}, expected \\"object of strings\\". {} used instead."`
          );
          break;
        case 5:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config introspection.endpoint, got: null, expected string. \\"SPECIFY_ENDPOINT_OR_SCHEMA_FILE_PATH_HERE\\" used instead."`
          );
          break;
        case 6:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid and unused config property \\"introspection.other\\": {\\"headers\\":{\\"hello\\":null},\\"endpoint\\":null,\\"other\\":123}"`
          );
          break;

        case 7:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config javascriptOutput, got: null, expected boolean. false used instead."`
          );
          break;
        case 8:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config preImport, got: 123, expected string. \\"\\" used instead."`
          );
          break;

        case 9:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config react, got: null, expected boolean. true used instead."`
          );
          break;

        case 10:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config scalars, got: {\\"DateTime\\":123}, expected \\"object of strings\\". {\\"DateTime\\":\\"string\\"} used instead."`
          );
          break;

        case 11:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config subscriptions, got: 123, expected boolean. false used instead."`
          );
          break;
        case 12:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid and unused config property \\"other\\": null"`
          );
          break;
        case 13:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config introspection, got: null, expected object. {\\"endpoint\\":\\"SPECIFY_ENDPOINT_OR_SCHEMA_FILE_PATH_HERE\\",\\"headers\\":{}} used instead."`
          );
          break;
        case 14:
          expect(message).toMatchInlineSnapshot(
            `"Warning, invalid config introspection.headers, got: null, expected \\"object of strings\\". {} used instead."`
          );
          break;
        case 15:
          expect(message).toMatchInlineSnapshot(`
            "Invalid config, using instead: {
              \\"endpoint\\": \\"/api/graphql\\",
              \\"enumsAsStrings\\": false,
              \\"react\\": true,
              \\"scalars\\": {
                \\"DateTime\\": \\"string\\"
              },
              \\"preImport\\": \\"\\",
              \\"introspection\\": {
                \\"endpoint\\": \\"SPECIFY_ENDPOINT_OR_SCHEMA_FILE_PATH_HERE\\",
                \\"headers\\": {}
              },
              \\"destination\\": \\"./src/gqless/index.ts\\",
              \\"subscriptions\\": false,
              \\"javascriptOutput\\": false
            }"
          `);
          break;
        default:
          throw Error('More warnings than expected');
      }
    });
    getValidConfig({
      destination: 123,
      endpoint: 123,
      enumsAsStrings: null,
      introspection: {
        headers: {
          hello: null,
        },
        endpoint: null,
        other: 123,
      },
      javascriptOutput: null,
      preImport: 123,
      react: null,
      scalars: {
        DateTime: 123,
      },
      subscriptions: 123,
      other: null,
    });

    getValidConfig({
      introspection: null,
      destination: undefined,
    });

    getValidConfig({
      introspection: {
        endpoint: undefined,
        headers: null,
      },
    });

    getValidConfig(null);

    expect(spy).toBeCalledTimes(15);
  } finally {
    spy!.mockRestore();
  }
});
