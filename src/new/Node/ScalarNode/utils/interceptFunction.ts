import { Selection } from '../../../Selection'

export const interceptFunction = (
  selection: Selection<any>,
  prop: string | Symbol
) => (...args: unknown[]) => {
  const { unresolvedSelection } = selection
  if (unresolvedSelection) {
    throw unresolvedSelection
  }

  if (selection.value === null) {
    // We've got a reference to a prototype method on a value,
    // that has since became null
    throw selection
  }

  if (
    selection.value !== undefined &&
    typeof selection.value[prop as any] === 'function'
  ) {
    return selection.value[prop as any](...args)
  }
}
