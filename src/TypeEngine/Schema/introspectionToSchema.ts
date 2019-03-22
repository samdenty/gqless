import {
  Schema,
  SchemaType,
  Type,
  SchemaObjectFields,
  SchemaInputFields,
} from './Schema'

const getType = (type: any, nullable = true): Type => {
  if (!type) return null
  if (type.kind === 'NON_NULL') return getType(type.ofType, false)

  return {
    kind: type.kind,
    nullable,
    ...(type.kind === 'LIST'
      ? { ofType: getType(type.ofType) }
      : { name: type.name }),
  }
}

const getObjectFields = (introspectionFields: any) => {
  const fields: SchemaObjectFields = {}

  for (const field of introspectionFields) {
    let args = null
    if (field.args.length) {
      args = {}
      for (const arg of field.args) {
        args[arg.name] = getType(arg.type)
      }
    }

    fields[field.name] = {
      name: field.name,
      args,
      type: getType(field.type),
    }
  }

  return fields
}

const getInputObjectFields = (introspectionFields: any) => {
  const fields: SchemaInputFields = {}

  for (const field of introspectionFields) {
    fields[field.name] = {
      name: field.name,
      type: getType(field.type),
    }
  }

  return fields
}

export const introspectionToSchema = (introspection: any) => {
  const schema: Schema = {
    queryType: introspection.queryType.name,
    mutationType: introspection.mutationType && introspection.mutationType.name,
    types: {},
  }

  for (const type of introspection.types) {
    schema.types[type.name] = {
      name: type.name,
      kind: type.kind,
      ...(type.kind === 'UNION' || type.kind === 'INTERFACE'
        ? { possibleTypes: type.possibleTypes.map(({ name }) => name) }
        : type.kind === 'OBJECT'
        ? { fields: getObjectFields(type.fields) }
        : type.kind === 'INPUT_OBJECT'
        ? {
            inputFields: getInputObjectFields(type.inputFields),
          }
        : null),
    }
  }

  return schema
}
