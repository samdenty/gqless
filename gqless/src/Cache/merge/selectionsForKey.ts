import { Selection, Fragment } from '../../Selection'

export const selectionsForKey = (
  key: string,
  ...selectionsFilter: Selection[]
) => {
  const selections: Selection[] = []

  for (const selection of selectionsFilter) {
    if (selection instanceof Fragment) {
      selections.push(...selectionsForKey(key, ...selection.selections$))
      continue
    }

    if (selection.toString() === key) {
      selections.push(selection)
    }
  }

  return selections
}
