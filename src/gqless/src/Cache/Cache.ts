import { createEvent } from '@gqless/utils'
import { Accessor, RootAccessor } from '../Accessor'
import { Value } from './Value'
import { ArrayNode, ScalarNode } from '../Node'

export class Cache {
  public store = new Map<string, Value>()
  constructor() {}

  public toJSON() {
    const obj: any = {}

    this.store.forEach((value, key) => {
      obj[key] = value.toJSON()
    })

    return obj
  }

  public onUpdate = createEvent()

  public update(accessor: Accessor, data: any) {
    const createValue = (accessor: Accessor, data?: any) => {
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

      // Value doesn't exist, recurse up and create parent values (if they don't already exist)
      createValue(parent!)

      // Create a new value
      const accessorValue = new Value(
        node,
        // Only initialize with data if it's a ScalarNode
        node instanceof ScalarNode ? data : node instanceof ArrayNode ? [] : {}
      )

      parent!.value!.set(accessor.toString(), accessorValue)
    }

    createValue(accessor, data)
  }
}
