import { Formatter } from './Formatter'
import { Selection } from '../Selection'
import { toTree, SelectionTree } from './SelectionTree'
import { buildSelectionTree } from './buildSelection'
import { Variables } from './buildVariable'
import { ObjectNode } from '../Node'
import { buildFragments } from './buildFragments'

export const buildQuery = (
  { SPACE, SEPARATOR, NEWLINE, hug, indent, formatter }: Formatter,
  queryName?: string,
  ...selectionPaths: Selection[][]
) => {
  const rootTree = toTree(selectionPaths).children[0] as SelectionTree<
    Selection<ObjectNode>
  >
  const variablesMap: Variables = new Map()
  const selections = buildSelectionTree(formatter, rootTree, variablesMap)

  const buildVariables = () => {
    if (!variablesMap.size) return ''

    return `(${Array.from(variablesMap)
      .map(([name, variable]) => `$${name}:${SPACE}${variable}`)
      .join(SEPARATOR)})`
  }

  const queryHeader = `${queryName ? ' ' + queryName : ''}${buildVariables()}`

  const query = [
    `${queryHeader ? `query${queryHeader}${SPACE}` : ''}${hug(
      indent(selections)
    )}`,
    buildFragments(formatter, rootTree),
  ]
    .filter(Boolean)
    .join(NEWLINE + NEWLINE)

  let variables: Record<string, any> | undefined

  if (variablesMap.size) {
    variables = {}
    variablesMap.forEach(
      (variable, name) => (variables![name] = variable.toJSON())
    )
  }

  return { rootTree, query, variables }
}

export * from './SelectionTree'
