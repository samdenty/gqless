import { Selection } from '../Selection'
import { computed } from '../../utils'
import { Node } from '../Node'

export abstract class Accessor<
  TSelection extends Selection<any> = Selection<any>,
  TChildren extends Accessor<any, any> = Accessor<any, any>
> {
  public children: TChildren[] = []
  public value: any

  constructor(
    public parent: Accessor,
    public selection: TSelection,
    public node: Node<any> = selection.node
  ) {
    if (parent) {
      parent.children.push(this)
    }
    selection.onUnselect(s => {
      if (s === selection) {
        const idx = this.parent.children.indexOf(this)
        if (idx > -1) this.parent.children.splice(idx, 1)
      }
    })
  }

  public getChild(compare: (child: TChildren) => boolean) {
    return this.children.find(compare)
  }

  @computed()
  public get path(): Accessor[] {
    const basePath = this.parent ? this.parent.path : []
    const path = [...basePath, this]

    path.toString = () => path.map(selection => selection.toString()).join('.')

    return path
  }
}
