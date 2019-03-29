import { Node, NodeDataType } from '../Node'
import { ObjectNode } from './ObjectNode'
import { InterfaceNode } from './InterfaceNode'

type UUnionNode = ObjectNode<any, any, any> | InterfaceNode<any, any, any>

export class UnionNode<
  TNode extends UUnionNode,
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
