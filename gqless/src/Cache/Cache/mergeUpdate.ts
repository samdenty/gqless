import { Accessor, FieldAccessor, IndexAccessor } from '../../Accessor'
import { ArrayNode, FieldsNode, InterfaceNode, ObjectNode, UnionNode } from '../../Node'
import { Selection } from '../../Selection'
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
  data: Record<string, unknown>
) => {
  if (data === null) return

  Object.entries(data).forEach(([dataProp, value]) => {
    // __typename is not a selection, but handled internally
    if (dataProp === '__typename') return

    let fieldAccessor = accessor.getChild(
      ({ selection }) => selection.dataProp === dataProp
    )

    if (!fieldAccessor) {
      const subSelection = accessor.selection.getField(
        s => s.dataProp === dataProp
      )

      if (!subSelection) {
        const dataPropMatch = dataProp.match(/^(.+)__(\d)$/)
        if (!dataPropMatch) {
          console.error(
            `Couldn't locate selection ${accessor.path}.${dataProp}`
          )
          return
        }
        const [_, fieldName, alias] = dataPropMatch

        console.error(
          `Couldn't locate selection ${
            accessor.path
          }.${fieldName} [alias=${alias}]`
        )

        return
      }

      fieldAccessor = new FieldAccessor(accessor, subSelection)
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
