import { computed } from '../../utils'

export class NodeContainer<TNode extends object> {
  constructor(public ofNode: TNode, public nullable = false) {}

  @computed()
  public get innerNode(): object {
    if (this.ofNode instanceof NodeContainer) {
      return this.ofNode.innerNode
    }

    return this.ofNode
  }
}
