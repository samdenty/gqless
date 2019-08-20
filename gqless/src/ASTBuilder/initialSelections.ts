import { SelectionNode } from 'graphql'
import { Selection } from '../Selection'
import { NodeContainer, ScalarNode, EnumNode } from '../Node'

export const initialSelections = (selection: Selection<any>) => {
  const subSelections: SelectionNode[] = []

  const innerNode =
    selection.node instanceof NodeContainer
      ? selection.node.innerNode
      : selection.node

  if (!(innerNode instanceof ScalarNode) && !(innerNode instanceof EnumNode)) {
    subSelections.push({
      kind: 'Field',
      name: {
        kind: 'Name',
        value: '__typename',
      },
    })
  }

  return subSelections
}
