import { Selection } from './Selection'
import { FieldSelection } from './FieldSelection'
import { ObjectNode } from '../Node'
import { RootAccessor } from '../Accessor'

export class RootSelection<
  TNode extends ObjectNode<any, any, any> = ObjectNode<any, any, any>
> extends Selection<TNode, FieldSelection<any>> {
  public root = this

  constructor(node: TNode) {
    super(undefined, node)
  }

  public createProxy(accessor: RootAccessor): ReturnType<TNode['getData']> {
    return this.node.getData(accessor) as any
  }

  public toString() {
    return this.node.name || 'Root'
  }
}
