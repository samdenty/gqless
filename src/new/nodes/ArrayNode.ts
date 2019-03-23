import { NodeContainer } from '../NodeContainer'
import { Node, NodeDataType } from '../Node'

export class ArrayNode<
  TNode extends Node<any>,
  TNullable extends boolean = false
> extends NodeContainer<TNode, TNullable, NodeDataType<TNode>[]> {
  constructor(ofNode: TNode, nullable?: TNullable) {
    super(ofNode, nullable)
  }
}
