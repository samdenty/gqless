import { promises } from 'fs';
import { resolve } from 'path';
import type { GenerateOptions } from './generate';
import type { IntrospectionOptions } from './introspection';

export type GQlessConfig = Omit<GenerateOptions, 'endpoint'> & {
  /**
   * Introspection options
   */
  introspection?: IntrospectionOptions;
  /**
   * Client generation destination
   */
  destination?: string;
};

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return v != null && typeof v === 'object' && !Array.isArray(v);
}

function isStringRecord(v: unknown): v is Record<string, string> {
  return (
    isPlainObject(v) && Object.values(v).every((v) => typeof v === 'string')
  );
}

export const DUMMY_ENDPOINT = 'SPECIFY_ENDPOINT_OR_SCHEMA_FILE_PATH_HERE';

export const defaultConfig: Required<GQlessConfig> = {
  react: true,
  scalarTypes: {
    DateTime: 'string',
  },
  introspection: {
    endpoint: DUMMY_ENDPOINT,
    headers: {} as Record<string, string>,
  },
  destination: './src/gqless/index.ts',
  subscriptions: false,
  javascriptOutput: false,
  enumsAsStrings: false,
  preImport: '',
};

function warnConfig(
  fieldName: string,
  invalidValue: unknown,
  expectedValue: string,
  defaultValue: unknown
) {
  console.warn(
    `Warning, invalid config ${fieldName}, got: ${JSON.stringify(
      invalidValue
    )}, expected ${expectedValue}. ${JSON.stringify(
      defaultValue
    )} used instead.`
  );
}

export function getValidConfig(v: unknown): GQlessConfig {
  if (isPlainObject(v)) {
    const newConfig: GQlessConfig = {};

    if (typeof v.javascriptOutput === 'boolean') {
      newConfig.javascriptOutput = v.javascriptOutput;
    }

    for (const [key, value] of Object.entries(v)) {
      if (value === undefined) continue;

      switch (key) {
        case 'destination':
        case 'preImport': {
          if (typeof value === 'string') {
            newConfig[key] = value;
          } else {
            warnConfig(key, value, 'string', defaultConfig[key]);
          }

          break;
        }
        case 'javascriptOutput':
        case 'react':
        case 'subscriptions':
        case 'enumsAsStrings': {
          if (typeof value === 'boolean') {
            newConfig[key] = value;
          } else {
            warnConfig(key, value, 'boolean', defaultConfig[key]);
          }
          break;
        }
        case 'scalarTypes': {
          if (isStringRecord(value)) {
            newConfig[key] = value;
          } else {
            warnConfig(key, value, '"object of strings"', defaultConfig[key]);
          }
          break;
        }
        case 'introspection': {
          if (isPlainObject(value)) {
            const introspectionOptions: IntrospectionOptions = {};
            for (const [introspectionKey, introspectionValue] of Object.entries(
              value
            )) {
              if (introspectionValue === undefined) continue;
              switch (introspectionKey) {
                case 'endpoint': {
                  if (typeof introspectionValue === 'string') {
                    introspectionOptions[introspectionKey] = introspectionValue;
                  } else {
                    warnConfig(
                      `${key}.${introspectionKey}`,
                      introspectionValue,
                      'string',
                      defaultConfig.introspection.endpoint
                    );
                  }
                  break;
                }
                case 'headers': {
                  if (isStringRecord(introspectionValue)) {
                    introspectionOptions[introspectionKey] = introspectionValue;
                  } else {
                    warnConfig(
                      `${key}.${introspectionKey}`,
                      introspectionValue,
                      '"object of strings"',
                      defaultConfig.introspection.headers
                    );
                  }
                  break;
                }
                default: {
                  console.warn(
                    `Warning, invalid and unused config property "${key}.${introspectionKey}": ${JSON.stringify(
                      value
                    )}`
                  );
                }
              }
            }

            newConfig[key] = introspectionOptions;
          } else {
            warnConfig(key, value, 'object', defaultConfig[key]);
          }
          break;
        }
        default:
          console.warn(
            `Warning, invalid and unused config property "${key}": ${JSON.stringify(
              value
            )}`
          );
      }
    }

    return newConfig;
  } else {
    console.warn(
      'Invalid config, using instead: ' + JSON.stringify(defaultConfig, null, 2)
    );
    return defaultConfig;
  }
}

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

const defaultGQlessConfig = {
  filepath: defaultFilePath,
  config: defaultConfig,
};

export const gqlessConfigPromise: Promise<{
  filepath: string;
  config: DeepReadonly<GQlessConfig>;
}> = new Promise(async (resolve) => {
  /* istanbul ignore else */
  if (process.env.NODE_ENV === 'test') {
    setTimeout(() => {
      resolve(defaultGQlessConfig);
    }, 10);
  } else {
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

                const config: GQlessConfig = { ...defaultConfig };
                delete config.preImport;
                delete config.enumsAsStrings;

                await promises.writeFile(
                  defaultFilePath,
                  await format(`
                    /**
                     * @type {import("@gqless/cli").GQlessConfig}
                     */
                    const config = ${JSON.stringify(config)};
                    
                    module.exports = config;`)
                );
              }
              return resolve({
                filepath,
                config: defaultConfig,
              });
            }

            resolve({
              config: getValidConfig(config.config),
              filepath: config.filepath,
            });
          })
          .catch(() => defaultGQlessConfig);
      })
      .catch(() => defaultGQlessConfig);
  }
});
