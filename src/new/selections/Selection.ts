import { Node, NodeDataType } from '../Node'
import { computed } from '../../utils'

export abstract class Selection<
  TNode extends Node<any>,
  S extends Selection<any, any> = Selection<any, any>
> {
  public value: NodeDataType<TNode>
  public selections: S[] = []

  constructor(public parent: Selection<any>, public node: TNode) {
    if (parent) parent.selections.push(this)
  }

  public getSelection<SelectionType extends S>(
    compare: (selection: SelectionType) => boolean,
    create?: () => SelectionType
  ) {
    const selection = this.selections.find(compare)
    if (selection) return selection

    return create ? create() : null
  }

  @computed()
  public get path() {
    const basePath = this.parent ? this.parent.path : []

    return [...basePath, this]
  }
}
