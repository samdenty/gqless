import { existsSync } from 'fs';
import { promises } from 'fs';
import { buildSchema, GraphQLSchema } from 'graphql';
import { resolve } from 'path';

import { defaultConfig, gqlessConfigPromise } from './config';

import type { GenerateOptions } from './generate';

export async function inspectWriteGenerate({
  endpoint,
  destination,
  generateOptions,
  cli,
  headers,
}: {
  /**
   * GraphQL API endpoint or GraphQL Schema file
   *
   * @example 'http://localhost:3000/graphql'
   * @example './schema.gql'
   */
  endpoint?: string;
  /**
   * File path destination
   * @example './src/gqless/index.ts'
   */
  destination?: string;
  /**
   * Specify generate options
   */
  generateOptions?: GenerateOptions;
  /**
   * Whether it's being called through the CLI
   */
  cli?: boolean;
  /**
   * Specify headers for the introspection HTTP request
   */
  headers?: Record<string, string>;
} = {}) {
  if (destination) {
    defaultConfig.destination = destination;
  }

  if (endpoint) {
    defaultConfig.introspection.endpoint = endpoint;
  } else if (existsSync(resolve('./schema.gql'))) {
    endpoint = './schema.gql';
    defaultConfig.introspection.endpoint = endpoint;
  } else {
    const { config, filepath } = await gqlessConfigPromise;

    const configIntrospectionEndpoint =
      config.introspection && config.introspection.endpoint;

    if (
      configIntrospectionEndpoint &&
      configIntrospectionEndpoint !== defaultConfig.introspection.endpoint
    ) {
      endpoint = configIntrospectionEndpoint;
    } else {
      console.error(
        `\nPlease modify "${
          filepath.endsWith('package.json') ? 'gqless' : 'config'
        }.introspection.endpoint" in: "${filepath}".`
      );
      throw Error(
        'ERROR: No introspection endpoint specified in configuration file.'
      );
    }
  }

  if (!destination) {
    const configDestination = (await gqlessConfigPromise).config.destination;

    destination = configDestination || './src/generated/graphql.ts';
  }

  destination = resolve(destination);

  const genOptions = Object.assign({}, generateOptions);

  let schema: GraphQLSchema;

  defaultConfig.introspection.endpoint = endpoint;
  defaultConfig.introspection.headers = headers;

  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
    defaultConfig.endpoint = endpoint;

    schema = await (await import('./introspection')).getRemoteSchema(endpoint, {
      headers,
    });
  } else {
    if (existsSync(endpoint)) {
      const file = await promises.readFile(endpoint, {
        encoding: 'utf-8',
      });

      schema = buildSchema(file);
    } else {
      throw Error(
        `File "${endpoint}" doesn't exists. If you meant to inspect a GraphQL API, make sure to put http:// or https:// in front of it.`
      );
    }
  }

  const generatedPath = await (await import('./writeGenerate')).writeGenerate(
    schema,
    destination,
    genOptions,
    async (existingFile) => {
      const subscriptions =
        genOptions.subscriptions ??
        (await gqlessConfigPromise).config.subscriptions;
      const react =
        genOptions.react ?? (await gqlessConfigPromise).config.react;

      const advice =
        '\nPlease remove manually the existing file and re-run code generation.';

      if (subscriptions) {
        if (!existingFile.includes('createSubscriptionsClient')) {
          console.warn(
            '[Warning] In the existing gqless Client file "Subscriptions" was not enabled.' +
              advice
          );
        }
      }
      if (react) {
        if (!existingFile.includes('createReactClient')) {
          console.warn(
            '[Warning] In the existing gqless Client file "React" was not enabled.' +
              advice
          );
        }
      }
    }
  );

  if (cli) {
    console.log('Code generated successfully at ' + generatedPath);
  }
}
