import { Node, NodeDataType } from '../Node'
import { NodeContainer } from '../NodeContainer'
import { Arguments } from '../Arguments'

export class FieldNode<
  T extends Node<any>,
  TArguments extends Arguments<any>,
  TNullable extends boolean = false
> extends NodeContainer<T, TNullable> {
  public data: NodeDataType<T>

  constructor(node: T, public args?: TArguments, nullable?: TNullable) {
    super(node, nullable)
  }
}
