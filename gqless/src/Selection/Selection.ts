import { createEvent } from '@gqless/utils'

import { Node, ObjectNode } from '../Node'
import { PluginMethod } from '../Plugin'
import { computed } from '../utils'
import { FieldSelection } from './FieldSelection'
import { RootSelection } from './RootSelection'

export interface CircularSelectionField extends FieldSelection {}

export abstract class Selection<
  TNode extends Node<any> = Node<any>,
  TSelections extends CircularSelectionField = CircularSelectionField
> {
  public selections: TSelections[] = []
  // @ts-ignore
  public root: RootSelection<ObjectNode> = this.parent! && this.parent!.root

  /**
   * Emitted when a selection is being fetched
   */
  public onFetching = createEvent<() => void>()
  /**
   * Emitted when selection has been fetched, or a previous fetch was cancelled
   */
  public onFetched = createEvent<() => void>()

  /**
   * Emitted when a child selection is created
   */
  public onSelect = createEvent<PluginMethod<'onSelect'>>()
  /**
   * Emitted when a child selection is disposed
   */
  public onUnselect = createEvent<PluginMethod<'onUnselect'>>()

  constructor(public parent: Selection<any> | undefined, public node: TNode) {
    if (this.parent) {
      this.onSelect(this.parent.onSelect.emit)
      this.onUnselect(this.parent.onUnselect.emit)
    }
  }

  /**
   * Whether or not the selection is currently
   * being fetched over the network
   */
  public isFetching: boolean = false
  public toggleFetching(fetching = !this.isFetching) {
    if (this.isFetching === fetching) return

    this.isFetching = fetching

    fetching ? this.onFetching.emit() : this.onFetched.emit()
  }

  /**
   * Find a selection in selections
   */
  public getField(compare: (selection: TSelections) => boolean) {
    return this.selections.find(compare)
  }

  @computed()
  /**
   * An array containing all the selections from this
   * back up to the selection root
   */
  public get path(): Selection<any, any>[] {
    const basePath = this.parent ? this.parent.path : []
    const path = [...basePath, this]

    path.toString = () => path.map(selection => selection.toString()).join('.')

    return path
  }

  /**
   * Dispose of selection, removing all references to it
   */
  public unselect() {
    const [...selections] = this.selections
    selections.forEach(s => s.unselect())

    this.onUnselect.emit(this)
  }
}
