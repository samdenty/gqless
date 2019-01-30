import { Schema, SchemaType, SchemaField, SchemaFieldType } from './Schema'

const engineCache = new WeakMap<Schema, TypeEngine>()

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
    while (type.ofType) {
      type = type.ofType
    }

    return type.name
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
        // currentField = null
        // If the path is an index, skip it
        currentFieldType = currentFieldType.ofType
        if (!isNaN(path as any)) continue
      }

      const field = currentType.fields && currentType.fields[path]
      if (!field) return null

      currentFieldType = field.type
      currentField = field
      currentType = this.schema.types[this.resolveListType(field)]
    }

    return {
      field: currentField,
      fieldType: currentFieldType,
      type: currentType,
    }
  }
}
