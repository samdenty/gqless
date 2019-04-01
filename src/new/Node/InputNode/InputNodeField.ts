import { NodeContainer } from '../abstract'
import { UInputNode } from './InputNode'

export class InputNodeField<
  TNode extends UInputNode,
  TNullable extends boolean = false
> extends NodeContainer<TNode, TNullable> {
  constructor(node: TNode, nullable?: TNullable) {
    super(node, nullable)
  }
}
