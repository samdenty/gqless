import { Node, NodeDataType, ObjectNode } from '../Node'
import { computed, onEvent } from '../../utils'
import { SelectionField } from './SelectionField'
import { SelectionIndex } from './SelectionIndex'
import { SelectionRoot } from './SelectionRoot'

export type USelection =
  | SelectionRoot<any>
  | SelectionField<any, any>
  | SelectionIndex<any>

interface CircularSelection extends Selection<any, CircularSelection> {}

export abstract class Selection<
  TNode extends Node<any>,
  S extends CircularSelection = CircularSelection
> {
  public selections: S[] = []
  public root: SelectionRoot<ObjectNode<any, any, any>> = this.parent
    ? this.parent.root
    : null
  protected disposers: Function[] = []

  private _value: NodeDataType<TNode>
  private hasComputedValue = false

  constructor(public parent: Selection<any>, public node: TNode) {
    if (parent) {
      parent.selections.push(this)
      this.disposers.push(() => {
        const idx = parent.selections.indexOf(this)

        if (idx > -1) {
          parent.selections.splice(idx, 1)
        }
      })
    }
  }

  public getSelection<SelectionType extends S>(
    compare: (selection: SelectionType) => boolean,
    create?: () => SelectionType
  ): SelectionType {
    let selection = (this.selections as SelectionType[]).find(compare)
    if (selection) return selection

    if (!create) return null
    selection = create()

    this.root.select(selection)

    return selection
  }

  @computed()
  public get path(): Selection<any, any>[] {
    const basePath = this.parent ? this.parent.path : []
    const path = [...basePath, this]

    path.toString = () => path.map(selection => selection.toString()).join('.')

    return path
  }

  public get unresolvedSelection(): Selection<any> {
    if (this.parent) {
      const { unresolvedSelection } = this.parent
      if (unresolvedSelection) return unresolvedSelection
    }

    if (this.value === undefined) return this

    return null
  }

  public get value() {
    if (!this.hasComputedValue) this.computeValue()

    return this._value
  }

  public set value(value: NodeDataType<TNode>) {
    const prevValue = this._value
    this._value = value

    if (prevValue !== value) {
      this.onValueChange.emit()
    }
  }

  protected computeValue() {
    this.hasComputedValue = true
  }

  /**
   * Conditonally computes the value, only if it's been computed before
   */
  public recomputeValue() {
    if (!this.hasComputedValue) return
    this.computeValue()
  }

  public onValueChange = onEvent<() => void>()

  public then(resolve: (value: NodeDataType<TNode>) => void) {
    const attemptResolve = () => {
      if (this.value !== undefined) {
        dispose()
        resolve(this.value)
      }
    }
    const dispose = this.onValueChange(attemptResolve)
    attemptResolve()
    return this
  }

  public destroy() {
    this.selections.forEach(s => s.destroy())
    this.disposers.forEach(dispose => dispose())
  }
}
