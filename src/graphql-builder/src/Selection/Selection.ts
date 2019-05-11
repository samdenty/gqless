import { Node, ObjectNode } from '../Node'
import { computed, onEvent } from '../utils'
import { RootSelection } from './RootSelection'
import { FieldSelection } from './FieldSelection'
import { MiddlewareMethod } from '../Middleware'

export interface CircularSelectionField
  extends FieldSelection<any, CircularSelectionField> {}

export abstract class Selection<
  TNode extends Node<any>,
  TSelections extends CircularSelectionField = CircularSelectionField
> {
  public selections: TSelections[] = []
  public root: RootSelection<ObjectNode<any, any, any>> =
    this.parent! && this.parent!.root

  public onSelect = onEvent<MiddlewareMethod<'onSelect'>>()
  public onUnselect = onEvent<MiddlewareMethod<'onUnselect'>>()

  constructor(public parent: Selection<any> | undefined, public node: TNode) {
    if (this.parent) {
      this.onSelect(this.parent.onSelect.emit)
      this.onUnselect(this.parent.onUnselect.emit)
    }
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

  // public get unresolvedSelection(): Selection<any> {
  //   if (this.value !== undefined) return null

  //   if (this.parent) {
  //     const { unresolvedSelection } = this.parent
  //     if (unresolvedSelection) return unresolvedSelection
  //   }

  //   return this
  // }

  // public get value() {
  //   return this._value
  // }

  // public set value(value: NodeDataType<TNode>) {
  //   const prevValue = this._value
  //   this._value = value

  //   if (prevValue !== value) {
  //     this.onValueChange.emit(prevValue)
  //   }
  // }

  // protected computeValue() {}

  // public onValueChange = onEvent<(prevValue: NodeDataType<TNode>) => void>()

  // public then(resolve: (value: NodeDataType<TNode>) => void) {
  //   const attemptResolve = () => {
  //     if (this.value !== undefined) {
  //       dispose()
  //       resolve(this.value)
  //     }
  //   }
  //   const dispose = this.onValueChange(attemptResolve)
  //   attemptResolve()
  //   return this
  // }

  public unselect() {
    const [...selections] = this.selections
    selections.forEach(s => s.unselect())

    this.onUnselect.emit(this)
  }
}
