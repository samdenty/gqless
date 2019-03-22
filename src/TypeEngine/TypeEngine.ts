import {
  Schema,
  SchemaType,
  SchemaField,
  SchemaFieldType,
  SchemaFieldList,
  SchemaFieldRef,
} from './Schema'

const engineCache = new WeakMap<Schema, TypeEngine>()

export type LookupResult = ReturnType<TypeEngine['lookupPath']>

export class TypeEngine {
  constructor(public schema: Schema) {
    if (engineCache.has(schema)) return engineCache.get(schema)

    engineCache.set(schema, this)
  }

  public lookupType(type: string) {
    return this.schema.types[type]
  }

  public resolveListType(field: SchemaField) {
    let type = field.type
    while ((type as SchemaFieldList).ofType) {
      type = (type as SchemaFieldList).ofType
    }

    return (type as SchemaFieldRef).name
  }

  public lookupPath(paths: string[]) {
    const root = this.schema.types[paths[0]]
    paths.shift()
    if (!root) return null

    let currentType: SchemaType = root
    let currentField: SchemaField
    let currentFieldType: SchemaFieldType

    for (const path of paths) {
      if (currentFieldType && currentFieldType.kind === 'LIST') {
        // If the path is an index, skip it
        currentFieldType = currentFieldType.ofType
        currentField = null
        if (!isNaN(path as any)) continue
      }

      const validField =
        currentType.fields && currentType.fields.hasOwnProperty(path)
      if (!validField) return null

      const field = currentType.fields[path]

      currentFieldType = field.type
      currentField = field
      currentType = this.schema.types[this.resolveListType(field)]
    }

    return {
      args: currentField ? currentField.args : null,
      // The info about this exact field
      // Whether it supports non-null etc.
      type: currentFieldType || currentType,
      // The Schema type this field refers to
      // [User] => User, User => User
      schemaType: currentType,
    }
  }
}
