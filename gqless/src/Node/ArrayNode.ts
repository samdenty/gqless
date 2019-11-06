import { Generic, Mix } from 'mix-classes'

import { IndexAccessor } from '../Accessor'
import { ACCESSOR, getAccessorData } from './../Accessor'
import {
  NodeContainer,
  Matchable,
} from './abstract'
import { Value } from '../Cache'
import { ArrayNodeExtension } from './Extension'
import { createMemo } from '@gqless/utils'
import { DataTrait, DataContext, getValue, getExtensions, interceptAccessor } from './traits'

export interface ArrayNode<TNode extends object = object>
  extends NodeContainer<TNode> {}

const memo = createMemo()

export class ArrayNode<TNode> extends Mix(
  Generic(NodeContainer),
  Matchable
) implements DataTrait {
  constructor(ofNode: TNode, nullable?: boolean) {
    // memoize instances of ArrayNode
    const existingNode = memo<ArrayNode<TNode>>([ofNode, nullable])
    if (existingNode) return existingNode

    super([ofNode, nullable])

    memo(() => this, [ofNode, nullable])
  }

  public match(value: Value, data: any) {
    const result = super.match(value, data)
    if (result !== undefined) return result

    // Whole array match
    if (Array.isArray(data)) {
      if (data.length !== (value.data! as []).length) return

      const badMatch = data.find((match, i) => {
        const indexValue = value.get(i)
        if (!indexValue) return true

        if (!(indexValue.node instanceof Matchable)) return

        return !indexValue.node.match(indexValue, data[i])
      })
      if (badMatch) return

      return value
    }

    // Array index match
    const innerNode = (value.node as ArrayNode).innerNode
    if (!(innerNode instanceof Matchable)) return

    for (const indexValue of value.data as []) {
      const match = innerNode.match(indexValue, data)
      if (match) return match
    }

    return
  }

  public getData(
    ctx: DataContext<ArrayNode<TNode>>
  ) {
    interceptAccessor(ctx)

    const proxy: any[] = new Proxy([] as any[], {
      get: (target, prop: any) => {
        if (prop === ACCESSOR) return ctx.accessor
        const arr = getValue(ctx)?.data as any[] | undefined

        if (prop === 'length') {
          return arr?.length ?? 1
        }

        if (prop === 'toString') {
          return () => this.toString()
        }

        if (typeof prop === 'string') {
          const index = +prop

          if (!isNaN(index)) {
            // If the array is fetched, make sure index exists
            if (arr && index >= arr!.length) return undefined

            if (ctx.accessor) {
              const accessor: IndexAccessor =
                ctx.accessor.get(index) ||
                new IndexAccessor(ctx.accessor, index)

              return getAccessorData(accessor)
            }

            return (this.ofNode as any as DataTrait).getData({
              value: ctx.value?.get(index),
              selection: ctx.selection,
              extensions: [] // todo
            })
          }
        }

        // fallback to extensions
        for (const extension of getExtensions(ctx)) {
          if (prop in extension.data) return (extension.data as ArrayNodeExtension)[prop]
        }

        const arrayProperty = target[prop]
        if (typeof arrayProperty === 'function') {
          return arrayProperty.bind(proxy)
        }

        return arrayProperty
      },
      has: (target, prop) => {
        const value = getValue(ctx)
        if (value) {
          return value.data ? prop in (value.data as any[]) : false
        }

        // todo read value
        if (typeof prop === 'string' && !isNaN(+prop)) {
          return true
        }

        return prop in target
      },
    })

    return proxy
  }

  public toString() {
    return `[${this.ofNode}${this.nullable ? '' : '!'}]`
  }
}
