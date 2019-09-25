import { Node, NodeDataType, Outputable } from './abstract'
import { ObjectNode } from './ObjectNode'
import { InterfaceNode } from './InterfaceNode'
import { Generic, Mix } from 'mix-classes'

export type UUnionNode = ObjectNode<any> | InterfaceNode<any>

export interface UnionNode<
  TNode extends UUnionNode = UUnionNode,
  DataType = NodeDataType<TNode>
> extends Node<DataType> {}

export class UnionNode<TNode, DataType> extends Mix(Outputable, Generic(Node)) {
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
