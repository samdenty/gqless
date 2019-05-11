import { Selection, CircularSelectionField } from './Selection'
import { Node, FieldNode } from '../Node'
import { generateFieldID } from './utils'
import stringify from 'json-stable-stringify'

export class FieldSelection<
  TNode extends Node<any>,
  TSelections extends CircularSelectionField = CircularSelectionField
> extends Selection<TNode, TSelections> {
  public alias?: string

  constructor(
    parent: Selection<any>,
    node: TNode,
    public field: FieldNode<TNode, any, any>,
    public args: any = null
  ) {
    super(parent, node)

    const existingSelection = parent.selections.find(
      s => s.field === this.field
    )

    // If we have an existing selection of the same field,
    // then alias this field. We could do this in the AST builder,
    // but implementation is easier if it's static
    if (existingSelection) {
      this.alias = generateFieldID(this.field)
    }

    parent.selections.push(this)
    parent.onSelect.emit(this)

    // this.disposers.push(parent.onValueChange(() => this.computeValue()))
  }

  // protected computeValue() {
  //   super.computeValue()
  //   const parentObj = this.parent.value

  //   this.value = parentObj && parentObj[this.dataProp]
  // }

  public get dataProp() {
    if (this.alias) {
      return `${this.field.name}__${this.alias}`
    }

    return this.field.name
  }

  public toString() {
    const args = this.args ? `(${stringify(this.args)})` : ''

    return this.field.name + args
  }

  public unselect() {
    super.unselect()

    const idx = this.parent!.selections.indexOf(this)
    if (idx > -1) this.parent!.selections.splice(idx, 1)
  }
}
