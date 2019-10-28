import { Accessor } from '../../Accessor'
import { createValue } from '../merge'

export const createPath = (accessor: Accessor, data?: any) => {
  if (accessor.value) return accessor.value

  const parentValue = accessor.parent && createPath(accessor.parent)
  const value = createValue(accessor.node, data)

  if (parentValue) {
    parentValue!.set(accessor.toString(), value)
  }

  return value
}
