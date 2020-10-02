import { createEvent, invariant } from '@gqless/utils'

export class Selection {
  // Selections that should be fetched with all queries
  public keySelections = new Set<Selection>()
  public selections = new Set<Selection>()

  /**
   * Emitted when a child selection is created
   */
  public onSelect = createEvent<(selection: Selection) => void>()
  /**
   * Emitted when a child selection is unselected
   */
  public onUnselect = createEvent<(selection: Selection) => void>()

  constructor(public type: string) {}

  public add(selection: Selection, isKeySelection = false) {
    invariant(selection !== this, `Circular selections are not permitted!`)

    if (isKeySelection) this.keySelections.add(selection)
    if (this.selections.has(selection)) return

    this.selections.add(selection)
    this.onSelect.emit(selection)

    // Forward events
    selection.onSelect(this.onSelect.emit)
    selection.onUnselect(this.onUnselect.emit)
  }

  public get<TSelection extends Selection>(
    find: ((selection: Selection) => boolean) | string | number
  ): TSelection | undefined {
    for (const selection of this.selections) {
      if (
        typeof find === 'function'
          ? find(selection)
          : String(selection) === String(find)
      )
        return selection as any
    }
    return
  }

  public delete(selection: Selection) {
    if (!this.selections.has(selection)) return
    this.selections.delete(selection)
    this.keySelections.delete(selection)

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
    return this.type
  }
}
