import { Accessor, FieldAccessor, IndexAccessor } from '../../Accessor'
import {
  ArrayNode,
  FieldsNode,
  InterfaceNode,
  ObjectNode,
  UnionNode,
  Node,
} from '../../Node'
import { Selection, FieldSelection, Fragment } from '../../Selection'
import { shallowUpdate } from './shallowUpdate'

export const mergeUpdate = (accessor: Accessor<any, any>, data: any) => {
  shallowUpdate(accessor, data)

  if (accessor.node instanceof FieldsNode) {
    return mergeFields(accessor, data)
  }

  if (accessor.node instanceof ArrayNode) {
    return mergeArray(accessor, data)
  }
}

const mergeFields = (
  accessor: Accessor<Selection<ObjectNode | InterfaceNode | UnionNode>>,
  data: Record<string, any> | null
) => {
  if (data === null) return

  Object.entries(data).forEach(([key, value]) => {
    // TODO: Handle only for InterfaceNode
    if (key === '__typename') return

    // Search for an existing accessor matching
    // the given key
    let fieldAccessor = accessor.getChild(a => a.toString() === key)

    if (!fieldAccessor) {
      // Need to find a selection, for a new accessor
      let fieldSelection = accessor.selection.get(
        s => s.toString() === key
      ) as FieldSelection

      if (!fieldSelection) {
        let node: Node

        if (value && '__typename' in value) {
          // TODO: Fragment selection
        }

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
      accessor.getChild(a => a.index === i) || new IndexAccessor(accessor, i)

    mergeUpdate(indexAccessor, value)
  })
}
