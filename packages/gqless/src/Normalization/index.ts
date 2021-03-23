import { CacheType } from '../Cache';
import { EventHandler } from '../Events';
import { parseSchemaType, ScalarsEnumsHash, Schema, Type } from '../Schema';
import { Selection } from '../Selection';
import {
  deepAssign,
  DeepPartial,
  isObject,
  isObjectWithType,
  mergeWith,
  ObjectWithType,
  PlainObject,
} from '../Utils';

type MakeTypenamesNonNullable<Obj extends { __typename?: string | null }> = {
  [K in keyof Obj]: K extends '__typename' ? NonNullable<Obj[K]> : Obj[K];
};

export interface NormalizationOptions<
  ObjectTypesNames extends string = never,
  ObjectTypes extends {
    [P in ObjectTypesNames]: {
      __typename: P | undefined;
    };
  } = never
> {
  /**
   * ### Custom object identifier.
   *
   * It gives an incoming object with it's ___typename_ and it should return:
   *
   * - A __string__ if successfully identified
   * - '__null__' if it shouldn't be normalized
   * - Or '__undefined__', to fallback to either default or custom keyFields
   *
   * @example
   * identifier(obj) {
   *   switch (obj.__typename) {
   *    case "User": {
   *      if (obj.email) {
   *         return `${obj.__typename}${obj.email}`
   *      }
   *      return null;
   *    }
   *    default: {
   *      return;
   *    }
   *  }
   * }
   *
   */
  identifier?: (
    obj: MakeTypenamesNonNullable<DeepPartial<ObjectTypes[ObjectTypesNames]>>
  ) => string | null | undefined | void;
  /**
   * ### Auto-fetch & object identifier customization
   *
   * Keep in mind that `gqless` already checks your schema and looks for the fields **id** or **__id**
   * and it add thems **automatically**.
   *
   * Set the __id's__ of any object type in your schema.
   *
   * __IMPORTANT__: Please make sure to only put [`Scalars`](https://graphql.org/learn/schema/#scalar-types)
   * without any variable needed as keyFields
   *
   * @example
   * keyFields: {
   *    User: ["email"]
   * }
   */
  keyFields?: {
    [P in ObjectTypesNames]?:
      | Array<Exclude<keyof ObjectTypes[P], '__typename'>>
      | null
      | undefined;
  };
}

function toString(v: unknown): string | null {
  switch (typeof v) {
    case 'string':
      return v;
    case 'number':
    case 'bigint':
      return v + '';
    case 'boolean':
      return v ? '1' : '0';
    case 'object':
      return v && JSON.stringify(v);
    default:
      return null;
  }
}

export interface NormalizationHandler {
  getId: (obj: ObjectWithType) => string | undefined | null;
  getCacheFromSelection: <Value, NotFound>(
    selection: Selection,
    notFoundValue: NotFound,
    cache: CacheType
  ) => Value | NotFound;
  scanNormalizedObjects: (obj: object) => void;
  normalizedCache: Record<string, PlainObject | undefined>;
  onObjectMergeConflict: (
    currentValue: object,
    incomingValue: object
  ) => object | void;
  schemaKeys: Record<string, string[] | null | undefined>;
}

