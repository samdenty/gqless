import { Value } from '../Value'
import { ScalarNode, DataTrait, Node } from '../../Node'

export const createValue = (node: Node & DataTrait, data?: any) =>
  new Value(
    node,
    // Only initialize with data if it's a ScalarNode
    data === null ? null : node instanceof ScalarNode ? data : undefined
  )
