import { Selection } from '../../Selection'
import { SelectionTree } from './SelectionTree'

export const toTree = (selections: (Selection | Selection[])[]) => {
  const rootTree = new SelectionTree({ toString: () => 'RootTree' } as any)

  const addSelections = (tree: SelectionTree<any>, ...path: Selection[]) => {
    for (const selection of path) {
      let index = tree.children.findIndex(t => t.selection === selection)
      if (index > -1) {
        tree = tree.children[index]
        continue
      }

      const newTree = new SelectionTree(selection, tree)
      tree.children.push(newTree)
      tree = newTree
    }

    const lastSelection = path[path.length - 1]

    lastSelection.selections.forEach(selection =>
      addSelections(tree, selection)
    )
  }

  selections.forEach(selections =>
    addSelections(
      rootTree,
      ...(Array.isArray(selections) ? selections : [selections])
    )
  )

  return rootTree
}
