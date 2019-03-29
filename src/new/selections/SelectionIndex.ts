import { Selection } from './Selection'
import { Node } from '../Node'

export class SelectionIndex<TNode extends Node<any>> extends Selection<TNode> {
  constructor(parent: Selection<any>, node: TNode, public index: number) {
    super(parent, node)
  }

  public get value() {
    const parentArr = this.parent.value

    return parentArr && parentArr[this.index]
  }
}
