import { Selection, Fragment } from '../../Selection'
import { SelectionTree } from './SelectionTree'

export const toTree = (selections: (Selection | Selection[])[]) => {
  const rootTree = new SelectionTree({ toString: () => 'RootTree' } as any)

  const addSelectionToTree = (
    tree: SelectionTree<any>,
    ...pathToSelection: Selection[]
  ) => {
    for (let i = 0; i < pathToSelection.length; i++) {
      const selection = pathToSelection[i]

      // Filter out empty fragments
      if (selection instanceof Fragment) {
        // try and find a non-empty fragment somewhere after the path
        // TODO fixme: this doesn't work for nested fragments that are empty
        // eg.
        //  frag A { ... B } -> A should be ignored
        //  frag B { }
        const validSelection = pathToSelection
          .slice(i)
          .find(s => !(s instanceof Fragment) || s.selections.size)

        if (!validSelection) return
      }

      let index = tree._children.findIndex(t => t._selection === selection)
      if (index > -1) {
        tree = tree._children[index]
      } else {
        const newTree = new SelectionTree(selection, tree)
        tree._children.push(newTree)
        tree = newTree
      }

      // Add all the keySelections to the tree
      selection.keySelections.forEach(keySelection => {
        addSelectionToTree(tree, keySelection)
      })
    }

    const selection = pathToSelection[pathToSelection.length - 1]

    selection.selections.forEach(selection =>
      addSelectionToTree(tree, selection)
    )
  }

  selections.forEach(selections =>
    addSelectionToTree(
      rootTree,
      ...(Array.isArray(selections) ? selections : [selections])
    )
  )

  return rootTree
}
