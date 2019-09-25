import { SelectionTree } from './SelectionTree'
import { FieldSelection, Fragment } from '../Selection'
import { Formatter } from './Formatter'
import { buildArguments } from './buildArguments'
import { ScalarNode, NodeContainer, ObjectNode } from '../Node'
import { Variables } from './buildVariable'

export const buildSelections = (
  { LINE_SEPARATOR, indent, NEWLINE, formatter }: Formatter,
  tree: SelectionTree,
  variables?: Variables
) => {
  const innerNode =
    tree.selection.node instanceof NodeContainer
      ? tree.selection.node.innerNode
      : tree.selection.node

  if (innerNode instanceof ScalarNode) return ''

  // Only include when no selections OR
  // node is an ObjectNode (redundant)
  const includeTypename =
    !tree.children.length || !(innerNode instanceof ObjectNode)
  const selections = [
    includeTypename && '__typename',
    ...tree.children.map(tree =>
      buildSelectionTree(formatter, tree, variables)
    ),
  ].filter(Boolean)

  if (!selections.length) return ''

  return `{${NEWLINE}${indent(selections.join(LINE_SEPARATOR))}${NEWLINE}}`
}

const buildFieldSelectionTree = (
  { SPACE, formatter }: Formatter,
  tree: SelectionTree<FieldSelection>,
  variables?: Variables
): string => {
  const buildAlias = () => {
    if (!tree.alias) return ''
    return `${tree.alias}:${SPACE}`
  }

  const buildArgs = () => {
    const args = tree.selection.args
    if (!args) return ''

    return `(${buildArguments(formatter, args, {
      variables,
      node: tree.selection.field.args!,
      path: [tree.selection.field.name],
    })})`
  }

  const buildChildren = () => {
    const selections = buildSelections(formatter, tree, variables)
    if (!selections) return ''

    return `${SPACE}${selections}`
  }

  return `${buildAlias()}${
    tree.selection!.field.name
  }${buildArgs()}${buildChildren()}`
}

const buildFragmentTree = (
  { SPACE, formatter }: Formatter,
  tree: SelectionTree<Fragment>
) => {
  const fragmentName = tree.allFragments.get(tree.selection)

  const buildRef = () => {
    if (formatter.options.fragments && fragmentName) {
      return fragmentName
    }

    return `${SPACE}on ${tree.selection.node}${SPACE}${buildSelections(
      formatter,
      tree
    )}`
  }

  return `...${buildRef()}`
}

export const buildSelectionTree = (
  { formatter }: Formatter,
  tree: SelectionTree,
  variables?: Variables
): string => {
  if (tree.selection instanceof FieldSelection)
    return buildFieldSelectionTree(formatter, tree as any, variables)

  if (tree.selection instanceof Fragment)
    return buildFragmentTree(formatter, tree as any)

  return buildSelections(formatter, tree, variables)
}
