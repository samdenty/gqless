import { QueryNode } from '../../../QueryNode'

export const throwException = (node: QueryNode) => {
  throw node.value
}
