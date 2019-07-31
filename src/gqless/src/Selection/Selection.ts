import { Node, ObjectNode } from '../Node'
import { createEvent } from '@gqless/utils'
import { computed } from '../utils'
import { RootSelection } from './RootSelection'
import { FieldSelection } from './FieldSelection'
import { PluginMethod } from '../Plugin'

export interface CircularSelectionField extends FieldSelection {}

export abstract class Selection<
  TNode extends Node<any> = Node<any>,
  TSelections extends CircularSelectionField = CircularSelectionField
> {
  public selections: TSelections[] = []
  // @ts-ignore
  public root: RootSelection<ObjectNode> = this.parent! && this.parent!.root

  public onFetching = createEvent<() => void>()
  public onNotFetching = createEvent<() => void>()

  public onSelect = createEvent<PluginMethod<'onSelect'>>()
  public onUnselect = createEvent<PluginMethod<'onUnselect'>>()

  constructor(public parent: Selection<any> | undefined, public node: TNode) {
    if (this.parent) {
      this.onSelect(this.parent.onSelect.emit)
      this.onUnselect(this.parent.onUnselect.emit)
    }
  }

  public isFetching: boolean = false

  public fetching() {
    if (this.isFetching) return

    this.onFetching.emit()
    this.isFetching = true
  }

  public notFetching() {
    if (!this.isFetching) return

    this.onNotFetching.emit()
    this.isFetching = false
  }

  public getField(compare: (selection: TSelections) => boolean) {
    return this.selections.find(compare)
  }

  @computed()
  public get path(): Selection<any, any>[] {
    const basePath = this.parent ? this.parent.path : []
    const path = [...basePath, this]

    path.toString = () => path.map(selection => selection.toString()).join('.')

    return path
  }

  public unselect() {
    const [...selections] = this.selections
    selections.forEach(s => s.unselect())

    this.onUnselect.emit(this)
  }
}
