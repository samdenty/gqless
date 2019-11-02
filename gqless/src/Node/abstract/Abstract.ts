import { ObjectNode } from '../ObjectNode'
import { Outputable, IDataContext } from './Outputable'
import { NodeExtension } from '../Extension'
import { ACCESSOR, FragmentAccessor } from '../../Accessor'

export class Abstract<
  TNode extends ObjectNode = ObjectNode
> extends Outputable {
  constructor(public implementations: TNode[], extension?: NodeExtension) {
    super(extension)
  }

  public getData(ctx: IDataContext) {
    // If the value is nulled, return null
    if (ctx.value) {
      if (ctx.value.data === null) return null

      if (ctx.accessor) {
        const fragment = ctx.accessor.getDefaultFragment(ctx.value
          .node as ObjectNode)
        const fragmentAccessor =
          ctx.accessor.get(fragment) ||
          new FragmentAccessor(ctx.accessor, fragment)

        return fragmentAccessor.data
      }
    }

    return new Proxy(
      {},
      {
        get(_, prop: any) {
          // if (accessor.fragmentToResolve) {
          //   const { data } = accessor.fragmentToResolve
          //   return data ? data[prop] : undefined
          // }

          if (prop === ACCESSOR) return ctx.accessor

          if (prop === '__typename') {
            // TODO: Support __typename for react without ofType
            return null
          }

          if (prop === 'toString') return () => this.toString()

          // fallback to extensions
          if (ctx.extensions)
            for (const extension of ctx.extensions) {
              if (prop in extension.data) return extension.data[prop]
            }
        },

        set(_, prop: any, value: any) {
          // if (accessor.fragmentToResolve) {
          //   const { data } = accessor.fragmentToResolve
          //   if (data) data[prop] = value
          //   return true
          // }

          /**
           * else set it on the first extension with the property
           */
          if (ctx.extensions)
            for (const extension of ctx.extensions) {
              if (prop in extension) {
                extension.data[prop] = value
                return true
              }
            }

          return true
        },
      }
    )
  }

  public toString() {
    return this.implementations.join('|')
  }
}