export function createNormalizationHandler(
  options:
    | NormalizationOptions<string, Record<string, any>>
    | undefined
    | boolean,
  eventHandler: EventHandler,
  schema: Readonly<Schema>,
  scalarsEnumsHash: ScalarsEnumsHash
): NormalizationHandler | undefined {
  if (!options) return;

  const { identifier, keyFields } = isObject(options)
    ? options
    : ({} as NormalizationOptions);

  const schemaKeys: Record<string, string[] | null | undefined> = keyFields
    ? Object.assign({}, keyFields)
    : {};

  const idSchemaKey: ['id'] = ['id'];
  const _idSchemaKey: ['_id'] = ['_id'];

  function addIdIfValid(
    idKey: string,
    typeName: string,
    schemaType: Record<string, Type>,
    idsList: string[]
  ) {
    const type = schemaType[idKey] as Type | undefined;
    if (!type || type.__args) return;

    const { pureType, isArray } = parseSchemaType(type.__type);
    if (isArray || !scalarsEnumsHash[pureType]) return;

    schemaKeys[typeName] = idsList;

    return true;
  }

  for (const [typeName, schemaType] of Object.entries(schema)) {
    const existingKeyFields = schemaKeys[typeName];
    if (
      !isObject(schemaType) ||
      Array.isArray(existingKeyFields) ||
      existingKeyFields === null ||
      typeName === 'query' ||
      typeName === 'mutation' ||
      typeName === 'subscription' ||
      !schemaType.__typename
    ) {
      continue;
    }

    addIdIfValid('id', typeName, schemaType, idSchemaKey) ||
      addIdIfValid('_id', typeName, schemaType, _idSchemaKey);
  }

  function getId(obj: ObjectWithType): string | undefined | null {
    if (identifier) {
      const result = identifier(obj as never);

      if (result !== undefined) return result;
    }

    const keys = schemaKeys[obj.__typename];

    if (!keys) return;

    let id: string = '';

    for (const key of keys) {
      if (typeof key !== 'string') continue;

      const value = toString(obj[key]);
      if (value !== null) id += value;
    }

    return id && obj.__typename + id;
  }

  const normalizedCache: Record<string, PlainObject | undefined> = {};

  const normalizedSelections = new Map<string, Set<Selection>>();

  function getCacheFromSelection<Value, NotFound>(
    selection: Selection,
    notFoundValue: NotFound,
    cache: CacheType
  ): Value | NotFound {
    let container: PlainObject | undefined;
    let containerKey: string | number | undefined;

    let currentValue: unknown = cache;

    let currentSelection: Selection;

    function getNormalized() {
      let id: string | undefined | null;
      if (isObjectWithType(currentValue) && (id = getId(currentValue))) {
        let selectionsSet = normalizedSelections.get(id);
        if (!selectionsSet) {
          selectionsSet = new Set();
          normalizedSelections.set(id, selectionsSet);
        }

        selectionsSet.add(currentSelection);

        let normalizedObject: PlainObject | undefined;

        if (
          (normalizedObject = normalizedCache[id]) &&
          normalizedObject !== currentValue
        ) {
          if (container && containerKey != null) {
            container[containerKey] = normalizedObject;
          }

          currentValue = normalizedObject;
        }
      }
    }

    for (const selectionValue of selection.selectionsList) {
      currentSelection = selectionValue;
      const key = selectionValue.alias || selectionValue.key;

      if (isObject(currentValue)) {
        getNormalized();

        //@ts-expect-error
        container = currentValue;
        containerKey = key;

        currentValue =
          //@ts-expect-error
          currentValue[key];
      } else return notFoundValue;
    }

    getNormalized();

    return currentValue === undefined ? notFoundValue : (currentValue as Value);
  }

  function scanNormalizedObjects(obj: object) {
    const pendingObjects = new Set<object>([obj]);

    for (const container of pendingObjects) {
      for (const value of Object.values(container)) {
        if (Array.isArray(value)) {
          pendingObjects.add(value);
        } else if (isObjectWithType(value)) {
          const id = getId(value);
          let data = value;
          if (id) {
            const currentValueNormalizedCache = normalizedCache[id];

            if (currentValueNormalizedCache !== value) {
              if (currentValueNormalizedCache) {
                normalizedCache[id] = data = deepAssign(
                  {},
                  [currentValueNormalizedCache, value],
                  (targetValue, sourceValue): object | void => {
                    if (
                      Array.isArray(targetValue) &&
                      Array.isArray(sourceValue) &&
                      targetValue.length !== sourceValue.length
                    ) {
                      return sourceValue;
                    }
                  }
                );
              } else {
                normalizedCache[id] = value;
              }

              if (eventHandler) {
                const selections = normalizedSelections.get(id);

                if (selections) {
                  for (const selection of selections) {
                    eventHandler.sendCacheChange({
                      data,
                      selection,
                    });
                  }
                }
              }
            } else continue;
          }

          pendingObjects.add(value);
        }
      }
    }
  }

  function onObjectMergeConflict(
    currentValue: object,
    incomingValue: object
  ): object | void {
    if (isObjectWithType(incomingValue) && isObjectWithType(currentValue)) {
      const idNewValue = getId(incomingValue);
      if (!idNewValue) return;

      const idCurrentValue = getId(currentValue);

      if (idNewValue === idCurrentValue) {
        const currentObject = normalizedCache[idNewValue];

        if (currentObject !== incomingValue) {
          return (normalizedCache[idNewValue] = mergeWith(
            {},
            currentObject,
            incomingValue,
            onObjectMergeConflict
          ));
        }
        return incomingValue;
      }
    }
  }

  return {
    getId,
    getCacheFromSelection,
    scanNormalizedObjects,
    normalizedCache,
    onObjectMergeConflict,
    schemaKeys,
  };
}
