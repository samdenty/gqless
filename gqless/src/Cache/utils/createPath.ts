import { Accessor } from '../../Accessor'
import { createValue } from '../merge'
import { getAbstractImplementation } from '../../Node'

export const createPath = (accessor: Accessor, data?: any) => {
  if (accessor._value) return accessor._value

  const parentValue = accessor._parent && createPath(accessor._parent)
  const nodeImplementation = getAbstractImplementation(accessor._node, data?.__typename)
  const value = createValue(nodeImplementation || accessor._node, data)

  if (parentValue) {
    parentValue!.set(accessor.toString(), value)
  }

  return value
}
