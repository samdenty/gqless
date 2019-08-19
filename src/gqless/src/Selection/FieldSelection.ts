import stringify from 'json-stable-stringify'

import { FieldNode, Node } from '../Node'
import { CircularSelectionField, Selection } from './Selection'
import { generateFieldID } from './utils'

export class FieldSelection<
  TNode extends Node<any> = Node<any>,
  TSelections extends CircularSelectionField = CircularSelectionField
> extends Selection<TNode, TSelections> {
  public alias?: string

  constructor(
    parent: Selection<any>,
    public field: FieldNode<TNode>,
    public args?: Record<string, any>
  ) {
    super(parent, field.ofNode)

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
  }

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
