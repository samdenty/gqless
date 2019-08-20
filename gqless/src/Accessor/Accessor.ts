import { createEvent } from '@gqless/utils'

import { Cache, Value } from '../Cache'
import { Extension, IExtension, Node, Outputable, ScalarNode } from '../Node'
import { Scheduler } from '../Scheduler'
import { Selection } from '../Selection'
import { computed, Disposable } from '../utils'

export const ACCESSOR = Symbol('accessor')

export abstract class Accessor<
  TSelection extends Selection = Selection,
  TChildren extends Accessor<any, any> = Accessor<any, any>
> extends Disposable {
  public extensions: Extension[] = []

  public scheduler: Scheduler = this.parent
    ? (this.parent as any).scheduler
    : undefined!
  public cache: Cache = this.parent ? (this.parent as any).cache : undefined!

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
       * When value of this accessor changes
       * & types are different -> emit onDataUpdate
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

            if (
              prevData !== undefined ||
              newData === null ||
              this.node instanceof ScalarNode
            ) {
              this.onDataUpdate.emit(prevData)
            }

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
   * When a value is associated with parent, update
   * the value of this accessor, and emit onValueAssociated
   */
  protected associateValueFrom(accessor: Accessor) {
    let dispose: Function | undefined
    const associateValue = () => {
      if (dispose) {
        this.disposers.delete(dispose)
        dispose()
        dispose = undefined
      }

      if (accessor.value) {
        this.value = accessor.value!.get(this.toString())

        dispose = accessor.value!.onChange(() => {
          this.value = accessor.value!.get(this.toString())
        })
        this.disposers.add(dispose)
      } else {
        this.value = undefined
      }
    }

    this.disposers.add(accessor.onValueAssociated(associateValue))
    associateValue()
  }

  /**
   * Stage the accessor, if it doesn't have a value
   */
  protected stageIfRequired() {
    if (this.value) return

    const unstage = this.scheduler.commit.stage(this.selection)

    this.disposers.add(
      this.onValueAssociated.then(() => {
        unstage()
      })
    )
  }

  protected getExtensions() {
    if (!this.node.extension) return

    const defaultExtension: IExtension<any> =
      !(this.node instanceof ScalarNode) &&
      typeof this.node.extension === 'function'
        ? this.node.extension(this.data)
        : this.node.extension

    if (!defaultExtension) return

    this.extensions.push(defaultExtension)
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
    // @TODO
    console.log('set', this.path.toString(), data)
    this.cache.merge(this, data)
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
