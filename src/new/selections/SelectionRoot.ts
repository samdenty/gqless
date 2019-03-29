import { Selection } from './Selection'
import { Node } from '../Node'
import { SelectionField } from './SelectionField'

export class SelectionRoot<TNode extends Node<any>> extends Selection<
  TNode,
  SelectionField<any>
> {
  constructor(node: TNode) {
    super(null, node)
  }
}
