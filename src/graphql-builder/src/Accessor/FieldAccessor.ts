import { FieldSelection } from '../Selection'
import { Accessor } from './Accessor'

export class FieldAccessor<
  TFieldSelection extends FieldSelection<any> = FieldSelection<any>,
  TChildren extends Accessor = Accessor
> extends Accessor<TFieldSelection, TChildren> {
  constructor(public parent: Accessor, fieldSelection: TFieldSelection) {
    super(parent, fieldSelection)
  }

  public getData() {
    return this.selection.field.ofNode.getData(this)
  }

  public toString() {
    return this.selection.toString()
  }

  protected computeValue() {
    if (this.parent.value === undefined || this.parent.value === null)
      return undefined

    return this.parent.value[this.selection.dataProp]
  }
}
