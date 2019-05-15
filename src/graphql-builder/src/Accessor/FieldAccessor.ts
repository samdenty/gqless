import { FieldSelection } from '../Selection'
import { Accessor } from './Accessor'

export class FieldAccessor<
  TFieldSelection extends FieldSelection<any> = FieldSelection<any>,
  TChildren extends Accessor = Accessor
> extends Accessor<TFieldSelection, TChildren> {
  constructor(public parent: Accessor, fieldSelection: TFieldSelection) {
    super(parent, fieldSelection)
  }

  public get value() {
    const parentValue = this.parent.value
    if (!parentValue) return undefined

    return parentValue.get(this.toString())
  }

  public getData() {
    return this.selection.field.ofNode.getData(this)
  }

  public toString() {
    return this.selection.toString()
  }
}
