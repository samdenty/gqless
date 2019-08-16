import { computed } from '../../utils'
import { Node, NodeDataType } from './Node'

export class NodeContainer<
  TNode extends Node,
  TData = NodeDataType<TNode>
> extends Node<TData> {
  constructor(public ofNode: TNode, public nullable = false) {
    super()
  }

  @computed()
  public get innerNode(): Node<any> {
    if (this.ofNode instanceof NodeContainer) {
      return this.ofNode.innerNode
    }

    return this.ofNode
  }
}
