import { invariant } from '@gqless/utils'
import { Value } from '../Value'
import { ScalarNode, Abstract, Outputable, Node } from '../../Node'

export const createValue = (node: Node & Outputable, data?: any) => {
  if (node instanceof Abstract && data?.__typename) {
    const implementation = node.implementations.find(i => i.toString() === data.__typename)
    invariant(
      implementation,
      `'${data.__typename}' is not a valid subtype of ${node}`
    )
    node = implementation
  }

  // initialize a new value
  return new Value(
    node,
    // Only initialize with data if it's a ScalarNode
    data === null ? null : node instanceof ScalarNode ? data : undefined
  )
}
