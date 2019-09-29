import { ObjectNode } from '../ObjectNode'
import { Outputable } from './Outputable'
import { Extension } from '../Extension'
import { Accessor, ACCESSOR } from '../../Accessor'

export class Abstract<
  TNode extends ObjectNode = ObjectNode
> extends Outputable {
  constructor(public implementations: TNode[], extension?: Extension) {
    super(extension)
  }

  public getData(accessor: Accessor) {
    super.getData(accessor)

    // If the value is nulled, return null
    if (accessor.value && accessor.value!.data === null) {
      return null
    }

    return new Proxy(
      {},
      {
        get(_, prop: any) {
          if (prop === ACCESSOR) return accessor

          // fallback to extensions
          for (const extension of accessor.extensions) {
            if (prop in extension) return extension[prop]
          }
        },

        set(_, prop: any, value: any) {
          /**
           * else set it on the first extension with the property
           */
          for (const extension of accessor.extensions) {
            if (prop in extension) {
              extension[prop] = value
              return true
            }
          }

          return true
        },
      }
    )
  }
}
