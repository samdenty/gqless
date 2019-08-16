import { ScalarNode, ArrayNode } from '../../Node'
import { Value } from '../Value'
import { Accessor } from '../../Accessor'

export const shallowUpdate = (accessor: Accessor, data?: any) => {
  const { parent, node, value } = accessor

  // Update the value if it exists
  if (value) {
    if (data === undefined) return

    if (node instanceof ScalarNode) {
      value.update(data)
      return
    }

    const wasNull = value.data === null
    const isNull = data === null

    if (wasNull === isNull) return

    if (isNull && !wasNull) {
      value.update(null)
      return
    }

    if (wasNull && !isNull) {
      value.update(node instanceof ArrayNode ? [] : {})
      return
    }

    if (node instanceof ArrayNode) {
      // Update the array length (removing values / adding empty elements)
      value.update((value.data as any[]).slice(0, data.length))
      return
    }

    return
  }

  // ensure parent values exist
  shallowUpdate(parent!)

  // initialize a new value
  const accessorValue = new Value(
    node,
    // Only initialize with data if it's a ScalarNode
    node instanceof ScalarNode ? data : node instanceof ArrayNode ? [] : {}
  )

  parent!.value!.set(accessor.toString(), accessorValue)
}
