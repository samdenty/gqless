import { promises } from 'fs';
import { resolve } from 'path';
import { Boolean, Partial, Static, String, Unknown } from 'runtypes';

import type { GenerateOptions } from './generate';
import type { IntrospectionOptions } from './introspection';

type GqlessCombinedOptions = GenerateOptions & {
  /**
   * Introspection options
   */
  introspection?: IntrospectionOptions;
  /**
   * Client generation destination
   */
  destination?: string;
};

export type GqlessConfig = Required<
  Static<typeof gqlessCLIConfigRecord>
> extends Required<GqlessCombinedOptions>
  ? GqlessCombinedOptions
  : never;

const StringRecord = Unknown.withConstraint<Record<string, string>>(
  (scalars) => {
    return (
      typeof scalars === 'object' &&
      scalars != null &&
      !Array.isArray(scalars) &&
      Object.values(scalars).every((v) => typeof v === 'string')
    );
  }
);

const gqlessCLIConfigRecord = Partial({
  endpoint: String,
  enumsAsStrings: Boolean,
  scalars: StringRecord,
  react: Boolean,
  preImport: String,
  introspection: Partial({
    endpoint: String,
    headers: StringRecord,
  }),
  destination: String,
  subscriptions: Boolean,
});

export const defaultConfig = {
  endpoint: '/api/graphql',
  enumsAsStrings: false,
  react: true,
  scalars: {
    DateTime: 'string',
  },
  preImport: '',
  introspection: {
    endpoint: 'SPECIFY_ENDPOINT_OR_SCHEMA_FILE_PATH_HERE',
    headers: {},
  } as IntrospectionOptions,
  destination: './src/gqless/index.ts',
  subscriptions: false,
};

const defaultFilePath = resolve(process.cwd(), 'gqless.config.cjs');

type DeepReadonly<T> = T extends (infer R)[]
  ? DeepReadonlyArray<R>
  : T extends Function
  ? T
  : T extends object
  ? DeepReadonlyObject<T>
  : T;

interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

const defaultGqlessConfig = {
  filepath: defaultFilePath,
  config: defaultConfig,
};

export const gqlessConfigPromise: Promise<{
  filepath: string;
  config: DeepReadonly<GqlessConfig>;
}> = new Promise(async (resolve) => {
  if (process.env.NODE_ENV === 'test') {
    setTimeout(() => {
      resolve(defaultGqlessConfig);
    }, 10);
  } else {
    /* istanbul ignore next */
    import('cosmiconfig')
      .then(({ cosmiconfig }) => {
        cosmiconfig('gqless', {
          searchPlaces: [
            'gqless.config.cjs',
            'gqless.config.js',
            'package.json',
          ],
        })
          .search()
          .then(async (config) => {
            if (!config || config.isEmpty) {
              const filepath = config?.filepath || defaultFilePath;

              const NODE_ENV = process.env['NODE_ENV'];

              if (NODE_ENV !== 'test' && NODE_ENV !== 'production') {
                const { format } = (await import('./prettier')).formatPrettier({
                  parser: 'typescript',
                });
                await promises.writeFile(
                  defaultFilePath,
                  await format(`
      /**
       * @type {import("@gqless/cli").GqlessConfig}
       */
      const config = ${JSON.stringify(defaultConfig)};
      
      module.exports = config;`)
                );
              }
              return resolve({
                filepath,
                config: defaultConfig,
              });
            }
            resolve({
              config: gqlessCLIConfigRecord.check(config.config),
              filepath: config.filepath,
            });
          })
          .catch(() => defaultGqlessConfig);
      })
      .catch(() => defaultGqlessConfig);
  }
});
