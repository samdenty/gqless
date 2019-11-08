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
  protected __resolved = this.parent._resolved

  constructor(public parent: Accessor, fieldSelection: TFieldSelection) {
    super(parent, fieldSelection)

    this.parent._onResolvedChange(resolved => (this._resolved = resolved))
    syncValue(this, this.toString())
    this._loadExtensions()
    this.scheduler._commit._stageUntilValue(this)
  }

  protected _initializeExtensions() {
    super._initializeExtensions()

    for (let i = this.parent.extensions.length - 1; i >= 0; --i) {
      let extension = this.parent.extensions[i]._childField(
        this.selection.field
      )
      if (!extension) continue

      if (extension instanceof ComputableExtension) {
        extension = new ComputedExtension(extension, this)
      }

      this.extensions.unshift(extension)
    }
  }

  public getData(ctx?: DataContext): any {
    return (this.selection.field._ofNode as DataTrait).getData({
      accessor: this,
      ...ctx,
    })
  }

  public toString() {
    return this.selection.toString()
  }
}
