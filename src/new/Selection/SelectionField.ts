import { Selection } from './Selection'
import { Node, FieldNode } from '../Node'

export class SelectionField<
  TNode extends Node<any>,
  S extends Selection<any> = Selection<any>
> extends Selection<TNode, S> {
  public alias: string = null

  constructor(
    parent: Selection<any>,
    node: TNode,
    public field: FieldNode<any, any, any>
  ) {
    super(parent, node)

    this.disposers.push(parent.onValueChange(() => this.recomputeValue()))
  }

  protected computeValue() {
    super.computeValue()
    const parentObj = this.parent.value
    this.value = parentObj && parentObj[this.dataProp]
  }

  public args: any

  public setArguments(args: any) {
    this.args = args
  }

  public get dataProp() {
    if (!this.alias) return this.field.name

    return `${this.field.name}__${this.alias}`
  }

  public toString() {
    return this.dataProp
  }
}
