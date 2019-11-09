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

export const ACCESSOR = Symbol()
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
  public _extensions: (StaticExtension | ComputedExtension)[] = []
  public _children: TChildren[] = []

  public scheduler: Scheduler = this.parent
    ? (this.parent as any).scheduler
    : undefined!
  public cache: Cache = this.parent ? (this.parent as any).cache : undefined!

  // replaces refs of this accessor, with a Fragment
  // see FragmentAccessor#startResolving
  public _fragmentToResolve?: FragmentAccessor
  protected _data: any
  protected _status: NetworkStatus = NetworkStatus.idle
  protected _value: Value | undefined
  protected __resolved = true

  // Equality check only
  public onStatusChange = createEvent<(status: NetworkStatus, prevStatus: NetworkStatus) => void>()
  public _onResolvedChange = createEvent<(resolved: boolean) => void>()
  public _onInitializeExtensions = createEvent()
  public _onValueChange = createEvent<(value: Value | undefined, prevValue: Value | undefined) => void>()
  public onDataChange = onDataChange(this)

  constructor(
    public readonly parent: Accessor | undefined,
    public readonly selection: TSelection,
    public readonly node = selection._node
  ) {
    super()

    if (parent) {
      parent._children.push(this)

      this.addDisposer(
        // On un-select, dispose of self
        // used when you do `query.users()`, and an argumentless
        // selection is created before the function call
        parent.selection._onUnselect.filter(s => s === selection)(() =>
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
        this._loadExtensions()
      }),
      parent?._onInitializeExtensions(() => {
        this._loadExtensions()
      })
    )
  }

  public get _resolved() {
    return this.__resolved
  }

  public set _resolved(resolved: boolean) {
    const prevResolved = this.__resolved
    if (prevResolved === resolved) return
    this.__resolved = resolved
    this._onResolvedChange.emit(resolved)
  }

  public get data() {
    if (this._fragmentToResolve) {
      return this._fragmentToResolve.data
    }

    if (this._data === undefined) {
      this.data = this.getData()
    }

    accessorInterceptors.forEach((intercept) => intercept(this))

    return this._data
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
    this._onValueChange.emit(value, prevValue)
  }
  public get value() {
    return this._value
  }

  protected _initializeExtensions() {
    const addExtensions = (node: DataTrait) => {
      let extension = node._extension
      if (!extension) return

      if (extension instanceof ComputableExtension) {
        extension = new ComputedExtension(extension, this)
      }

      this._extensions.unshift(extension)
    }

    if (this.node instanceof Abstract) {
      for (const node of this.node._implementations) {
        addExtensions(node)
      }
    }

    addExtensions(this.node)
  }

  protected _loadExtensions() {
    const prevExtensions = this._extensions
    this._extensions = []
    this._initializeExtensions()

    if (arrayEqual(prevExtensions, this._extensions)) return

    this._onInitializeExtensions.emit()

    if (!this._extensions.length) return

    // If already a fragment, key fragments should only be added on different types
    const isTopLevel = !(this instanceof FragmentAccessor) || this.node !== this.parent.node

    if (isTopLevel) {
      // Add keyFragments
      this._extensions.forEach(({ _fragment: fragment }) => {
        if (!fragment) return
        if (this.selection === (fragment as any)) return

        this.selection.add(fragment, true)
      })
    }

    if (!this.value) {
      // TODO: Should this be here? or in merge.ts
      // Cache redirects
      if (this.cache._entries.has(this.node)) {
        for (const extension of this._extensions) {
          const value = extension._redirect(this)

          if (!(value instanceof Value)) continue
          this._updateValue(value)
          break
        }
      }
    }
  }

  // Update the value, by modifying the cache
  public _updateValue(value: Value) {
    if (value === this.value) return

    invariant(
      this.parent?.value,
      `can't update ${this.path} value without parent value`
    )

    const valueless = new Set(this._children.filter(a => !(a.value)))
    this.parent.value.set(this.toString(), value)

    afterTransaction(() => {
      const accessorWithoutValue = this._children.find(a => !a.value && !valueless.has(a))

      // If a child accessor is missing a value, then
      // re-fetch it entirely
      if (accessorWithoutValue) {
        this.scheduler._commit._stage(this, KEYED_REFETCH)
      }
    })
  }

  public getData(ctx?: DataContext): any {
    return undefined
  }

  public setData(data: any) {
    // @TODO
    console.log('set', this.path.toString(), data)
    this.cache._merge(this, data)
  }

  public get<TChild extends TChildren | FragmentAccessor>(
    find: ((child: TChildren | FragmentAccessor) => boolean) | Selection | string | number
  ): TChild | undefined {
    if (typeof find === 'function') {
      return this._children.find(find) as any
    }

    if (find instanceof Selection) {
      const accessor = this._children.find(c => c.selection === find) as any
      return accessor
    }

    return this._children.find(c => c.toString() === String(find)) as any
  }

  public getDefaultFragment(node: ObjectNode) {
    return memoized.fragment(() => {
      const fragment = new Fragment(node)
      this._selectionPath[this._selectionPath.length - 1].add(fragment)
      return fragment
    }, [node, ...this._selectionPath])
  }

  @computed()
  public get _selectionPath(): Selection[] {
    const basePath = this.parent ? this.parent._selectionPath : new PathArray<Selection>()
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
      const idx = this.parent._children.indexOf(this)
      if (idx !== -1) {
        this.parent._children.splice(idx, 1)
      }

      this.scheduler._commit._unstage(this)

      this.scheduler._commit._accessors.forEach((_, accessor) => {
        // if the accessor begins with this.path
        for (let i = 0; i < this.path.length; i++) {
          if (this.path[i] !== accessor.path[i]) return
        }

        this.scheduler._commit._unstage(accessor)
      })
    }
  }
}
