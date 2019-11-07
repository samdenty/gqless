import { Abstract } from './abstract'
import { ObjectNode } from './ObjectNode'

export class UnionNode<TNode extends ObjectNode = ObjectNode> extends Abstract {
  constructor(ofNodes: TNode[]) {
    super(ofNodes)
  }
}
