import { SelectionTree } from './SelectionTree'
import { FieldSelection, Fragment } from '../Selection'
import { Formatter } from './Formatter'
import { buildArguments } from './buildArguments'
import { ScalarNode, NodeContainer, ObjectNode } from '../Node'
import { Variables } from './buildVariable'

export const buildSelections = (
  { LINE_SEPARATOR, formatter }: Formatter,
  tree: SelectionTree,
  variables?: Variables
) => {
  const innerNode =
    tree.selection.node instanceof NodeContainer
      ? tree.selection.node.innerNode
      : tree.selection.node

  if (innerNode instanceof ScalarNode) return ''

  const includeTypename =
    // When no selections or not on ObjectNode
    (!tree.children.length || !(innerNode instanceof ObjectNode)) &&
    // fragments should never need __typename
    !(tree.selection instanceof Fragment)

  const selections = [
    includeTypename && '__typename',
    ...tree.children.map(tree =>
      buildSelectionTree(formatter, tree, variables)
    ),
  ].filter(Boolean)

  if (!selections.length) return ''

  return selections.join(LINE_SEPARATOR)
}

const buildFieldSelectionTree = (
  { SPACE, hug, indent, formatter }: Formatter,
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

    return `${SPACE}${hug(indent(selections))}`
  }

  return `${buildAlias()}${
    tree.selection!.field.name
  }${buildArgs()}${buildChildren()}`
}

const buildFragmentTree = (
  { SPACE, hug, indent, formatter }: Formatter,
  tree: SelectionTree<Fragment>
) => {
  const fragmentName = tree.allFragments.get(tree.selection)

  if (formatter.options.fragments !== 'inline' && fragmentName) {
    return `...${fragmentName}`
  }

  const parentNode =
    tree.parent!.selection.node instanceof NodeContainer
      ? tree.parent!.selection.node.innerNode
      : tree.parent!.selection.node

  // If it's on the same node, and inline then omit type
  if (tree.selection.node === parentNode) {
    return buildSelections(formatter, tree)
  }

  let selections = buildSelections(formatter, tree)
  if (!selections) return ''

  // Add comment with fragment name (for debugging)
  if (__DEV__ && formatter.options.prettify && tree.selection.name) {
    selections = selections.replace('{', `{ #[${tree.selection.name}]`)
  }

  return `...${SPACE}on ${tree.selection.node}${SPACE}${hug(
    indent(selections)
  )}`
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
