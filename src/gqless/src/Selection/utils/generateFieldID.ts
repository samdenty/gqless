import { FieldNode } from '../../Node'

const fieldMap = new WeakMap<FieldNode, number>()

export const generateFieldID = (field: FieldNode) => {
  const existingID = fieldMap.has(field) ? fieldMap.get(field)! : 0
  const id = existingID + 1

  fieldMap.set(field, id)

  return `${id}`
}
