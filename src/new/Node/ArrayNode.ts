import { NodeContainer, Node, NodeDataType, Outputable } from './abstract'
import { ObjectNode } from './ObjectNode'
import { Selection } from '../Selection'
import { Accessor, IndexAccessor } from '../Accessor'
import { Mix, Generic } from 'mix-classes'

export interface ArrayNode<TNode extends Node<any>, TNullable extends boolean>
  extends NodeContainer<TNode, TNullable, NodeDataType<TNode>[]> {}

export class ArrayNode<
  TNode extends Node<any>,
  TNullable extends boolean = false
> extends Mix(Generic(NodeContainer), Outputable) {
  constructor(ofNode: TNode, nullable?: TNullable) {
    super([ofNode, nullable])
  }

  public getData(
    arrayAccessor: Accessor<
      Selection<ArrayNode<TNode, TNullable>>,
      IndexAccessor
    >
  ) {
    const proxy = new Proxy([], {
      get: (target, prop) => {
        const arr = null //accessor.value

        if (prop === 'length') {
          return arr ? arr.length : 1
        }

        if (typeof prop === 'string') {
          const index = +prop

          if (!isNaN(index)) {
            // If the array is fetched, make sure index exists
            if (arr && index >= arr.length) return undefined

            const accessor =
              arrayAccessor.getChild(a => a.index === index) ||
              new IndexAccessor(arrayAccessor, index)

            return this.ofNode instanceof ObjectNode
              ? this.ofNode.getData(accessor)
              : null
          }
        }

        if (typeof target[prop] === 'function') {
          return target[prop].bind(proxy)
        }

        return target[prop]
      },
      has: (target, prop) => {
        // If the array is fetched, check against it
        // if (accessor.value) {
        //   return prop in accessor.value
        // }

        if (typeof prop === 'string' && !isNaN(+prop)) {
          return true
        }

        return prop in target
      },
    })

    return proxy
  }
}
