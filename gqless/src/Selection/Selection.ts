import { createEvent, invariant } from '@gqless/utils'
import { DataTrait } from '../Node'

export class Selection<TNode extends DataTrait = DataTrait> {
  // Selections that should be fetched with all queries
  public _keySelections = new Set<Selection>()
  public selections = new Set<Selection>()

  /**
   * Emitted when a child selection is created
   */
  public _onSelect = createEvent<(selection: Selection) => void>()
  /**
   * Emitted when a child selection is unselected
   */
  public _onUnselect = createEvent<(selection: Selection) => void>()

  constructor(public _node: TNode) {}

  public add(selection: Selection, isKeySelection = false) {
    invariant(selection !== this, `Circular selections are not permitted!`)

    if (isKeySelection) this._keySelections.add(selection)
    if (this.selections.has(selection)) return

    this.selections.add(selection)
    this._onSelect.emit(selection)

    // Forward events
    selection._onSelect(this._onSelect.emit)
    selection._onUnselect(this._onUnselect.emit)
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
    this._keySelections.delete(selection)

    // Unforward events
    selection._onSelect.off(this._onSelect.emit)
    selection._onUnselect.off(this._onUnselect.emit)

    const emitUnselect = (selection: Selection) => {
      // Emit unselect for each selection
      this._onUnselect.emit(selection)
      selection.selections.forEach(emitUnselect)
    }

    emitUnselect(selection)
  }

  public toString() {
    return String(this._node)
  }
}
