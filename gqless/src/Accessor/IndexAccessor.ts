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
  protected __resolved = this._parent._resolved

  constructor(public _parent: Accessor<TSelectionArray>, public index: number) {
    super(
      _parent,
      _parent._selection,
      (_parent instanceof IndexAccessor
        ? (_parent._node as ArrayNode<any>)
        : _parent._selection._node
      )._ofNode
    )

    // Sync from parent status
    this._addDisposer(
      this._parent._onStatusChange(status => {
        this._status = status
      })
    )

    this._parent._onResolvedChange(resolved => (this._resolved = resolved))
    syncValue(this, this.toString())
    this._loadExtensions()
    this._scheduler._commit._stageUntilValue(this)
  }

  protected _initializeExtensions() {
    super._initializeExtensions()

    for (let i = this._parent._extensions.length - 1; i >= 0; --i) {
      let extension = this._parent._extensions[i]._childIndex()
      if (!extension) continue

      if (extension instanceof ComputableExtension) {
        extension = new ComputedExtension(extension, this)
      }

      this._extensions.unshift(extension)
    }
  }

  public _getData(ctx?: DataContext): any {
    return (this._selection._node._ofNode as DataTrait).getData({
      accessor: this,
      ...ctx,
    })
  }

  public toString() {
    return `${this.index}`
  }
}
