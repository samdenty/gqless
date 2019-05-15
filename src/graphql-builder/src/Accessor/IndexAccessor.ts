import { Selection } from '../Selection'
import { Accessor } from './Accessor'
import { ArrayNode, Node } from '../Node'

export class IndexAccessor<
  TSelectionArray extends Selection<ArrayNode<any, any>> = Selection<
    ArrayNode<any, any>
  >,
  TChildren extends Accessor = Accessor
> extends Accessor<TSelectionArray, TChildren> {
  constructor(public parent: Accessor<TSelectionArray>, public index: number) {
    super(
      parent,
      parent.selection,
      (parent instanceof IndexAccessor
        ? (parent.node as ArrayNode<any>)
        : parent.selection.node
      ).ofNode
    )
  }

  // This should eventually move out of a getter and instead be static updating on changes
  public get value() {
    const parentValue = this.parent.value
    if (!parentValue) return undefined

    return parentValue.get(this.toString())
  }

  public getData() {
    return this.selection.node.ofNode.getData(this)
  }

  public toString() {
    return this.index
  }
}
