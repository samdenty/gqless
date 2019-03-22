import {
  StringNode,
  NumberNode,
  ObjectNode,
  ObjectNodeField,
  InputNode,
  InputNodeField,
  Arguments,
  ArgumentsField,
  ArrayNode,
  ScalarNode,
  BooleanNode,
  UScalarNode,
} from './src/new'
import { Schema, SchemaType, SchemaFieldType } from './src'

export const test = (schema: Schema) => {
  const query = null
  const resolvedTypes = new Map<
    keyof Schema['types'],
    ObjectNode<any> | UScalarNode
  >()

  const getType = (name: string) => {
    if (!resolvedTypes.has(name)) {
      if (!schema.types.hasOwnProperty(name)) return null

      resolvedTypes.set(name, createNode(schema.types[name]))
    }

    return resolvedTypes.get(name)
  }
  Object.assign(window, {
    getType,
    resolvedTypes,
    schema,
  })

  const resolveFieldType = (type: SchemaFieldType) =>
    type.kind === 'LIST'
      ? new ArrayNode(query, resolveFieldType(type.ofType), type.nullable)
      : getType(type.name)

  const createNode = (type: SchemaType) => {
    if (type.kind === 'SCALAR') {
      return type.name === 'Int' || type.name === 'Float'
        ? new NumberNode(query, { name: type.name })
        : type.name === 'ID' || type.name === 'String'
        ? new StringNode(query, { name: type.name })
        : type.name === 'Boolean'
        ? new BooleanNode(query, { name: type.name })
        : new ScalarNode(query, { name: type.name })
    }

    if (type.kind === 'OBJECT') {
      const fields = {}

      for (const field of Object.values(type.fields)) {
        Object.defineProperty(fields, field.name, {
          get() {
            return new ObjectNodeField(
              query,
              resolveFieldType(field.type),
              null,
              field.type.nullable
            )
          },
          configurable: true,
        })
      }

      return new ObjectNode(query, fields, { name: type.name })
    }
  }

  getType(schema.queryType)
  console.log(resolvedTypes)

  // console.log(Query)
  // console.log(schema)
}

if (window.__ASDASD_) {
  const _String = new StringNode(null)
  const ID = new StringNode(null)
  const Int = new NumberNode(null)
  const Float = new NumberNode(null)

  const User = new ObjectNode(null, {
    name: new ObjectNodeField(null, _String),
    id: new ObjectNodeField(null, ID),
    age: new ObjectNodeField(null, Int),
  })

  const Test = new InputNode(null, {
    test: new InputNodeField(null, _String),
  })

  const Filter = new InputNode(null, {
    count: new InputNodeField(null, Int),
    before: new InputNodeField(null, ID),
    after: new InputNodeField(null, ID),
  })

  type A = typeof Filter.a
  Filter.provide({
    after: '10',
    before: '10',
    count: 10,
  })

  // input.provide({
  //   id: 'hello',
  // })

  const a = new Arguments(null, {
    filter: new ArgumentsField(null, Filter),
  })
  a.provide({ filter: { after: '', before: '', count: 10 } })
  // a.delete.

  const Query = new ObjectNode(null, {
    user: new ObjectNodeField(null, User),
    users: new ObjectNodeField(null, new ArrayNode(null, User)),
    users2: new ObjectNodeField(
      null,
      new ArrayNode(null, new ArrayNode(null, User))
    ),
  })

  var q: ObjectNode<{
    a: number
    people: { name: string }[]
    user: {
      name: string
      a: { b: { c: number } }
    }
    $args: {
      user: { id: string }
    }
  }>

  // q.fields.people
  // q.fields.user.node.fields.name
  q.data.user({ id: 'hello' }).name
  q.data.user.name
  q.data.user.a.b.c
  q.data.people[0].name
  q.data.user.name

  Query.data.user.name
  Query.data.users[0].name
  Query.data.users2[0][0].name
  Query.data.user({ id: 10 })
}
