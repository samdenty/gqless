import { SelectionTree } from './SelectionTree'
import { FieldSelection, Fragment } from '../Selection'
import { Formatter } from './Formatter'
import { buildArguments } from './buildArguments'
import { ScalarNode, NodeContainer, ObjectNode } from '../Node'
import { Variables } from './buildVariable'

export const buildSelections = (
  { _LINE_SEPARATOR, _formatter }: Formatter,
  tree: SelectionTree,
  variables?: Variables
) => {
  const innerNode =
    tree._selection.node instanceof NodeContainer
      ? tree._selection.node.innerNode
      : tree._selection.node

  if (innerNode instanceof ScalarNode) return ''

  const includeTypename =
    // When no selections or not on ObjectNode
    (!tree._children.length || !(innerNode instanceof ObjectNode)) &&
    // fragments should never need __typename
    !(tree._selection instanceof Fragment)

  const selections = [
    includeTypename && '__typename',
    ...tree._children.map(tree =>
      buildSelectionTree(_formatter, tree, variables)
    ),
  ].filter(Boolean)

  if (!selections.length) return ''

  return selections.join(_LINE_SEPARATOR)
}

const buildFieldSelectionTree = (
  { _SPACE, _hug, _indent, _formatter }: Formatter,
  tree: SelectionTree<FieldSelection>,
  variables?: Variables
): string => {
  const buildAlias = () => {
    if (!tree._alias) return ''
    return `${tree._alias}:${_SPACE}`
  }

  const buildArgs = () => {
    const args = tree._selection.args
    if (!args) return ''

    return `(${buildArguments(_formatter, args, {
      _variables: variables,
      _node: tree._selection.field._args!,
      _path: [tree._selection.field._name],
    })})`
  }

  const buildChildren = () => {
    const selections = buildSelections(_formatter, tree, variables)
    if (!selections) return ''

    return `${_SPACE}${_hug(_indent(selections))}`
  }

  return `${buildAlias()}${
    tree._selection!.field._name
  }${buildArgs()}${buildChildren()}`
}

const buildFragmentTree = (
  { _SPACE, _hug, _indent, _formatter }: Formatter,
  tree: SelectionTree<Fragment>
) => {
  const fragmentName = tree._allFragments.get(tree._selection)

  if (_formatter._options.fragments !== 'inline' && fragmentName) {
    return `...${fragmentName}`
  }

  const parentNode =
    tree._parent!._selection.node instanceof NodeContainer
      ? tree._parent!._selection.node.innerNode
      : tree._parent!._selection.node

  // If it's on the same node, and inline then omit type
  if (tree._selection.node === parentNode) {
    return buildSelections(_formatter, tree)
  }

  let selections = buildSelections(_formatter, tree)
  if (!selections) return ''

  let huggedSelections = _hug(_indent(selections))

  // Add comment with fragment name (for debugging)
  if (__DEV__ && _formatter._options.prettify && tree._selection.name) {
    huggedSelections = huggedSelections.replace(
      '{',
      `{ #[${tree._selection.name}]`
    )
  }

  return `...${_SPACE}on ${tree._selection.node}${_SPACE}${huggedSelections}`
}

export const buildSelectionTree = (
  { _formatter }: Formatter,
  tree: SelectionTree,
  variables?: Variables
): string => {
  if (tree._selection instanceof FieldSelection)
    return buildFieldSelectionTree(_formatter, tree as any, variables)

  if (tree._selection instanceof Fragment)
    return buildFragmentTree(_formatter, tree as any)

  return buildSelections(_formatter, tree, variables)
}
