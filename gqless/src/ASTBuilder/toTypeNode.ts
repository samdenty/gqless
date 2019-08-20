import { UArguments, ArrayNode } from '../Node'
import { TypeNode, NonNullTypeNode } from 'graphql'

export const toTypeNode = (node: UArguments, nullable: boolean): TypeNode => {
  if (!nullable)
    return {
      kind: 'NonNullType',
      type: toTypeNode(node, true) as Exclude<TypeNode, NonNullTypeNode>,
    }

  if (node instanceof ArrayNode)
    return {
      kind: 'ListType',
      type: toTypeNode(node.ofNode, node.nullable),
    }

  return {
    kind: 'NamedType',
    name: {
      kind: 'Name',
      value: node.toString(),
    },
  }
}
