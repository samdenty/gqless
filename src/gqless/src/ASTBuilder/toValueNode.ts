import { invariant } from '@gqless/utils'
import { ObjectFieldNode, ValueNode } from 'graphql'

import { ArrayNode, EnumNode, InputNode, UArguments } from '../Node'

export const toValueNode = (
  value: any,
  node: UArguments,
  recurse: (value: any, node: UArguments, nullable: boolean) => ValueNode
): ValueNode => {
  if (value === null) {
    return { kind: 'NullValue' }
  }

  switch (typeof value) {
    case 'string':
      return {
        kind: node instanceof EnumNode ? 'EnumValue' : 'StringValue',
        value,
      } as any

    case 'number':
      return { kind: 'IntValue', value: `${value}` }

    case 'boolean':
      return { kind: 'BooleanValue', value }
  }

  if (value instanceof Array) {
    const arrayNode = node as ArrayNode<any>
    return {
      kind: 'ListValue',
      values: value.map(value =>
        recurse(value, arrayNode.ofNode, arrayNode.nullable)
      ),
    }
  }

  if (node instanceof InputNode) {
    const { inputs } = node

    return {
      kind: 'ObjectValue',
      fields: Object.entries(value)
        .filter(([name]) => name in inputs)
        .map(
          ([name, value]): ObjectFieldNode => {
            const field = inputs[name]

            return {
              kind: 'ObjectField',
              name: {
                kind: 'Name',
                value: name,
              },
              value: recurse(value, field.ofNode, field.nullable),
            }
          }
        ),
    }
  }

  console.log(node.constructor === InputNode, node instanceof InputNode)

  throw invariant(
    false,
    `Invalid value of ${JSON.stringify(
      value
    )} for argument (expected type ${node})`
  )
}
