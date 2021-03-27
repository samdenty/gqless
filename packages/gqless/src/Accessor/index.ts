import { CacheNotFound, ProxyAccessor } from '../Cache';
import { InnerClientState } from '../Client/client';
import { gqlessError } from '../Error';
import {
  DeepPartial,
  parseSchemaType,
  Schema,
  SchemaUnionsKey,
  Type,
} from '../Schema';
import { Selection, SelectionType } from '../Selection';
import {
  decycle,
  isInteger,
  isObject,
  isObjectWithType,
  retrocycle,
} from '../Utils';

const ProxySymbol = Symbol('gqless-proxy');

export class SchemaUnion {
  /** union name */
  name!: string;
  types!: Record<
    /** object type name */
    string,
    /** schema type of object type */
    Record<string, Type>
  >;
  /**
   * Proxy target, pre-made for performance
   */
  fieldsProxy!: Record<string, typeof ProxySymbol>;
  fieldsMap!: Record<
    /** field name */
    string,
    /** list of object types (with it's schema type)
     * that has the field name */
    {
      list: { objectTypeName: string; type: Record<string, Type> }[];
      typesNames: string[];
      combinedTypes: Record<string, Type>;
    }
  >;
  combinedTypes!: Record<string, Type>;
}

export type SchemaUnions = {
  unions: Record<string, SchemaUnion>;
  unionObjectTypesForSelections: Record<string, [string]>;
};

export function createSchemaUnions(schema: Readonly<Schema>): SchemaUnions {
  const unionObjectTypesForSelections: Record<string, [string]> = {};

  const unions = Object.entries(
    schema[SchemaUnionsKey] /* istanbul ignore next */ || {}
  ).reduce((acum, [name, unionTypes]) => {
    const fieldsSet = new Set<string>();
    const fieldsMap: SchemaUnion['fieldsMap'] = {};

    const combinedTypes: Record<string, Type> = {};

    const types = unionTypes.reduce((typeAcum, objectTypeName) => {
      unionObjectTypesForSelections[objectTypeName] ||= [objectTypeName];
      const objectType = schema[objectTypeName];
      /* istanbul ignore else */
      if (objectType) {
        for (const objectTypeFieldName of Object.keys(objectType)) {
          fieldsMap[objectTypeFieldName] ||= {
            list: [],
            typesNames: [],
            combinedTypes: {},
          };
          fieldsMap[objectTypeFieldName].list.push({
            type: objectType,
            objectTypeName,
          });
          Object.assign(
            fieldsMap[objectTypeFieldName].combinedTypes,
            objectType
          );
          Object.assign(combinedTypes, objectType);
          fieldsSet.add(objectTypeFieldName);
        }

        typeAcum[objectTypeName] = objectType;
      }
      return typeAcum;
    }, {} as SchemaUnion['types']);

    for (const fieldMapValue of Object.values(fieldsMap)) {
      fieldMapValue.typesNames = fieldMapValue.list.map(
        (v) => v.objectTypeName
      );
    }

    acum[name] = Object.assign(new SchemaUnion(), {
      name,
      types,
      fieldsProxy: Array.from(fieldsSet).reduce((fieldsAcum, fieldName) => {
        fieldsAcum[fieldName] = ProxySymbol;
        return fieldsAcum;
      }, {} as SchemaUnion['fieldsProxy']),
      fieldsMap,
      combinedTypes,
    });

    return acum;
  }, {} as Record<string, SchemaUnion>);

  return {
    unions,
    unionObjectTypesForSelections,
  };
}

export interface SetCache {
  (selection: Selection, data: unknown): void;
  <A extends object>(
    accessor: A,
    data: DeepPartial<A> | null | undefined
  ): void;
  <B extends (args?: any) => unknown>(
    accessor: B,
    args: Parameters<B>['0'],
    data: DeepPartial<ReturnType<B>> | null | undefined
  ): void;
}

export interface AssignSelections {
  <A extends object, B extends A>(
    source: A | null | undefined,
    target: B | null | undefined
  ): void;
}

export interface AccessorCreators<
  GeneratedSchema extends {
    query: {};
    mutation: {};
    subscription: {};
  }
