import { Accessor } from '../../Accessor'
import { createValue } from '../merge'
import { getAbstractImplementation } from '../../Node'

export const createPath = (accessor: Accessor, data?: any) => {
  if (accessor.value) return accessor.value

  const parentValue = accessor.parent && createPath(accessor.parent)
  const nodeImplementation = getAbstractImplementation(accessor.node, data?.__typename)
  const value = createValue(nodeImplementation || accessor.node, data)

  if (parentValue) {
    parentValue!.set(accessor.toString(), value)
  }

  return value
}
