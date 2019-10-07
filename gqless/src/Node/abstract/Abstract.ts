import { ObjectNode } from '../ObjectNode'
import { Outputable } from './Outputable'
import { Extension, ObjectExtension } from '../Extension'
import { Accessor, ACCESSOR, FragmentAccessor } from '../../Accessor'

export class Abstract<
  TNode extends ObjectNode = ObjectNode
> extends Outputable {
  constructor(public implementations: TNode[], extension?: Extension) {
    super(extension)
  }

  public getData(accessor: Accessor) {
    super.getData(accessor)

    // If the value is nulled, return null
    if (accessor.value) {
      if (accessor.value.data === null) return null

      const fragment = accessor.getDefaultFragment(accessor.value
        .node as ObjectNode)
      const fragmentAccessor =
        accessor.get(a => a.selection === fragment) ||
        new FragmentAccessor(accessor, fragment)

      return fragmentAccessor.data
    }

    return new Proxy(
      {},
      {
        get(_, prop: any) {
          if (accessor.fragmentToResolve) {
            const { data } = accessor.fragmentToResolve
            return data ? data[prop] : undefined
          }

          if (prop === ACCESSOR) return accessor

          if (prop === '__typename') {
            // TODO: Support __typename for react without ofType
            return null
          }

          // fallback to extensions
          for (const extension of accessor.extensions) {
            if (prop in extension) return extension[prop]
          }
        },

        set(_, prop: any, value: any) {
          if (accessor.fragmentToResolve) {
            const { data } = accessor.fragmentToResolve
            if (data) data[prop] = value
            return true
          }

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
