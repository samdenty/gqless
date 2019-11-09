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

  public _scheduler: Scheduler = this._parent
    ? (this._parent as any).scheduler
    : undefined!
  public _cache: Cache = this._parent ? (this._parent as any).cache : undefined!

  // replaces refs of this accessor, with a Fragment
  // see FragmentAccessor#startResolving
  public _fragmentToResolve?: FragmentAccessor
  protected __data: any
  protected __status: NetworkStatus = NetworkStatus.idle
  protected __value: Value | undefined
  protected __resolved = true

  // Equality check only
  public _onStatusChange = createEvent<(status: NetworkStatus, prevStatus: NetworkStatus) => void>()
  public _onResolvedChange = createEvent<(resolved: boolean) => void>()
  public _onInitializeExtensions = createEvent()
  public _onValueChange = createEvent<(value: Value | undefined, prevValue: Value | undefined) => void>()
  public _onDataChange = onDataChange(this)

  constructor(
    public readonly _parent: Accessor | undefined,
    public readonly _selection: TSelection,
    public readonly _node = _selection._node
  ) {
    super()

    if (_parent) {
      _parent._children.push(this)

      this._addDisposer(
        // On un-select, dispose of self
        // used when you do `query.users()`, and an argumentless
        // selection is created before the function call
        _parent._selection._onUnselect.filter(s => s === _selection)(() =>
          this._dispose()
        )
      )
    }

    // Update the extensions change when:
    // - data changes (from null -> object)
    // - parent extensions change
    this._addDisposer(
      this._onDataChange(() => {
        this._data = undefined
        this._loadExtensions()
      }),
      _parent?._onInitializeExtensions(() => {
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

  public get _data() {
    if (this._fragmentToResolve) {
      return this._fragmentToResolve._data
    }

    if (this.__data === undefined) {
      this.__data = this._getData()
    }

    accessorInterceptors.forEach((intercept) => intercept(this))

    return this.__data
  }
  public set _data(data: any) {
    this.__data = data
  }

  public set _status(status: NetworkStatus) {
    const prevStatus = this.__status
    this.__status = status
    if (prevStatus === status) return
    this._onStatusChange.emit(status, prevStatus)
  }
  public get _status() {
    return this.__status
  }

  public set _value(value: Value | undefined) {
    const prevValue = this.__value
    this.__value = value
    if (prevValue === value) return
    this._onValueChange.emit(value, prevValue)
  }
  public get _value() {
    return this.__value
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

    if (this._node instanceof Abstract) {
      for (const node of this._node._implementations) {
        addExtensions(node)
      }
    }

    addExtensions(this._node)
  }

  protected _loadExtensions() {
    const prevExtensions = this._extensions
    this._extensions = []
    this._initializeExtensions()

    if (arrayEqual(prevExtensions, this._extensions)) return

    this._onInitializeExtensions.emit()

    if (!this._extensions.length) return

    // If already a fragment, key fragments should only be added on different types
    const isTopLevel = !(this instanceof FragmentAccessor) || this._node !== this._parent._node

    if (isTopLevel) {
      // Add keyFragments
      this._extensions.forEach(({ _fragment: fragment }) => {
        if (!fragment) return
        if (this._selection === (fragment as any)) return

        this._selection.add(fragment, true)
      })
    }

    if (!this._value) {
      // TODO: Should this be here? or in merge.ts
      // Cache redirects
      if (this._cache._entries.has(this._node)) {
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
    if (value === this._value) return

    invariant(
      this._parent?._value,
      `can't update ${this._path} value without parent value`
    )

    const valueless = new Set(this._children.filter(a => !(a._value)))
    this._parent._value.set(this.toString(), value)

    afterTransaction(() => {
      const accessorWithoutValue = this._children.find(a => !a._value && !valueless.has(a))

      // If a child accessor is missing a value, then
      // re-fetch it entirely
      if (accessorWithoutValue) {
        this._scheduler._commit._stage(this, KEYED_REFETCH)
      }
    })
  }

  public _getData(ctx?: DataContext): any {
    return undefined
  }

  public _setData(data: any) {
    // @TODO
    console.log('set', this._path.toString(), data)
    this._cache._merge(this, data)
  }

  public _get<TChild extends TChildren | FragmentAccessor>(
    find: ((child: TChildren | FragmentAccessor) => boolean) | Selection | string | number
  ): TChild | undefined {
    if (typeof find === 'function') {
      return this._children.find(find) as any
    }

    if (find instanceof Selection) {
      const accessor = this._children.find(c => c._selection === find) as any
      return accessor
    }

    return this._children.find(c => c.toString() === String(find)) as any
  }

  public _getDefaultFragment(node: ObjectNode) {
    return memoized.fragment(() => {
      const fragment = new Fragment(node)
      this._selectionPath[this._selectionPath.length - 1].add(fragment)
      return fragment
    }, [node, ...this._selectionPath])
  }

  @computed()
  public get _selectionPath(): Selection[] {
    const basePath = this._parent ? this._parent._selectionPath : new PathArray<Selection>()
    const path =
      // Remove duplicated selections
      basePath[basePath.length - 1] === this._selection
        ? basePath
        : new PathArray(...basePath, this._selection)

    return path
  }

  @computed()
  public get _path(): Accessor[] {
    const basePath = this._parent ? this._parent._path : []
    const path = new PathArray(...basePath, this)

    return path
  }

  public _dispose() {
    super._dispose()

    if (this._parent) {
      const idx = this._parent._children.indexOf(this)
      if (idx !== -1) {
        this._parent._children.splice(idx, 1)
      }

      this._scheduler._commit._unstage(this)

      this._scheduler._commit._accessors.forEach((_, accessor) => {
        // if the accessor begins with this.path
        for (let i = 0; i < this._path.length; i++) {
          if (this._path[i] !== accessor._path[i]) return
        }

        this._scheduler._commit._unstage(accessor)
      })
    }
  }
}
