import { FieldSelection } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'
import {
  ComputableExtension,
  ComputedExtension,
  DataTrait,
  DataContext,
} from '../Node'

export class FieldAccessor extends Accessor<FieldSelection> {
  protected _resolved = this.parent.resolved

  constructor(public parent: Accessor, fieldSelection: FieldSelection) {
    super(parent, fieldSelection)

    this.parent.onResolvedChange(resolved => (this.resolved = resolved))
    syncValue(this, this.toString())
    this.loadExtensions()
    this.scheduler.commit.stageUntilValue(this)
  }

  protected initializeExtensions() {
    super.initializeExtensions()

    for (let i = this.parent.extensions.length - 1; i >= 0; --i) {
      let extension = this.parent.extensions[i].childField(this.selection.field)
      if (!extension) continue

      if (extension instanceof ComputableExtension) {
        extension = new ComputedExtension(extension, this)
      }

      this.extensions.unshift(extension)
    }
  }

  public getData(ctx?: DataContext): any {
    return (this.selection.field.ofNode as DataTrait).getData({
      accessor: this,
      ...ctx,
    })
  }

  public toString() {
    return this.selection.toString()
  }
}
