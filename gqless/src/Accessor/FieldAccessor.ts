import { IExtension } from '../Node'
import { FieldSelection } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'

export class FieldAccessor<
  TFieldSelection extends FieldSelection<any> = FieldSelection<any>,
  TChildren extends Accessor = Accessor
> extends Accessor<TFieldSelection, TChildren> {
  constructor(public parent: Accessor, fieldSelection: TFieldSelection) {
    super(parent, fieldSelection)

    syncValue(this, value => value.get(this.toString()))

    this.loadExtensions()
    this.scheduler.commit.stageUntilValue(this)
  }

  protected initializeExtensions() {
    super.initializeExtensions()

    for (let i = this.parent.extensions.length - 1; i >= 0; --i) {
      const parentExtension = this.parent.extensions[i]

      const extensionField = parentExtension[this.selection.field.name]
      const extension: IExtension<any> =
        typeof extensionField === 'function'
          ? extensionField(this.data)
          : extensionField
      if (!extension) continue

      this.extensions.unshift(extension)
    }
  }

  public get data() {
    return this.selection.field.ofNode.getData(this)
  }

  public toString() {
    return this.selection.toString()
  }
}
