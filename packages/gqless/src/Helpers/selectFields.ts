import { CacheNotFound } from '../Cache';
import { get, isObject, set } from '../Utils';

export function selectFields<A extends object | null | undefined>(
  accessor: A,
  fields: '*' | Array<string | number> = '*',
  recursionDepth = 1
): A {
  if (accessor == null) return accessor as A;

  if (Array.isArray(accessor)) {
    return accessor.map((value) =>
      selectFields(value, fields, recursionDepth)
    ) as A;
  }

  if (!isObject(accessor)) return accessor;

  if (fields.length === 0) {
    return {} as A;
  }

  if (typeof fields === 'string') {
    if (recursionDepth > 0) {
      const allAccessorKeys = Object.keys(accessor);
      return allAccessorKeys.reduce((acum, fieldName) => {
        const fieldValue: unknown = get(accessor, fieldName);

        if (Array.isArray(fieldValue)) {
          set(
            acum,
            fieldName,
            fieldValue.map((value) => {
              return selectFields(value, '*', recursionDepth - 1);
            })
          );
        } else if (isObject(fieldValue)) {
          set(
            acum,
            fieldName,
            selectFields(fieldValue, '*', recursionDepth - 1)
          );
        } else {
          set(acum, fieldName, fieldValue);
        }
        return acum;
      }, {} as NonNullable<A>);
    } else {
      return null as A;
    }
  }

  return fields.reduce((acum, fieldName) => {
    const fieldValue = get(accessor, fieldName, CacheNotFound);

    if (fieldValue === CacheNotFound) return acum;

    if (Array.isArray(fieldValue)) {
      set(
        acum,
        fieldName,
        fieldValue.map((value) => {
          return selectFields(value, '*', recursionDepth);
        })
      );
    } else if (isObject(fieldValue)) {
      set(acum, fieldName, selectFields(fieldValue, '*', recursionDepth));
    } else {
      set(acum, fieldName, fieldValue);
    }

    return acum;
  }, {} as NonNullable<A>);
}
