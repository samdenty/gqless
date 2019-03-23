import { Node, NodeDataType } from '../Node'
import { ObjectNode } from './ObjectNode'

export class UnionNode<
  TNode extends ObjectNode<any, any>,
  DataType = NodeDataType<TNode>
> extends Node<DataType> {
  constructor(public ofNodes: TNode[]) {
    super()
  }
}
