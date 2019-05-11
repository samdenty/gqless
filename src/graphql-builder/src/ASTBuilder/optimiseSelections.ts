import { Selection } from '../Selection'

const startsWith = (match: any[], target: any[]) => {
  const badMatch = match.some((val, i) => target[i] !== val)
  return !badMatch
}

export const sortByPathLength = (
  a: Selection<any, any>,
  b: Selection<any, any>
) => a.path.length - b.path.length

// Removes nodes that are contained within other nodes
export const flattenSelections = <T extends Selection<any, any>>(
  selections: T[]
) => {
  selections.sort(sortByPathLength)

  selections.forEach((node, fromIndex) => {
    for (let i = fromIndex + 1; i < selections.length; i++) {
      const possibleMatch = selections[i]

      if (startsWith(node.path, possibleMatch.path)) {
        selections.splice(i, 1)
        i--
      }
    }
  })
}
