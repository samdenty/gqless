import { Value } from '../Value'
import { ScalarNode, DataTrait } from '../../Node'

export const createValue = (node: DataTrait, data?: any) =>
  new Value(
    node,
    // Only initialize with data if it's a ScalarNode
    data === null ? null : node instanceof ScalarNode ? data : undefined
  )
