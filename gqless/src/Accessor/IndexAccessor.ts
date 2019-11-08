import {
  ArrayNode,
  ComputableExtension,
  ComputedExtension,
  DataTrait,
  DataContext,
} from '../Node'
import { Selection } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'

export class IndexAccessor<
  TSelectionArray extends Selection<ArrayNode<any>> = Selection<ArrayNode<any>>,
  TChildren extends Accessor = Accessor
> extends Accessor<TSelectionArray, TChildren> {
  protected __resolved = this.parent._resolved

  constructor(public parent: Accessor<TSelectionArray>, public index: number) {
    super(
      parent,
      parent.selection,
      (parent instanceof IndexAccessor
        ? (parent.node as ArrayNode<any>)
        : parent.selection.node
      )._ofNode
    )

    // Sync from parent status
    this.addDisposer(
      this.parent.onStatusChange(status => {
        this.status = status
      })
    )

    this.parent._onResolvedChange(resolved => (this._resolved = resolved))
    syncValue(this, this.toString())
    this._loadExtensions()
    this.scheduler._commit._stageUntilValue(this)
  }

  protected _initializeExtensions() {
    super._initializeExtensions()

    for (let i = this.parent.extensions.length - 1; i >= 0; --i) {
      let extension = this.parent.extensions[i]._childIndex()
      if (!extension) continue

      if (extension instanceof ComputableExtension) {
        extension = new ComputedExtension(extension, this)
      }

      this.extensions.unshift(extension)
    }
  }

  public getData(ctx?: DataContext): any {
    return (this.selection.node._ofNode as DataTrait).getData({
      accessor: this,
      ...ctx,
    })
  }

  public toString() {
    return `${this.index}`
  }
}
