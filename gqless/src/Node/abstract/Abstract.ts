import { ObjectNode } from '../ObjectNode'
import { ACCESSOR, FragmentAccessor } from '../../Accessor'
import { invariant } from '@gqless/utils'
import {
  DataTrait,
  DataContext,
  getValue,
  getExtensions,
  interceptAccessor,
} from '../traits'

export const getAbstractImplementation = (node: object, typename: string) => {
  if (node instanceof Abstract && typename) {
    const implementation = node._implementations.find(
      i => i.toString() === typename
    )
    invariant(implementation, `'${typename}' is not a valid subtype of ${node}`)
    return implementation
  }

  return
}

export class Abstract<TNode extends ObjectNode = ObjectNode>
  implements DataTrait {
  constructor(public _implementations: TNode[]) {}

  public getData(ctx: DataContext) {
    interceptAccessor(ctx)

    const value = getValue(ctx)

    // If the value is nulled, return null
    if (value) {
      if (value.data === null) return null

      if (ctx.accessor) {
        const fragment = ctx.accessor._getDefaultFragment(
          value.node as ObjectNode
        )
        const fragmentAccessor =
          ctx.accessor._get(fragment) ||
          new FragmentAccessor(ctx.accessor, fragment)

        return fragmentAccessor._data
      }
    }

    return new Proxy(
      {},
      {
        get(_, prop: any) {
          const fragment = ctx.accessor?._fragmentToResolve
          if (fragment) return fragment._data?.[prop]

          if (prop === ACCESSOR) return ctx.accessor

          if (prop === '__typename') {
            return getValue(ctx)?.node.toString()
          }

          if (prop === 'toString') return () => this.toString()

          // fallback to extensions
          for (const extension of getExtensions(ctx)) {
            if (prop in extension._data) return extension._data[prop]
          }
        },

        set(_, prop: any, value: any) {
          const fragment = ctx.accessor?._fragmentToResolve
          if (fragment) {
            const { _data: data } = fragment
            if (data) data[prop] = value
            return true
          }

          // else set it on the first extension with the property
          for (const extension of getExtensions(ctx)) {
            if (prop in extension) {
              extension._data[prop] = value
              return true
            }
          }

          return true
        },
      }
    )
  }

  public toString() {
    return this._implementations.join('|')
  }
}
