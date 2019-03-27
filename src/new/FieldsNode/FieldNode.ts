import { Node, NodeDataType } from '../Node'
import { NodeContainer } from '../NodeContainer'
import { Arguments } from '../Arguments'
import { ObjectNode, ArrayNode, ScalarNode } from '../nodes'

export class FieldNode<
  T extends Node<any>,
  TArguments extends Arguments<any, any> = never,
  TNullable extends boolean = false
> extends NodeContainer<T, TNullable> {
  public data: NodeDataType<T>

  constructor(node: T, public args?: TArguments, nullable?: TNullable) {
    super(node, nullable)
  }

  public getData(path: string[]) {
    const data =
      this.ofNode instanceof ScalarNode
        ? this.ofNode.getData(path)
        : this.ofNode instanceof ArrayNode
        ? this.ofNode.getData(path)
        : this.ofNode instanceof ObjectNode
        ? this.ofNode.getData(path)
        : null

    if (this.args) {
      return new Proxy(
        () => {
          return data
        },
        {
          get: (_, prop) => {
            return data[prop]
          },
        }
      )
    }

    return data
  }
}
