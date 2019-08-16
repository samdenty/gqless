import { Generic, Mix } from 'mix-classes'

import { Accessor, IndexAccessor } from '../Accessor'
import { Selection } from '../Selection'
import { ACCESSOR } from './../Accessor/Accessor'
import { Node, NodeContainer, NodeDataType, Outputable } from './abstract'

export interface ArrayNode<TNode extends Node<any>>
  extends NodeContainer<TNode, NodeDataType<TNode>[]> {}

export class ArrayNode<TNode> extends Mix(Generic(NodeContainer), Outputable) {
  constructor(ofNode: TNode, nullable?: boolean) {
    super([ofNode, nullable])
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
          return arr ? arr!.length : 1
        }

        if (typeof prop === 'string') {
          const index = +prop

          if (!isNaN(index)) {
            // If the array is fetched, make sure index exists
            if (arr && index >= arr!.length) return undefined
            if (!(this.ofNode instanceof Outputable)) return undefined

            const accessor =
              arrayAccessor.getChild(a => a.index === index) ||
              new IndexAccessor(arrayAccessor, index)

            return this.ofNode.getData(accessor)
          }
        }

        // fallback to extensions
        for (let i = arrayAccessor.extensions.length - 1; i >= 0; --i) {
          const extension = arrayAccessor.extensions[i]
          if (prop in extension) return extension[prop]
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
}
