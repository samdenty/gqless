import { QueryNode, QueryField } from '../QueryNode'
import { Query } from '../Query'

export const resolveNode = (
  query: Query,
  targetNode: QueryNode
): { value: any; unresolvedNode?: QueryNode } => {
  let value = query.response.data

  for (const node of targetNode.path) {
    if (node instanceof QueryField) value = value[node.aliasedName]

    if (value === undefined) return { value, unresolvedNode: node }
  }

  return { value, unresolvedNode: null }
}
