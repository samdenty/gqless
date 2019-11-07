import { createEvent, invariant, createMemo } from '@gqless/utils'

import { Cache, Value, afterTransaction } from '../Cache'
import { ObjectNode, Abstract, DataTrait, ComputableExtension, ComputedExtension, StaticExtension, DataContext } from '../Node'
import { Scheduler, Query } from '../Scheduler'
import { Selection, Fragment } from '../Selection'
import { computed, Disposable, PathArray, arrayEqual } from '../utils'
import { onDataChange } from './utils'
import { FragmentAccessor } from '.'
import { accessorInterceptors } from '../Interceptor'

export enum NetworkStatus {
  idle,
  loading,
  updating,
}

export const ACCESSOR = Symbol('accessor')
// A query was made with minimal fields on it
// to save bandwidth - predicted the IDs would match up
// But returned ID were different, so refetch everything
const KEYED_REFETCH = new Query('KeyedRefetch')

const memoized = createMemo()

export abstract class Accessor<
  TSelection extends Selection = Selection,
  TChildren extends Accessor<Selection, any> = Accessor<Selection, any>
> extends Disposable {
  // Ordered by most important -> least
  public extensions: (StaticExtension | ComputedExtension)[] = []
  public children: TChildren[] = []

  public scheduler: Scheduler = this.parent
    ? (this.parent as any).scheduler
    : undefined!
  public cache: Cache = this.parent ? (this.parent as any).cache : undefined!
  // replaces refs of this accessor, with a Fragment
  // see FragmentAccessor#startResolving

  public fragmentToResolve?: FragmentAccessor
  protected _data: any
  protected _status: NetworkStatus = NetworkStatus.idle
  protected _value: Value | undefined
  protected _resolved = true

  public onValueChange = createEvent<(value: Value | undefined, prevValue: Value | undefined) => void>()
  // Equality check only
  public onDataChange = onDataChange(this)
  public onResolvedChange = createEvent<(resolved: boolean) => void>()
  public onStatusChange = createEvent<(status: NetworkStatus, prevStatus: NetworkStatus) => void>()
  public onInitializeExtensions = createEvent()

  constructor(
    public readonly parent: Accessor | undefined,
    public readonly selection: TSelection,
    public readonly node = selection.node
  ) {
    super()

    if (parent) {
      parent.children.push(this)

      this.addDisposer(
        // On un-select, dispose of self
        // used when you do `query.users()`, and an argumentless
        // selection is created before the function call
        parent.selection.onUnselect.filter(s => s === selection)(() =>
          this.dispose()
        )
      )
    }

    // Update the extensions change when:
    // - data changes (from null -> object)
    // - parent extensions change
    this.addDisposer(
      this.onDataChange(() => {
        this.data = undefined
        this.loadExtensions()
      }),
      parent?.onInitializeExtensions(() => {
        this.loadExtensions()
      })
    )
  }

  public get resolved() {
    return this._resolved
  }

  public set resolved(resolved: boolean) {
    const prevResolved = this._resolved
    if (prevResolved === resolved) return
    this._resolved = resolved
    this.onResolvedChange.emit(resolved)
  }

  public get data() {
    try {
      if (this._data === undefined) {
        try {
          this.data = this.getData()
        } catch (accessor) {
          if (accessor instanceof Accessor) return accessor.data

          throw accessor
        }
      }

      return this._data
    } finally {
      accessorInterceptors.forEach((intercept) => intercept(this))
    }
  }
  public set data(data: any) {
    this._data = data
  }

  public set status(status: NetworkStatus) {
    const prevStatus = this._status
    this._status = status
    if (prevStatus === status) return
    this.onStatusChange.emit(status, prevStatus)
  }
  public get status() {
    return this._status
  }

  public set value(value: Value | undefined) {
    const prevValue = this._value
    this._value = value
    if (prevValue === value) return
    this.onValueChange.emit(value, prevValue)
  }
  public get value() {
    return this._value
  }

  protected initializeExtensions() {
    const addExtensions = (node: DataTrait) => {
      let extension = node.extension
      if (!extension) return

      if (extension instanceof ComputableExtension) {
        extension = new ComputedExtension(extension, this)
      }

      this.extensions.unshift(extension)
    }

    if (this.node instanceof Abstract) {
      for (const node of this.node.implementations) {
        addExtensions(node)
      }
    }

    addExtensions(this.node)
  }

  protected loadExtensions() {
    const prevExtensions = this.extensions
    this.extensions = []
    this.initializeExtensions()

    if (arrayEqual(prevExtensions, this.extensions)) return

    this.onInitializeExtensions.emit()

    if (!this.extensions.length) return

    // If already a fragment, key fragments should only be added on different types
    const isTopLevel = !(this instanceof FragmentAccessor) || this.node !== this.parent.node

    if (isTopLevel) {
      // Add keyFragments
      this.extensions.forEach(({ fragment }) => {
        if (!fragment) return
        if (this.selection === (fragment as any)) return

        this.selection.add(fragment, true)
      })
    }

    if (!this.value) {
      // TODO: Should this be here? or in merge.ts
      // Cache redirects
      if (this.cache.entries.has(this.node)) {
        for (const extension of this.extensions) {
          const value = extension.redirect(this)

          if (!(value instanceof Value)) continue
          this.updateValue(value)
          break
        }
      }
    }
  }

  // Update the value, by modifying the cache
  public updateValue(value: Value) {
    if (value === this.value) return

    invariant(
      this.parent?.value,
      `can't update ${this.path} value without parent value`
    )

    const valueless = new Set(this.children.filter(a => !(a.value)))
    this.parent.value.set(this.toString(), value)

    afterTransaction(() => {
      const accessorWithoutValue = this.children.find(a => !a.value && !valueless.has(a))

      // If a child accessor is missing a value, then
      // re-fetch it entirely
      if (accessorWithoutValue) {
        this.scheduler.commit.stage(this, KEYED_REFETCH)
      }
    })
  }

  public getData(ctx?: DataContext): any {
    return undefined
  }

  public setData(data: any) {
    // @TODO
    console.log('set', this.path.toString(), data)
    this.cache.merge(this, data)
  }

  public get<TChild extends TChildren | FragmentAccessor>(
    find: ((child: TChildren | FragmentAccessor) => boolean) | Selection | string | number
  ): TChild | undefined {
    if (typeof find === 'function') {
      return this.children.find(find) as any
    }

    if (find instanceof Selection) {
      const accessor = this.children.find(c => c.selection === find) as any
      return accessor
    }

    return this.children.find(c => c.toString() === String(find)) as any
  }

  public getDefaultFragment(node: ObjectNode) {
    return memoized.fragment(() => {
      const fragment = new Fragment(node)
      this.selectionPath[this.selectionPath.length - 1].add(fragment)
      return fragment
    }, [node, ...this.selectionPath])
  }

  @computed()
  public get selectionPath(): Selection[] {
    const basePath = this.parent ? this.parent.selectionPath : new PathArray<Selection>()
    const path =
      // Remove duplicated selections
      basePath[basePath.length - 1] === this.selection
        ? basePath
        : new PathArray(...basePath, this.selection)

    return path
  }

  @computed()
  public get path(): Accessor[] {
    const basePath = this.parent ? this.parent.path : []
    const path = new PathArray(...basePath, this)

    return path
  }

  public dispose() {
    super.dispose()

    if (this.parent) {
      const idx = this.parent.children.indexOf(this)
      if (idx !== -1) {
        this.parent.children.splice(idx, 1)
      }

      this.scheduler.commit.unstage(this)

      this.scheduler.commit.accessors.forEach((_, accessor) => {
        // if the accessor begins with this.path
        for (let i = 0; i < this.path.length; i++) {
          if (this.path[i] !== accessor.path[i]) return
        }

        this.scheduler.commit.unstage(accessor)
      })
    }
  }
}

export const getAccessorData = (accessor: Accessor): any => {
  if (accessor.fragmentToResolve) {
    return getAccessorData(accessor.fragmentToResolve)
  }

  return accessor.data
}
