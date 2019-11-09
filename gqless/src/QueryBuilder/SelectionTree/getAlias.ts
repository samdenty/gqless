import { SelectionTree } from './SelectionTree'
import { FieldSelection } from '../../Selection'
import { createMemo } from '@gqless/utils'

const memoized = createMemo()

export const getAlias = (tree: SelectionTree<FieldSelection>) => {
  if (!tree._parent) return

  const fieldAliases = memoized(() => {
    const aliases = new Map<FieldSelection, string>()

    let id = 0
    tree._parent!._children.forEach(siblingTree => {
      if (!(siblingTree._selection instanceof FieldSelection)) return

      if (
        tree._selection === siblingTree._selection ||
        tree._selection._field !== siblingTree._selection._field
      )
        return

      aliases.set(tree._selection, `${tree._selection._field._name}__${++id}`)
    })
    return aliases
  }, [tree._parent, tree._selection._field])

  return fieldAliases.get(tree._selection)!
}
