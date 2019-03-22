import { NodeContainer } from '../NodeContainer'
import { Query } from '../../Query'
import { UInputNode, UInputNodeDataType } from './InputNode'

export class InputNodeField<
  TNode extends UInputNode,
  TNullable extends boolean = false
> extends NodeContainer<TNode, TNullable> {
  public values: UInputNodeDataType<TNode>[]

  constructor(query: Query, node: TNode, nullable?: TNullable) {
    super(query, node, nullable)
  }
}
