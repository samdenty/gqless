import { NodeContainer, Node, NodeDataType } from './abstract'
import { ObjectNode } from './ObjectNode'
import { Selection, SelectionIndex } from '../Selection'

export class ArrayNode<
  TNode extends Node<any>,
  TNullable extends boolean = false
> extends NodeContainer<TNode, TNullable, NodeDataType<TNode>[]> {
  constructor(ofNode: TNode, nullable?: TNullable) {
    super(ofNode, nullable)
  }

  public getData(
    selection: Selection<ArrayNode<TNode, TNullable>, SelectionIndex<any>>
  ) {
    // const getData = this.ofNode instanceof ObjectNode ? this.ofNode.getData : null

    const proxy = new Proxy([], {
      get: (target, prop) => {
        const arr = selection.value

        if (prop === 'length') {
          return arr ? arr.length : 1
        }

        if (typeof prop === 'string') {
          const index = +prop

          if (!isNaN(index)) {
            // If the array is fetched, make sure index exists
            if (arr && index >= arr.length) return undefined

            const selectionIndex = selection.getSelection(
              s => s.index === index,
              () => new SelectionIndex(selection, this.ofNode, index)
            )

            return this.ofNode instanceof ObjectNode
              ? this.ofNode.getData(selectionIndex)
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
        if (selection.value) {
          return prop in selection.value
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
