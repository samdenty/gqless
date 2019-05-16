import { onEvent } from '../utils'
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

  public onUpdate = onEvent()

  public update(accessor: Accessor, value: any) {
    const createValue = (accessor: Accessor) => {
      if (accessor.value) return

      createValue(accessor.parent!)

      const accessorValue = new Value(
        accessor.node,
        accessor.node instanceof ScalarNode
          ? value
          : accessor.node instanceof ArrayNode
            ? []
            : {}
      )

      accessor.parent!.value!.set(accessor.toString(), accessorValue)
    }

    createValue(accessor)

    // console.groupCollapsed(accessor.path.toString(), value)
    // console.log(accessor)
    // console.groupEnd()
  }
}
