import { FieldNode } from '../../Node'

const fieldMap = new WeakMap<FieldNode<any, any, any>, number>()

export const generateFieldID = (field: FieldNode<any, any, any>) => {
  const existingID = fieldMap.has(field) ? fieldMap.get(field)! : 0
  const id = existingID + 1

  fieldMap.set(field, id)

  return `${id}`
}
