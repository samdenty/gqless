import { Value } from '../Value'
import { EnumNode, ScalarNode, DataTrait } from '../../Node'

export const createValue = (node: DataTrait, data?: any) =>
  new Value(
    node,
    // Only initialize with data if it's ScalarNode or EnumNode
    data === null
      ? null
      : node instanceof ScalarNode || node instanceof EnumNode
      ? data
      : undefined
  )
