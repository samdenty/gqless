import { Formatter } from './Formatter'
import { Selection } from '../Selection'
import { toTree, SelectionTree } from './SelectionTree'
import { buildSelectionTree } from './buildSelection'
import { Variables } from './buildVariable'
import { ObjectNode } from '../Node'
import { buildFragments } from './buildFragments'

export const buildQuery = (
  { _SPACE, _SEPARATOR, _NEWLINE, _hug, _indent, _formatter }: Formatter,
  queryName?: string,
  ...selectionPaths: Selection[][]
) => {
  const rootTree = toTree(selectionPaths)._children[0] as SelectionTree<
    Selection<ObjectNode>
  >
  const variablesMap: Variables = new Map()
  const selections = buildSelectionTree(_formatter, rootTree, variablesMap)

  const buildVariables = () => {
    if (!variablesMap.size) return ''

    return `(${Array.from(variablesMap)
      .map(([name, variable]) => `$${name}:${_SPACE}${variable}`)
      .join(_SEPARATOR)})`
  }

  const queryHeader = `${queryName ? ' ' + queryName : ''}${buildVariables()}`

  const query = [
    `${queryHeader ? `query${queryHeader}${_SPACE}` : ''}${_hug(
      _indent(selections)
    )}`,
    buildFragments(_formatter, rootTree),
  ]
    .filter(Boolean)
    .join(_NEWLINE + _NEWLINE)

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
