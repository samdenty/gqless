import { SelectionTree } from './SelectionTree'
import { FieldSelection } from '../../Selection'
import { createMemo } from '@gqless/utils'

const memoized = createMemo()
let id = 0

export const getAlias = (tree: SelectionTree<FieldSelection>) => {
  if (!tree.parent) return

  for (const siblingTree of tree.parent.children) {
    if (siblingTree.selection instanceof FieldSelection) {
      if (
        tree.selection !== siblingTree.selection ||
        tree.selection.field === siblingTree.selection.field
      ) {
        id = (id + 1) % Number.MAX_VALUE
        return `${tree.selection.field.name}__${id}`
      }
    }
  }

  return ''

  // this was causing issues with names - we need to add id to every field
  // plus the memoization in prod mode caused a big bug
  // const fieldAliases = memoized(() => {
  //   const aliases = new Map<FieldSelection, string>()

  //   let id = 0
  //   tree.parent!.children.forEach(siblingTree => {
  //     if (!(siblingTree.selection instanceof FieldSelection)) return

  //     if (
  //       tree.selection === siblingTree.selection ||
  //       tree.selection.field !== siblingTree.selection.field
  //     )
  //       return

  //     aliases.set(tree.selection, `${tree.selection.field.name}__${++id}`)
  //   })
  //   return aliases
  // }, [tree.parent, tree.selection.field])

  // return fieldAliases.get(tree.selection)!
}
