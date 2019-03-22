import { Schema, SchemaType, SchemaFieldType } from './Schema'

const getType = (type: any, nullable = true): SchemaFieldType => {
  if (!type) return null
  if (type.kind === 'NON_NULL') return getType(type.ofType, false)

  return {
    name: type.name,
    kind: type.kind,
    ofType: getType(type.ofType),
    nullable,
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
        let args = null
        if (field.args.length) {
          args = {}
          for (const arg of field.args) {
            args[arg.name] = arg.type
          }
        }

        schemaType.fields[field.name] = {
          name: field.name,
          args,
          type: getType(field.type),
        }
      }
    }
  }

  return schema
}
