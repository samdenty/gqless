import { NodeContainer } from '../NodeContainer'
import { Node, NodeDataType } from '../Node'
import { ObjectNode } from './ObjectNode'

export class ArrayNode<
  TNode extends Node<any>,
  TNullable extends boolean = false
> extends NodeContainer<TNode, TNullable, NodeDataType<TNode>[]> {
  constructor(ofNode: TNode, nullable?: TNullable) {
    super(ofNode, nullable)
  }

  public getData(path: string[]) {
    // const getData = this.ofNode instanceof ObjectNode ? this.ofNode.getData : null

    const proxy = new Proxy([], {
      get: (target, prop) => {
        if (prop === 'length') {
          return 1
        }

        if (typeof prop === 'string' && !isNaN(+prop)) {
          return this.ofNode instanceof ObjectNode
            ? this.ofNode.getData([...path, prop])
            : null
        }

        if (typeof target[prop] === 'function') {
          return target[prop].bind(proxy)
        }

        return target[prop]
      },
      has: (target, prop) => {
        if (typeof prop === 'string' && !isNaN(+prop)) {
          return true
        }

        return prop in target
      },
    })

    return proxy
  }
}
