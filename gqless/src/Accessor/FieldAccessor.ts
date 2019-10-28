import {
  UExtension,
  resolveData,
  ProxyExtension,
  ObjectExtension,
  Extension,
} from '../Node'
import { FieldSelection } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'

export class FieldAccessor<
  TFieldSelection extends FieldSelection<any> = FieldSelection<any>,
  TChildren extends Accessor = Accessor
> extends Accessor<TFieldSelection, TChildren> {
  constructor(public parent: Accessor, fieldSelection: TFieldSelection) {
    super(parent, fieldSelection)

    syncValue(this, this.toString())

    this.loadExtensions()
    this.scheduler.commit.stageUntilValue(this)
  }

  protected initializeExtensions() {
    super.initializeExtensions()

    for (let i = this.parent.extensions.length - 1; i >= 0; --i) {
      const parentExtension = this.parent.extensions[i]
      const extensionRef = parentExtension.childField(this)

      if (!extensionRef) continue

      this.extensions.unshift(extensionRef)
    }
  }

  public get data(): any {
    return resolveData(this.selection.field.ofNode, this)
  }

  public toString() {
    return this.selection.toString()
  }
}
