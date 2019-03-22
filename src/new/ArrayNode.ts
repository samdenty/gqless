import { Query } from '../Query'
import { NodeContainer } from './NodeContainer'
import { UInputNode, UInputNodeDataType } from './InputNode'
import { UObjectNode, UObjectNodeDataType } from './ObjectNode'

export class ArrayNode<
  TNode extends UInputNode | UObjectNode,
  TNullable extends boolean = false
> extends NodeContainer<TNode, TNullable> {
  public $$type: TNode extends UInputNode
    ? UInputNodeDataType<TNode>[]
    : TNode extends UObjectNode
    ? UObjectNodeDataType<TNode>[]
    : never

  constructor(query: Query, ofNode: TNode, nullable?: TNullable) {
    super(query, ofNode, nullable)
  }
}
