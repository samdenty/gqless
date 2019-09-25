import { createEvent } from '@gqless/utils'
import { Node } from '../Node'

export class Selection<TNode extends Node = Node> {
  public selections = new Set<Selection>()

  /**
   * Emitted when a child selection is created
   */
  public onSelect = createEvent<(selection: Selection) => void>()
  /**
   * Emitted when a child selection is disposed
   */
  public onUnselect = createEvent<(selection: Selection) => void>()

  constructor(public node: TNode) {}

  public add(selection: Selection) {
    if (this.selections.has(selection)) return

    this.selections.add(selection)
    this.onSelect.emit(selection)

    // Forward events
    selection.onSelect(this.onSelect.emit)
    selection.onUnselect(this.onUnselect.emit)
  }

  public get(compare: (selection: Selection) => boolean) {
    for (const selection of this.selections) {
      if (compare(selection)) return selection
    }
    return
  }

  public delete(selection: Selection) {
    if (!this.selections.has(selection)) return
    this.selections.delete(selection)

    // Unforward events
    selection.onSelect.off(this.onSelect.emit)
    selection.onUnselect.off(this.onUnselect.emit)

    const emitUnselect = (selection: Selection) => {
      // Emit unselect for each selection
      this.onUnselect.emit(selection)
      selection.selections.forEach(emitUnselect)
    }

    emitUnselect(selection)
  }

  public toString() {
    return String(this.node)
  }
}
