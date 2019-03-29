import { Selection } from './Selection'
import { Node } from '../Node'

export class SelectionField<
  TNode extends Node<any>,
  S extends Selection<any, any> = Selection<any, any>
> extends Selection<TNode, S> {
  public alias: string = null

  constructor(parent: Selection<any>, node: TNode, public field: string) {
    super(parent, node)
  }

  public get dataProp() {
    if (!this.alias) return this.field

    return `${this.field}__${this.alias}`
  }

  public get value() {
    const parentObj = this.parent.value

    return parentObj && parentObj[this.dataProp]
  }
}
