import { Schema, SchemaType, SchemaFieldType } from './Schema'

const getType = (type: any): SchemaFieldType => {
  if (!type) return null
  if (type.kind === 'NON_NULL') return getType(type.ofType)

  return {
    name: type.name,
    kind: type.kind,
    ofType: getType(type.ofType),
  }
}

export const introspectionToSchema = (introspection: any) => {
  const schema: Schema = {
    queryType: introspection.queryType.name,
    mutationType: introspection.mutationType && introspection.mutationType.name,
    types: {},
  }

  for (const type of introspection.types) {
    const schemaType: SchemaType = (schema.types[type.name] = {
      name: type.name,
      kind: type.kind,
      possibleTypes: type.possibleTypes
        ? type.possibleTypes.map(({ name }) => name)
        : undefined,
      fields: null,
    })

    if (type.fields) {
      schemaType.fields = {}

      for (const field of type.fields) {
        schemaType.fields[field.name] = {
          args: !!field.args.length,
          type: getType(field.type),
        }
      }
    }
  }

  return schema
}
