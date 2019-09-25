import { createEvent, invariant, createSetter } from '@gqless/utils'

import { Cache, Value } from '../Cache'
import {
  Extension,
  IExtension,
  Node,
  Outputable,
  ScalarNode,
  REDIRECT,
} from '../Node'
import { Scheduler } from '../Scheduler'
import { Selection, FieldSelection } from '../Selection'
import { computed, Disposable } from '../utils'

export const ACCESSOR = Symbol('accessor')

export enum NetworkStatus {
  idle,
  loading,
  updating,
}

export abstract class Accessor<
  TSelection extends Selection = Selection,
  TChildren extends Accessor<any, any> = Accessor<any, any>
> extends Disposable {
  // Ordered by most important -> least
  public extensions: Extension[] = []

  public scheduler: Scheduler = this.parent
    ? (this.parent as any).scheduler
    : undefined!
  public cache: Cache = this.parent ? (this.parent as any).cache : undefined!

  public children: TChildren[] = []
  public data: any
  public value?: Value
  public status: NetworkStatus = NetworkStatus.idle

  // When the Value class associated with this accessor changes
  public onValueAssociated = createSetter(this as Accessor, 'value')
  // When the data changes (equality check)
  public onDataChange = createEvent<(prevData: any) => void>()
  public onInitializeExtensions = createEvent()
  public onStatusChange = createSetter(this as Accessor, 'status')

  constructor(
    public parent: Accessor | undefined,
    public selection: TSelection,
    public node = selection.node as Node & Outputable
  ) {
    super()

    if (parent) {
      parent.children.push(this)

      this.disposer(
        /**
         * On un-select, dispose of self
         *
         * used when you do `query.users()`, and an argumentless
         * selection is created before the function call
         */
        parent.selection.onUnselect.filter(s => s === selection)(() =>
          this.dispose()
        ),
        () => {
          const idx = parent.children.indexOf(this)
          if (idx === -1) return
          parent.children.splice(idx, 1)
        },
        () => this.scheduler.commit.unstage(this)
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
              this.onDataChange.emit(prevData)
            }

            prevData = newData
          }

          const value = this.value!
          if (!value) return check()
          dispose = value.onChange(check)
          check()
        }
        this.disposer(this.onValueAssociated(onValueAssociated))

        onValueAssociated()
      }
    }

    /**
     * Update the extensions change when:
     * - data changes (from null -> object)
     * - parent extensions change
     */
    const updateExtensions = () => this.loadExtensions()
    this.disposer(
      this.onDataChange(updateExtensions),
      parent && parent.onInitializeExtensions(updateExtensions)
    )

    // TODO
    // const innerNode = node instanceof NodeContainer ? node.innerNode : node
    // if (innerNode instanceof Keyable) {
    //   setTimeout(() => console.log(this.path.toString(), 'getting key'))

    //   innerNode.getKey(this)
    // }
  }

  /**
   * Sync value with an accessor
   * Defaults to parent
   */
  protected syncValue(
    getValue: (accessorValue: Value) => Value | undefined,
    accessor = this.parent
  ) {
    if (!accessor) return

    let dispose: Function | undefined
    const associateValue = () => {
      if (dispose) {
        this.deleteDiposer(dispose)
        dispose()
        dispose = undefined
      }

      if (accessor.value) {
        this.value = getValue(accessor.value!)

        dispose = accessor.value!.onChange(() => {
          this.value = getValue(accessor.value!)
        })
        this.disposer(dispose)
      } else {
        this.value = undefined
      }
    }

    this.disposer(accessor.onValueAssociated(associateValue))
    associateValue()
  }

  /**
   * Stage the accessor, if it doesn't have a value
   */
  protected stageIfRequired() {
    if (this.value) return

    const unstage = this.scheduler.commit.stage(this)

    this.disposer(
      this.onValueAssociated.then(() => {
        unstage()
      })
    )
  }

  protected initializeExtensions() {
    if (!this.node.extension) return

    const defaultExtension: IExtension<any> =
      !(this.node instanceof ScalarNode) &&
      typeof this.node.extension === 'function'
        ? this.node.extension(this.data)
        : this.node.extension

    if (!defaultExtension) return

    this.extensions.unshift(defaultExtension)
  }

  protected loadExtensions() {
    this.extensions = []
    this.initializeExtensions()
    this.onInitializeExtensions.emit()

    if (this.value || !this.extensions.length) return

    // Cache redirects
    const edge = this.cache.edges.get(this.node)
    if (!edge) return

    // optimization - avoid re-creating for each extension
    const redirectArgs = [
      this.selection instanceof FieldSelection
        ? // @TODO: toJSON everything
          this.selection.args
        : undefined,
      {
        match(data: any) {
          const match = edge.match(data)
          if (!match) return

          return match.value
        },
      },
    ] as const

    // Redirect all values
    for (const extension of this.extensions) {
      const redirect = extension && extension[REDIRECT]
      if (!redirect) continue

      const value = redirect(...redirectArgs)
      if (!(value instanceof Value)) continue

      this.updateValue(value)
      return
    }
  }

  // Update the value, by modifying the cache
  public updateValue(value: Value) {
    if (!this.parent) {
      // @TODO: Cache set.rootValue
      this.value = value
      return
    }

    if (!this.parent.value) {
      throw invariant(false, `can't update accessor value without parent value`)
    }

    this.parent.value!.set(this.toString(), value)
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
