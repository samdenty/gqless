import { Selection } from './Selection'
import { Node } from '../Node'

export class SelectionIndex<TNode extends Node<any>> extends Selection<TNode> {
  constructor(parent: Selection<any>, node: TNode, public index: number) {
    super(parent, node)

    this.disposers.push(parent.onValueChange(() => this.recomputeValue()))
    this.computeValue()
  }

  protected computeValue() {
    super.computeValue()
    const parentArr = this.parent.value
    this.value = parentArr && parentArr[this.index]
  }

  public toString() {
    return `${this.index}`
  }
}
