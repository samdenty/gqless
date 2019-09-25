import { ArrayNode, IExtension, INDEX, ScalarNode } from '../Node'
import { Selection } from '../Selection'
import { Accessor } from './Accessor'

export class IndexAccessor<
  TSelectionArray extends Selection<ArrayNode<any>> = Selection<ArrayNode<any>>,
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

    // Sync from parent status
    this.disposer(
      this.parent.onStatusChange((_, status) => {
        this.status = status
      })
    )

    this.syncValue(value => value.get(this.toString()))
    this.loadExtensions()
    this.stageIfRequired()
  }

  protected initializeExtensions() {
    super.initializeExtensions()

    for (let i = this.parent.extensions.length - 1; i >= 0; --i) {
      const parentExtension = this.parent.extensions[i]

      const extensionOfNode = parentExtension[INDEX]
      const extension: IExtension<any> =
        typeof extensionOfNode === 'function'
          ? extensionOfNode(this.data)
          : extensionOfNode
      if (!extension) continue

      this.extensions.unshift(extension)
    }
  }

  public get data() {
    return this.selection.node.ofNode.getData(this)
  }

  public toString() {
    return `${this.index}`
  }
}
