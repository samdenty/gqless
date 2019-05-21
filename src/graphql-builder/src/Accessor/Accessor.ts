import { Selection } from '../Selection'
import { computed, onEvent } from '../utils'
import { Node } from '../Node'
import { Cache, Value } from '../Cache'
import { Disposable } from '../mixins'

export abstract class Accessor<
  TSelection extends Selection = Selection,
  TChildren extends Accessor<any, any> = Accessor<any, any>
> extends Disposable {
  protected cache: Cache = this.parent ? this.parent.cache : undefined!
  public children: TChildren[] = []

  public onValueChange = onEvent()

  constructor(
    public parent: Accessor | undefined,
    public selection: TSelection,
    public node: Node<any> = selection.node
  ) {
    super()

    if (parent) {
      parent.children.push(this)

      // On un-select, delete accessor
      this.disposers.add(
        selection.onUnselect(s => {
          if (s === selection) {
            const idx = parent.children.indexOf(this)
            if (idx > -1) parent.children.splice(idx, 1)
          }
        })
      )

      let disposePrevListener: Function | undefined
      const updateListener = () => {
        if (disposePrevListener) {
          this.disposers.delete(disposePrevListener)
          disposePrevListener()
        }

        if (parent.value) {
          this.value = parent.value!.get(this.toString())

          disposePrevListener = parent.value!.onChange(() => {
            this.value = parent.value!.get(this.toString())
          })
          this.disposers.add(disposePrevListener)
        } else {
          this.value = undefined
          disposePrevListener = undefined
        }
      }

      this.disposers.add(parent.onValueChange(updateListener))
      updateListener()
    }
  }

  private _value: Value | undefined

  public get value() {
    return this._value
  }

  public set value(value: Value | undefined) {
    const prevValue = this._value
    this._value = value

    if (value !== prevValue) {
      this.onValueChange.emit()
    }
  }

  public setData(data: any) {
    console.log('set', this.path.toString(), data)
    this.cache.update(this, data)
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
