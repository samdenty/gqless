import { QueryNode } from '../QueryNode'

const startsWith = (match: any[], target: any[]) => {
  const badMatch = match.some((val, i) => target[i] !== val)
  return !badMatch
}

const sortByPathLength = (a: QueryNode, b: QueryNode) =>
  a.path.length - b.path.length

// Removes nodes that are contained within other nodes
export const highestCommonNode = <T extends QueryNode>(nodes: T[]) => {
  nodes = nodes.sort(sortByPathLength)

  nodes.forEach((node, fromIndex) => {
    for (let i = fromIndex + 1; i < nodes.length; i++) {
      const possibleMatch = nodes[i]

      if (startsWith(node.path, possibleMatch.path)) {
        nodes.splice(i, 1)
        i--
      }
    }
  })

  return nodes
}

export const optimiseNodes = <T extends QueryNode>(nodes: T[]) =>
  highestCommonNode(nodes)
