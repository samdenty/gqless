import { Selection } from '../Selection'
import { createEvent } from '@gqless/utils'
import { computed } from '../utils'
import { Node, Keyable, NodeContainer, Outputable, ScalarNode } from '../Node'
import { Cache, Value } from '../Cache'
import { Disposable } from '../mixins'
import { Scheduler } from '../Scheduler'
import { Extension, IExtension } from '../Extension'

export abstract class Accessor<
  TSelection extends Selection = Selection,
  TChildren extends Accessor<any, any> = Accessor<any, any>
> extends Disposable {
  public extensions: Extension[] = []

  public scheduler: Scheduler = this.parent ? this.parent.scheduler : undefined!
  public cache: Cache = this.parent ? this.parent.cache : undefined!

  public children: TChildren[] = []
  public data: any

  // When the Value class associated with this accessor changes
  public onValueAssociated = createEvent<
    (prevValue: Value | undefined) => void
  >()

  // When the data changes (equality check)
  public onDataUpdate = createEvent<(prevData: any) => void>()

  public onExtensionsUpdate = createEvent()

  constructor(
    public parent: Accessor | undefined,
    public selection: TSelection,
    public node = selection.node as Node<any> & Outputable
  ) {
    super()

    if (parent) {
      parent.children.push(this)

      /**
       * On un-select, dispose of self
       *
       * used when you do `query.users()`, and an argumentless
       * selection is created before the function call
       */
      this.disposers.add(
        selection.onUnselect(s => {
          if (s === selection) {
            const idx = parent.children.indexOf(this)
            if (idx > -1) parent.children.splice(idx, 1)
          }
        })
      )

      /**
       * When the value associated with this accessor,
       * ensure types are different and emit onDataUpdate
       */
      {
        let dispose: Function | undefined
        let prevData: any
        const onValueAssociated = () => {
          if (dispose) {
            dispose()
            dispose = undefined
          }

          // Hook for onDataUpdate event
          const check = () => {
            const newData = value ? value.data : undefined
            if (prevData === newData) return
            this.onDataUpdate.emit(prevData)
            prevData = newData
          }

          const value = this.value!
          if (!value) return check()
          dispose = value.onChange(check)
          check()
        }
        this.disposers.add(this.onValueAssociated(onValueAssociated))

        onValueAssociated()
      }

      /**
       * When a value is associated with parent, update
       * the value of this accessor, and emit onValueAssociated
       */
      {
        let dispose: Function | undefined
        const onParentValueAssociated = () => {
          if (dispose) {
            this.disposers.delete(dispose)
            dispose()
            dispose = undefined
          }

          if (parent.value) {
            this.value = parent.value!.get(this.toString())

            dispose = parent.value!.onChange(() => {
              this.value = parent.value!.get(this.toString())
            })
            this.disposers.add(dispose)
          } else {
            this.value = undefined
          }
        }

        this.disposers.add(parent.onValueAssociated(onParentValueAssociated))
        onParentValueAssociated()
      }
    }

    /**
     * Update the extensions change when:
     * - data changes (from null -> object)
     * - parent extensions change
     */
    const updateExtensions = () => this.updateExtensions()
    this.disposers.add(this.onDataUpdate(updateExtensions))
    if (parent) this.disposers.add(parent.onExtensionsUpdate(updateExtensions))

    // TODO
    // const innerNode = node instanceof NodeContainer ? node.innerNode : node
    // if (innerNode instanceof Keyable) {
    //   setTimeout(() => console.log(this.path.toString(), 'getting key'))

    //   innerNode.getKey(this)
    // }
  }

  /**
   * Stage the accessor, if it doesn't have a value
   * @TODO Instead of unstage, stage() should return a function
   */
  protected stageIfRequired() {
    if (this.value) return

    this.scheduler.stage(this.selection)

    this.disposers.add(
      this.onValueAssociated.once(() => {
        this.scheduler.unstage(this.selection)
      })
    )
  }

  protected getExtensions() {
    if (!this.node.extension) return

    const extension: IExtension<any> =
      !(this.node instanceof ScalarNode) &&
      typeof this.node.extension === 'function'
        ? this.node.extension(this.data)
        : this.node.extension

    if (!extension) return

    this.extensions.push(extension)
  }

  protected updateExtensions() {
    this.extensions = []
    this.getExtensions()
    this.onExtensionsUpdate.emit()
  }

  private _value: Value | undefined

  public get value() {
    return this._value
  }

  public set value(value: Value | undefined) {
    const prevValue = this._value
    this._value = value

    if (value !== prevValue) {
      this.onValueAssociated.emit(prevValue)
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