> {
  createAccessor: (
    schemaValue: Schema[string] | SchemaUnion,
    prevSelection: Selection,
    unions?: string[] | undefined,
    parentTypename?: string | undefined
  ) => ProxyAccessor | null;
  createArrayAccessor: (
    schemaValue: Schema[string] | SchemaUnion,
    prevSelection: Selection,
    unions?: string[] | undefined,
    parentTypename?: string | undefined
  ) => ProxyAccessor | null;
  assignSelections: AssignSelections;
  setCache: SetCache;
  query: GeneratedSchema['query'];
  mutation: GeneratedSchema['mutation'];
  subscription: GeneratedSchema['subscription'];
}

export function createAccessorCreators<
  GeneratedSchema extends {
    query: {};
    mutation: {};
    subscription: {};
  } = never
>(innerState: InnerClientState): AccessorCreators<GeneratedSchema> {
  const {
    accessorCache,
    selectionManager,
    interceptorManager,
    scalarsEnumsHash,
    schema,
    eventHandler,
    schemaUnions: { unions: schemaUnions, unionObjectTypesForSelections },
    clientCache: schedulerClientCache,
    scheduler: {
      errors: { map: schedulerErrorsMap },
    },
    normalizationHandler,
  } = innerState;

  const ResolveInfoSymbol = Symbol();

  interface ResolveInfo {
    key: string | number;
    prevSelection: Selection;
    argTypes: Record<string, string> | undefined;
  }

  const proxySymbolArray = [ProxySymbol];

  function extractDataFromProxy(value: unknown): unknown {
    if (accessorCache.isProxy(value)) {
      const accessorSelection = accessorCache.getProxySelection(value);

      // An edge case hard to reproduce
      /* istanbul ignore if */
      if (!accessorSelection) return;

      const selectionCache = innerState.clientCache.getCacheFromSelection(
        accessorSelection
      );

      if (selectionCache === CacheNotFound) return;

      return selectionCache;
    } else if (isObject(value)) {
      /**
       * This is necessary to be able to extract data from proxies
       * inside user-made objects and arrays
       */
      return retrocycle<object>(JSON.parse(JSON.stringify(value)));
    }
    return value;
  }

  function setCache(selection: Selection, data: unknown): void;
  function setCache<A extends object>(
    accessor: A,
    data: DeepPartial<A> | null | undefined
  ): void;
  function setCache<B extends (args?: any) => unknown>(
    accessor: B,
    args: Parameters<B>['0'],
    data: DeepPartial<ReturnType<B>> | null | undefined
  ): void;
  function setCache(
    accessorOrSelection: unknown,
    dataOrArgs: unknown,
    possibleData?: unknown
  ) {
    if (accessorOrSelection instanceof Selection) {
      const data = extractDataFromProxy(dataOrArgs);
      innerState.clientCache.setCacheFromSelection(accessorOrSelection, data);
      eventHandler.sendCacheChange({
        data,
        selection: accessorOrSelection,
      });
    } else if (typeof accessorOrSelection === 'function') {
      if (dataOrArgs !== undefined && typeof dataOrArgs !== 'object') {
        throw new gqlessError(
          'Invalid arguments of type: ' + typeof dataOrArgs,
          {
            caller: setCache,
          }
        );
      }

      const resolveInfo = (accessorOrSelection as Function & {
        [ResolveInfoSymbol]?: ResolveInfo;
      })[ResolveInfoSymbol];

      if (!resolveInfo) {
        throw new gqlessError('Invalid gqless function', {
          caller: setCache,
        });
      }

      const selection = selectionManager.getSelection({
        ...resolveInfo,
        args: dataOrArgs as Record<string, unknown>,
      });

      const data = extractDataFromProxy(possibleData);

      innerState.clientCache.setCacheFromSelection(selection, data);
      eventHandler.sendCacheChange({
        data,
        selection,
      });
    } else if (accessorCache.isProxy(accessorOrSelection)) {
      const selection = accessorCache.getProxySelection(accessorOrSelection);

      // An edge case hard to reproduce
      /* istanbul ignore if */
      if (!selection) {
        throw new gqlessError('Invalid proxy selection', {
          caller: setCache,
        });
      }

      const data = extractDataFromProxy(dataOrArgs);

      innerState.clientCache.setCacheFromSelection(selection, data);
      eventHandler.sendCacheChange({
        data,
        selection,
      });
    } else {
      throw new gqlessError('Invalid gqless proxy', {
        caller: setCache,
      });
    }
  }

  function createArrayAccessor(
    schemaValue: Schema[string] | SchemaUnion,
    prevSelection: Selection,
    unions?: string[],
    parentTypename?: string
  ) {
    const arrayCacheValue = innerState.clientCache.getCacheFromSelection<
      undefined | null | unknown[]
    >(prevSelection);
    if (innerState.allowCache && arrayCacheValue === null) return null;

    const proxyValue: unknown[] =
      arrayCacheValue === CacheNotFound || !Array.isArray(arrayCacheValue)
        ? proxySymbolArray
        : arrayCacheValue;

    const accessor = accessorCache.getArrayAccessor(
      prevSelection,
      proxyValue,
      () => {
        return new Proxy(proxyValue, {
          set(_target, key: string, value: unknown) {
            let index: number | undefined;

            try {
              index = parseInt(key);
            } catch (err) {}

            if (isInteger(index)) {
              const selection = selectionManager.getSelection({
                key: index,
                prevSelection,
              });

              const data = extractDataFromProxy(value);

              innerState.clientCache.setCacheFromSelection(selection, data);

              eventHandler.sendCacheChange({
                selection,
                data,
              });

              return true;
            }

            if (key === 'length') {
              if (!Array.isArray(arrayCacheValue)) {
                console.warn(
                  'Invalid array assignation to unresolved proxy array'
                );
                return true;
              }

              Reflect.set(arrayCacheValue, key, value);

              eventHandler.sendCacheChange({
                selection: prevSelection,
                data: innerState.clientCache.getCacheFromSelection(
                  prevSelection
                ),
              });
              return true;
            }

            throw TypeError('Invalid array assignation: ' + key);
          },
          get(target, key: string, receiver) {
            if (key === 'length') {
              if (proxyValue === proxySymbolArray) {
                const lengthSelection = selectionManager.getSelection({
                  key: 0,
                  prevSelection,
                });
                const childAccessor = createAccessor(
                  schemaValue,
                  lengthSelection,
                  unions,
                  parentTypename
                );

                accessorCache.addAccessorChild(accessor, childAccessor);

                if (childAccessor) Reflect.get(childAccessor, '__typename');
              }

              return target.length;
            } else if (key === 'toJSON') {
              return () =>
                decycle<unknown[]>(
                  innerState.clientCache.getCacheFromSelection(
                    prevSelection,
                    []
                  )
                );
            }

            let index: number | undefined;

            try {
              index = parseInt(key);
            } catch (err) {}

            if (isInteger(index)) {
              const selection = selectionManager.getSelection({
                key: index,
                prevSelection,
              });

              // For the subscribers of data changes
              interceptorManager.addSelectionCache(selection);

              if (
                innerState.allowCache &&
                arrayCacheValue !== CacheNotFound &&
                arrayCacheValue?.[index] == null
              ) {
                /**
                 * If cache is enabled and arrayCacheValue[index] is 'null' or 'undefined', return it
                 */
                return arrayCacheValue?.[index];
              }

              const childAccessor = createAccessor(
                schemaValue,
                selection,
                unions,
                parentTypename
              );

              accessorCache.addAccessorChild(accessor, childAccessor);

              return childAccessor;
            }

            return Reflect.get(target, key, receiver);
          },
        });
      }
    );

    return accessor;
  }

  const notFoundObjectKey = {};
  const nullObjectKey = {};

  const unionsCacheValueMap = new WeakMap<string[], WeakMap<object, object>>();

  function getCacheValueReference(
    cacheValue: unknown,
    unions: string[] | undefined
  ) {
    if (unions === undefined) return cacheValue;

    const mapKey: object =
      cacheValue == null
        ? nullObjectKey
        : typeof cacheValue === 'object'
        ? cacheValue!
        : notFoundObjectKey;

    let cacheValueMap = unionsCacheValueMap.get(unions);

    if (!cacheValueMap) {
      cacheValueMap = new WeakMap();
      cacheValueMap.set(unions, mapKey);
    }

    let cacheReference = cacheValueMap.get(mapKey);

    if (!cacheReference) {
      cacheReference = {};
      cacheValueMap.set(mapKey, cacheReference);
    }

    return cacheReference;
  }

  function getTypename(selection: Selection): string | void {
    const cacheValue: unknown = innerState.clientCache.getCacheFromSelection(
      selection
    );

    if (isObjectWithType(cacheValue)) return cacheValue.__typename;

    interceptorManager.addSelection(
      selectionManager.getSelection({
        key: '__typename',
        prevSelection: selection,
      })
    );
  }

  const emptyScalarArray = Object.freeze([]);

  const querySelection = selectionManager.getSelection({
    key: 'query',
    type: SelectionType.Query,
  });

  const mutationSelection = selectionManager.getSelection({
    key: 'mutation',
    type: SelectionType.Mutation,
  });

  const subscriptionSelection = selectionManager.getSelection({
    key: 'subscription',
    type: SelectionType.Subscription,
  });

  function createAccessor(
    schemaValue: Schema[string] | SchemaUnion,
    prevSelection: Selection,
    unions?: string[],
    parentTypename?: string
  ) {
    let cacheValue: unknown = innerState.clientCache.getCacheFromSelection(
      prevSelection
    );
    if (innerState.allowCache && cacheValue === null) return null;

    const accessor = accessorCache.getAccessor(
      prevSelection,
      getCacheValueReference(cacheValue, unions),
      () => {
        const autoFetchKeys =
          normalizationHandler && (parentTypename || unions)
            ? () => {
                if (unions) {
                  const schemaKeys = normalizationHandler.schemaKeys;

                  for (const objectTypeName of unions) {
                    const objectNormalizationKeys = schemaKeys[objectTypeName];
                    if (objectNormalizationKeys) {
                      for (const key of objectNormalizationKeys) {
                        interceptorManager.addSelection(
                          selectionManager.getSelection({
                            key,
                            prevSelection,
                            unions: unionObjectTypesForSelections[
                              objectTypeName
                            ] || [objectTypeName],
                          })
                        );
                      }
                    }
                  }
                } else if (parentTypename) {
                  const normalizationKeys =
                    normalizationHandler.schemaKeys[parentTypename];
                  if (normalizationKeys) {
                    for (const key of normalizationKeys) {
                      interceptorManager.addSelection(
                        selectionManager.getSelection({
                          key,
                          prevSelection,
                        })
                      );
                    }
                  }
                }
              }
            : undefined;

        const proxyValue =
          schemaValue instanceof SchemaUnion
            ? schemaValue.fieldsProxy
            : Object.keys(schemaValue).reduce((acum, key) => {
                acum[key] = ProxySymbol;
                return acum;
              }, {} as Record<string, unknown>);
        return new Proxy(proxyValue, {
          set(_target, key: string, value: unknown) {
            if (!proxyValue.hasOwnProperty(key))
              throw TypeError('Invalid proxy assignation');

            const targetSelection = selectionManager.getSelection({
              key,
              prevSelection,
              unions,
            });

            const data = extractDataFromProxy(value);

            innerState.clientCache.setCacheFromSelection(targetSelection, data);
            eventHandler.sendCacheChange({
              data,
              selection: targetSelection,
            });

            return true;
          },
          get(target, key: string, receiver) {
            if (key === 'toJSON')
              return () =>
                decycle<{}>(
                  innerState.clientCache.getCacheFromSelection(
                    prevSelection,
                    {}
                  )
                );

            if (!proxyValue.hasOwnProperty(key))
              return Reflect.get(target, key, receiver);

            if (schemaValue instanceof SchemaUnion) {
              let unionTypeName = getTypename(prevSelection);

              let objectType: Record<string, Type>;

              let selectionUnions: string[];

              if (unionTypeName) {
                objectType = schemaValue.types[unionTypeName];
                selectionUnions = unionObjectTypesForSelections[
                  unionTypeName
                ] /* istanbul ignore next */ || [unionTypeName];
              } else {
                // TODO: Long term fix, this doesn't work if there is fields types/naming conflicts
                ({
                  combinedTypes: objectType,
                  typesNames: selectionUnions,
                } = schemaValue.fieldsMap[key]);
              }

              const proxy = createAccessor(
                objectType,
                prevSelection,
                selectionUnions,
                parentTypename
              );

              return proxy && Reflect.get(proxy, key);
            } else {
              const { __type, __args } = schemaValue[key];
              const { pureType, isArray } = parseSchemaType(__type);

              const resolve = (args?: {
                argValues: Record<string, unknown>;
                argTypes: Record<string, string>;
              }): unknown => {
                const selection = selectionManager.getSelection({
                  key,
                  prevSelection,
                  args: args != null ? args.argValues : undefined,
                  argTypes: args != null ? args.argTypes : undefined,
                  unions,
                });

                // For the subscribers of data changes
                interceptorManager.addSelectionCache(selection);

                if (scalarsEnumsHash[pureType]) {
                  const cacheValue = innerState.clientCache.getCacheFromSelection(
                    selection
                  );

                  accessorCache.addSelectionToAccessorHistory(
                    accessor,
                    selection
                  );

                  if (cacheValue === CacheNotFound) {
                    innerState.foundValidCache = false;

                    /**
                     * If cache was not found & the selection doesn't have errors,
                     * add the selection to the queue
                     */
                    if (
                      // SelectionType.Subscription === 2
                      selection.type === 2 ||
                      schedulerClientCache !== innerState.clientCache ||
                      !schedulerErrorsMap.has(selection)
                    ) {
                      autoFetchKeys?.();

                      interceptorManager.addSelection(selection);
                    }

                    return isArray ? emptyScalarArray : undefined;
                  } else if (!innerState.allowCache || selection.type === 2) {
                    autoFetchKeys?.();

                    // Or if you are making the network fetch always
                    interceptorManager.addSelection(selection);
                  } else {
                    // Support cache-and-network / stale-while-revalidate pattern
                    interceptorManager.addSelectionCacheRefetch(selection);
                  }

                  return cacheValue;
                }

                const typeValue: Record<string, Type> | SchemaUnion =
                  schema[pureType] || schemaUnions[pureType];

                if (typeValue) {
                  const childAccessor = (isArray
                    ? createArrayAccessor
                    : createAccessor)(
                    typeValue,
                    selection,
                    undefined,
                    pureType
                  );

                  accessorCache.addAccessorChild(accessor, childAccessor);

                  return childAccessor;
                }

                throw new gqlessError(
                  `GraphQL Type not found: ${pureType}, available fields: "${Object.keys(
                    schemaValue
                  ).join(' | ')}"`
                );
              };

              if (__args) {
                const resolveInfo: ResolveInfo = {
                  key,
                  prevSelection,
                  argTypes: __args,
                };

                return Object.assign(
                  function ProxyFn(argValues: Record<string, unknown> = {}) {
                    return resolve({
                      argValues,
                      argTypes: __args,
                    });
                  },
                  {
                    [ResolveInfoSymbol]: resolveInfo,
                  }
                );
              }

              return resolve();
            }
          },
        });
      }
    );
    return accessor;
  }

  const query: GeneratedSchema['query'] = createAccessor(
    schema.query,
    querySelection
  )!;
  const mutation: GeneratedSchema['mutation'] = createAccessor(
    schema.mutation,
    mutationSelection
  )!;
  const subscription: GeneratedSchema['subscription'] = createAccessor(
    schema.subscription,
    subscriptionSelection
  )!;

  function assignSelections<A extends object, B extends A>(
    source: A | null | undefined,
    target: B | null | undefined
  ): void {
    if (source == null || target == null) return;

    let sourceSelection: Selection;
    let targetSelection: Selection;

    if (
      !accessorCache.isProxy(source) ||
      !(sourceSelection = accessorCache.getProxySelection(source)!)
    )
      throw new gqlessError('Invalid source proxy', {
        caller: assignSelections,
      });
    if (
      !accessorCache.isProxy(target) ||
      !(targetSelection = accessorCache.getProxySelection(target)!)
    )
      throw new gqlessError('Invalid target proxy', {
        caller: assignSelections,
      });

    const sourceSelections = accessorCache.getSelectionSetHistory(source);

    if (!sourceSelections) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn("Source proxy doesn't have any selections made");
      }
      return;
    }

    for (const selection of sourceSelections) {
      let mappedSelection = targetSelection;
      const filteredSelections = selection.selectionsList.filter(
        (value) => !sourceSelection.selectionsList.includes(value)
      );

      for (const { key, args, argTypes } of filteredSelections) {
        mappedSelection = selectionManager.getSelection({
          key,
          args,
          argTypes,
          prevSelection: mappedSelection,
        });
      }

      accessorCache.addSelectionToAccessorHistory(target, mappedSelection);
      interceptorManager.addSelection(mappedSelection);
    }
  }

  return {
    createAccessor,
    createArrayAccessor,
    assignSelections,
    setCache,
    query,
    mutation,
    subscription,
  };
}
