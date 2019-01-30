import { QueryNode } from '../QueryNode'

export const getNodePath = (node: QueryNode) => {
  let currentNode: QueryNode = node
  let path = new Array<QueryNode>()
  while (currentNode) {
    path.push(currentNode)

    // @ts-ignore
    currentNode = currentNode.parent
  }
  path = path.reverse()

  return path
}
