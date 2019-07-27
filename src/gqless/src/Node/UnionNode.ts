import { Node, NodeDataType } from './abstract'
import { ObjectNode } from './ObjectNode'
import { InterfaceNode } from './InterfaceNode'

export type UUnionNode =
  | ObjectNode<any, any, any>
  | InterfaceNode<any, any, any>

export class UnionNode<
  TNode extends UUnionNode = UUnionNode,
  DataType = NodeDataType<TNode>
> extends Node<DataType> {
  constructor(public ofNodes: TNode[]) {
    super()
  }

  public createProxy() {
    return new Proxy(
      {},
      {
        get: (_, prop) => {
          console.log(prop)
        },
      }
    )
  }
}
