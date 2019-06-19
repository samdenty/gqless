import { Selection } from '../Selection'
import { Accessor } from './Accessor'
import { ArrayNode, Node, ScalarNode } from '../Node'
import { OF_NODE, IExtension } from '../Extension'

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

  protected getExtensions() {
    super.getExtensions()
    if (this.node instanceof ScalarNode) return

    for (const parentExtension of this.parent.extensions) {
      const extensionOfNode = parentExtension[OF_NODE]
      const extension: IExtension<any> =
        typeof extensionOfNode === 'function'
          ? extensionOfNode(this.data)
          : extensionOfNode
      if (!extension) continue

      this.extensions.push(extension)
    }
  }

  public get data() {
    return this.selection.node.ofNode.getData(this)
  }

  public toString() {
    return this.index
  }
}
