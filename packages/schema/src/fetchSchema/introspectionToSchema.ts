import {
  Schema,
  Type,
  SchemaFields,
  SchemaInputFields,
  SchemaFieldArgs,
} from '../Schema'

const getType = (type: any, nullable = true): Type | null => {
  if (!type) return null
  if (type.kind === 'NON_NULL') return getType(type.ofType, false)

  return {
    kind: type.kind,
    nullable,
    ...(type.kind === 'LIST'
      ? { ofType: getType(type.ofType)! }
      : { name: type.name }),
  }
}

const getFields = (introspectionFields: any) => {
  const fields: SchemaFields = {}

  for (const field of introspectionFields) {
    let args: SchemaFieldArgs | undefined = undefined
    if (field.args.length) {
      args = {}
      field.args.forEach((arg: any) => {
        args![arg.name as string] = getType(arg.type)!
      })
    }

    fields[field.name] = {
      name: field.name,
      args,
      type: getType(field.type)!,
    }
  }

  return fields
}

const getInputObjectFields = (introspectionFields: any) => {
  const fields: SchemaInputFields = {}

  for (const field of introspectionFields) {
    fields[field.name] = {
      name: field.name,
      type: getType(field.type)!,
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
      ...(type.kind === 'UNION'
        ? { possibleTypes: type.possibleTypes.map(({ name }: any) => name) }
        : type.kind === 'INTERFACE'
          ? {
              possibleTypes: type.possibleTypes.map(({ name }: any) => name),
              fields: getFields(type.fields),
            }
          : type.kind === 'OBJECT'
            ? { fields: getFields(type.fields) }
            : type.kind === 'INPUT_OBJECT'
              ? {
                  inputFields: getInputObjectFields(type.inputFields),
                }
              : null),
    }
  }

  return schema
}
