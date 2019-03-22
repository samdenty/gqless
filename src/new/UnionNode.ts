import { Query } from '../Query'
import { NodeContainer } from './NodeContainer'
import { UInputNode, UInputNodeDataType } from './InputNode'
import { UObjectNode, UObjectNodeDataType } from './ObjectNode'

export class UnionNode<
  TNode extends UInputNode | UObjectNode,
  TNullable extends boolean = false
> extends NodeContainer<
  TNode,
  TNullable,
  TNode extends UObjectNode
    ? UObjectNodeDataType<TNode>[]
    : TNode extends UInputNode
    ? UInputNodeDataType<TNode>[]
    : never
> {
  constructor(query: Query, ofNode: TNode, nullable?: TNullable) {
    super(query, ofNode, nullable)
  }
}
