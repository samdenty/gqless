import { Accessor, FieldAccessor, IndexAccessor } from '../../Accessor'
import { ArrayNode, ObjectNode, Node } from '../../Node'
import { Selection, FieldSelection, Fragment } from '../../Selection'
import { shallowUpdate } from './shallowUpdate'

export const mergeUpdate = (accessor: Accessor<any, any>, data: any) => {
  const fragmentAccessor = shallowUpdate(accessor, data)

  if (fragmentAccessor) {
    return mergeObject(fragmentAccessor, data)
  }

  if (accessor.node instanceof ObjectNode) {
    return mergeObject(accessor, data)
  }

  if (accessor.node instanceof ArrayNode) {
    return mergeArray(accessor, data)
  }
}

const mergeObject = (
  accessor: Accessor<Selection<ObjectNode> | Fragment>,
  data: Record<string, any> | null
) => {
  if (data === null) return

  Object.entries(data).forEach(([key, value]) => {
    if (key === '__typename') return

    // Search for an existing accessor matching
    // the given key
    let fieldAccessor = accessor.get(a => a.toString() === key)

    if (!fieldAccessor) {
      // Need to find a selection, for a new accessor
      let fieldSelection = accessor.selection.get<FieldSelection>(
        s => s.toString() === key
      )

      if (!fieldSelection) {
        // If there's a field with the given key,
        // create a new selection.
        if (
          accessor.node instanceof ObjectNode &&
          accessor.node.fields.hasOwnProperty(key)
        ) {
          const field = accessor.node.fields[key]
          fieldSelection = new FieldSelection(field)
          accessor.selection.add(fieldSelection)
        } else {
          console.warn(
            `No selection found for "${key}" [at path ${accessor.path}.${key}]. Value will be ignored`
          )
          return
        }
      }

      fieldAccessor = new FieldAccessor(accessor, fieldSelection)
    }

    mergeUpdate(fieldAccessor, value)
  })
}

const mergeArray = (
  accessor: Accessor<Selection<any>, IndexAccessor>,
  data: unknown[]
) => {
  if (data === null) return

  data.forEach((value, i) => {
    const indexAccessor =
      accessor.get(a => (a as IndexAccessor).index === i) ||
      new IndexAccessor(accessor, i)

    mergeUpdate(indexAccessor, value)
  })
}
