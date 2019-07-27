import { FieldSelection } from '../Selection'
import { Accessor } from './Accessor'
import { ScalarNode } from '../Node'
import { IExtension } from '../Extension'

export class FieldAccessor<
  TFieldSelection extends FieldSelection<any> = FieldSelection<any>,
  TChildren extends Accessor = Accessor
> extends Accessor<TFieldSelection, TChildren> {
  constructor(public parent: Accessor, fieldSelection: TFieldSelection) {
    super(parent, fieldSelection)
  }

  protected getExtensions() {
    super.getExtensions()
    if (this.node instanceof ScalarNode) return

    for (const parentExtension of this.parent.extensions) {
      const extensionField = parentExtension[this.selection.field.name]
      const extension: IExtension<any> =
        typeof extensionField === 'function'
          ? extensionField(this.data)
          : extensionField
      if (!extension) continue

      this.extensions.push(extension)
    }
  }

  public get data() {
    return this.selection.field.ofNode.getData(this)
  }

  public toString() {
    return this.selection.toString()
  }
}
