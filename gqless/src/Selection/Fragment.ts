import { Selection } from './Selection'
import { ObjectNode, InterfaceNode } from '../Node'

export type UFragment = ObjectNode | InterfaceNode

export class Fragment<TNode extends UFragment = UFragment> extends Selection<
  TNode
> {
  constructor(node: TNode, public _name?: string) {
    super(node)
  }

  public toString() {
    return this._name || `${this._node || ''}Fragment`
  }
}
