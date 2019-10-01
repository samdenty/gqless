import { SelectionTree } from './SelectionTree'
import { FieldSelection } from '../../Selection'
import { createMemo } from '@gqless/utils'

const memoized = createMemo()

export const getAlias = (tree: SelectionTree<FieldSelection>) => {
  if (!tree.parent) return

  const fieldAliases = memoized(() => {
    const aliases = new Map<FieldSelection, string>()

    let id = 0
    tree.parent!.children.forEach(siblingTree => {
      if (!(siblingTree.selection instanceof FieldSelection)) return

      if (
        tree.selection === siblingTree.selection ||
        tree.selection.field !== siblingTree.selection.field
      )
        return

      aliases.set(tree.selection, `${tree.selection.field.name}__${++id}`)
    })
    return aliases
  }, [tree.parent, tree.selection.field])

  return fieldAliases.get(tree.selection)!
}
