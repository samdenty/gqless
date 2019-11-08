import { computed } from '../../utils'

export class NodeContainer<TNode extends object> {
  constructor(public _ofNode: TNode, public _nullable = false) {}

  @computed()
  public get innerNode(): object {
    if (this._ofNode instanceof NodeContainer) {
      return this._ofNode.innerNode
    }

    return this._ofNode
  }
}
