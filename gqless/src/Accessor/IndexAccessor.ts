import { ArrayNode } from '../Node'
import { Selection } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'

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
    this.addDisposer(
      this.parent.onStatusChange((_, status) => {
        this.status = status
      })
    )

    syncValue(this, this.toString())

    this.loadExtensions()
    this.scheduler.commit.stageUntilValue(this)
  }

  protected initializeExtensions() {
    super.initializeExtensions()

    for (let i = this.parent.extensions.length - 1; i >= 0; --i) {
      const extensionRef = this.parent.extensions[i].childIndex(this)
      if (!extensionRef) continue

      this.extensions.unshift(extensionRef)
    }
  }

  public getData(): any {
    return this.selection.node.ofNode.getData(this)
  }

  public toString() {
    return `${this.index}`
  }
}
