import { isObject } from '../Utils';

function getFirstNonNullValue<T>(list: T[]): T | void {
  for (const value of list) if (value != null) return value;
}

export interface PrepassObjKey {
  field: string;
  variables?: Record<string, unknown>;
}

export function prepass<T extends object | null | undefined>(
  v: T,
  ...keys: Array<string | Array<string | PrepassObjKey>>
): T {
  if (v == null) return v;

  for (const composedKeys of keys) {
    const separatedKeys =
      typeof composedKeys === 'string' ? composedKeys.split('.') : composedKeys;

    let obj: unknown = v;
    for (const key of separatedKeys) {
      if (obj && key) {
        let property = typeof key === 'object' ? key.field : key;
        let variables = typeof key === 'object' ? key.variables : undefined;

        if (Array.isArray(obj)) {
          const firstNonNull = getFirstNonNullValue(obj);
          if (firstNonNull) {
            obj = firstNonNull;
          } else break;
        }

        if (isObject(obj)) {
          if (property in obj) {
            const value: unknown =
              //@ts-expect-error
              obj[property];

            if (typeof value === 'function') {
              obj = value(variables);
            } else {
              obj = value;
            }
          } else break;
        } else break;
      } else break;
    }
  }

  return v;
}
