import { FieldSelection } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'
import {
  ComputableExtension,
  ComputedExtension,
  DataTrait,
  DataContext,
} from '../Node'

export class FieldAccessor<
  TFieldSelection extends FieldSelection<any> = FieldSelection<any>,
  TChildren extends Accessor = Accessor
> extends Accessor<TFieldSelection, TChildren> {
  protected __resolved = this._parent._resolved

  constructor(public _parent: Accessor, fieldSelection: TFieldSelection) {
    super(_parent, fieldSelection)

    this._parent._onResolvedChange(resolved => (this._resolved = resolved))
    syncValue(this, this.toString())
    this._loadExtensions()
    this._scheduler._commit._stageUntilValue(this)
  }

  protected _initializeExtensions() {
    super._initializeExtensions()

    for (let i = this._parent._extensions.length - 1; i >= 0; --i) {
      let extension = this._parent._extensions[i]._childField(
        this._selection._field
      )
      if (!extension) continue

      if (extension instanceof ComputableExtension) {
        extension = new ComputedExtension(extension, this)
      }

      this._extensions.unshift(extension)
    }
  }

  public _getData(ctx?: DataContext): any {
    return (this._selection._field._ofNode as DataTrait).getData({
      accessor: this,
      ...ctx,
    })
  }

  public toString() {
    return this._selection.toString()
  }
}
