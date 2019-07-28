import { lazyGetters } from '@gqless/utils'
import {
  ArrayNode,
  Arguments,
  ScalarNode,
  FieldNode,
  ObjectNode,
  InputNodeField,
  InputNode,
  UnionNode,
  InterfaceNode,
  Node,
  UUnionNode,
  UInputNode,
} from 'gqless'
import { SchemaFieldArgs, Type, SchemaType, Schema } from './Schema'

export const schemaNodes = (schema: Schema) => {
  const nodes = {} as {
    [key: string]: Node<any>
    Query: ObjectNode<any>
    Mutation: ObjectNode<any>
  }

  Object.values(schema.types).forEach(type => {
    Object.defineProperty(nodes, type.name, {
      get() {
        return createNode(type)
      },
      configurable: true,
    })
  })

  lazyGetters(nodes)

  const resolveType = (type: Type): Node<any> =>
    type.kind === 'LIST'
      ? new ArrayNode(resolveType(type.ofType), type.nullable)
      : nodes[type.name]

  const resolveArgs = (args?: SchemaFieldArgs) => {
    if (!args) return undefined

    const inputs = {}
    for (const [name, arg] of Object.entries(args)) {
      Object.defineProperty(inputs, name, {
        get() {
          return resolveType(arg)
        },
        configurable: true,
      })
    }

    return new Arguments(inputs)
  }

  const createNode = (type: SchemaType) => {
    if (type.kind === 'SCALAR') {
      return new ScalarNode({ name: type.name })
    }

    if (type.kind === 'OBJECT') {
      const fields = {}

      for (const field of Object.values(type.fields)) {
        Object.defineProperty(fields, field.name, {
          get() {
            return new FieldNode(
              resolveType(field.type),
              resolveArgs(field.args),
              field.type.nullable
            )
          },
          configurable: true,
        })
      }

      return new ObjectNode(fields, { name: type.name })
    }

    if (type.kind === 'INPUT_OBJECT') {
      const inputs = {}

      for (const inputField of Object.values(type.inputFields)) {
        Object.defineProperty(inputs, inputField.name, {
          get() {
            return new InputNodeField(
              resolveType(inputField.type) as UInputNode,
              inputField.type.nullable
            )
          },
          configurable: true,
        })
      }

      return new InputNode(inputs, { name: type.name })
    }

    if (type.kind === 'UNION') {
      return new UnionNode(
        type.possibleTypes.map(type => nodes[type] as UUnionNode)
      )
    }

    if (type.kind === 'INTERFACE') {
      const fields = {}

      for (const field of Object.values(type.fields)) {
        Object.defineProperty(fields, field.name, {
          get() {
            return new FieldNode(
              resolveType(field.type),
              resolveArgs(field.args),
              field.type.nullable
            )
          },
          configurable: true,
        })
      }

      return new InterfaceNode(
        fields,
        type.possibleTypes.map(type => nodes[type] as ObjectNode<any>),
        { name: type.name }
      )
    }

    return undefined
  }

  return nodes
}
