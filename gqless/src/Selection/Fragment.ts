import { Selection } from './Selection'
import { ObjectNode } from '../Node'

export class Fragment<TNode extends ObjectNode = ObjectNode> extends Selection<
  TNode
> {
  constructor(node: TNode, public name?: string) {
    super(node)
  }

  public toString() {
    return this.name || `${this.node || ''}Fragment`
  }
}
