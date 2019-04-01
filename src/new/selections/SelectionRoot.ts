import { Selection } from './Selection'
import { SelectionField } from './SelectionField'
import { ObjectNode } from '../nodes'

export class SelectionRoot<
  TNode extends ObjectNode<any, any, any>
> extends Selection<TNode, SelectionField<any>> {
  constructor(node: TNode) {
    super(null, node)
  }

  public createProxy() {
    return this.node.getData(this) as ReturnType<TNode['getData']>
  }
}
