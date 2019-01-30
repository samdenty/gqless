import { SelectionNode, FieldNode } from 'graphql'

/**
 * Recursively merges multiple selections into one
 */
export const mergeSelections = (selections: SelectionNode[]) => {
  if (selections.length <= 1) return selections

  for (let i = 0; i < selections.length; i++) {
    const selection = selections[i]

    if (selection.kind !== 'Field') continue

    const existingSelection = selections.find((s, index) => {
      if (index === i || s.kind !== 'Field') return false

      const sameName = s.name.value === selection.name.value
      const sameAlias =
        (!!s.alias && s.alias.value) ===
        (!!selection.alias && selection.alias.value)

      return sameName && sameAlias
    }) as FieldNode

    if (existingSelection) {
      if (selection.selectionSet && !existingSelection.selectionSet) {
        // @ts-ignore
        existingSelection.selectionSet = selection.selectionSet
      } else if (selection.selectionSet && existingSelection.selectionSet) {
        // @ts-ignore
        existingSelection.selectionSet.selections = [
          ...existingSelection.selectionSet.selections,
          ...selection.selectionSet.selections,
        ]

        mergeSelections(existingSelection.selectionSet
          .selections as SelectionNode[])
      }

      selections.splice(i, 1)
      i--
    }
  }

  return selections
}
