import { Generic, Mix } from 'mix-classes'

import { Accessor, IndexAccessor } from '../Accessor'
import { Selection } from '../Selection'
import { ACCESSOR, getAccessorData } from './../Accessor'
import {
  Node,
  NodeContainer,
  NodeDataType,
  Outputable,
  Matchable,
} from './abstract'
import { Value } from '../Cache'
import { ArrayExtension } from './Extension'
import { createMemo } from '@gqless/utils'

export interface ArrayNode<TNode extends Node = Node>
  extends NodeContainer<TNode, NodeDataType<TNode>[]> {}

const memo = createMemo()

export class ArrayNode<TNode> extends Mix(
  Generic(NodeContainer),
  Matchable,
  Outputable
) {
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
    const innerNode: Node = (value.node as ArrayNode).innerNode
    if (!(innerNode instanceof Matchable)) return

    for (const indexValue of value.data as []) {
      const match = innerNode.match(indexValue, data)
      if (match) return match
    }

    return
  }

  public getData(
    arrayAccessor: Accessor<Selection<ArrayNode<TNode>>, IndexAccessor>
  ) {
    super.getData(arrayAccessor)

    const proxy: any[] = new Proxy([] as any[], {
      get: (target, prop: any) => {
        if (prop === ACCESSOR) return arrayAccessor

        const arr = arrayAccessor.value && (arrayAccessor.value.data as any[])

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
            if (!(this.ofNode instanceof Outputable)) return undefined

            const accessor: IndexAccessor =
              arrayAccessor.get(index) ||
              new IndexAccessor(arrayAccessor, index)

            return getAccessorData(accessor)
          }
        }

        // fallback to extensions
        for (const extension of arrayAccessor.extensions) {
          if (prop in extension.data) return (extension.data as ArrayExtension)[prop]
        }

        if (typeof target[prop] === 'function') {
          return target[prop].bind(proxy)
        }

        return target[prop]
      },
      has: (target, prop) => {
        if (arrayAccessor.value) {
          if (arrayAccessor.value.data) {
            return prop in (arrayAccessor.value.data as any[])
          }

          return false
        }

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
