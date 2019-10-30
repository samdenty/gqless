import { createEvent, invariant, createSetter, createMemo } from '@gqless/utils'

import { Cache, Value, NodeEntry } from '../Cache'
import { Node, Outputable, ScalarNode, ObjectNode, GET_KEY, keyIsValid, ProxyExtension } from '../Node'
import { Scheduler, Query } from '../Scheduler'
import { Selection, Fragment } from '../Selection'
import { computed, Disposable, PathArray } from '../utils'
import { onDataChange } from './utils'
import { FragmentAccessor, ExtensionRef } from '.'

export const ACCESSOR = Symbol('accessor')

export enum NetworkStatus {
  idle,
  loading,
  updating,
}

const memoized = createMemo()

// A query was made with minimal fields on it
// to save bandwidth - predicted the IDs would match up
// But returned ID were different, so refetch everything
const KEYED_REFETCH = new Query('KeyedRefetch')

export abstract class Accessor<
  TSelection extends Selection = Selection,
  TChildren extends Accessor<Selection, any> = Accessor<Selection, any>
> extends Disposable {
  // Ordered by most important -> least
  public extensions: ExtensionRef[] = []

  public scheduler: Scheduler = this.parent
    ? (this.parent as any).scheduler
    : undefined!
  public cache: Cache = this.parent ? (this.parent as any).cache : undefined!

  public children: TChildren[] = []
  public data: any
  public value?: Value
  public status: NetworkStatus = NetworkStatus.idle

  // @ts-ignore
  public onValueChange = createSetter(this as Accessor, 'value')
  // Equality check only
  // @ts-ignore
  public onDataChange = onDataChange(this)
  public onStatusChange = createSetter(this as Accessor, 'status')
  public onInitializeExtensions = createEvent()

  // replaces refs of this accessor, with a Fragment
  // see FragmentAccessor#startResolving
  public fragmentToResolve?: FragmentAccessor

  constructor(
    public parent: Accessor | undefined,
    public selection: TSelection,
    public node = selection.node as Node & Outputable
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
        ),
        () => {
          const idx = parent.children.indexOf(this)
          if (idx === -1) return
          parent.children.splice(idx, 1)
        },
        () => {
          this.scheduler.commit.unstage(this)

          this.scheduler.commit.accessors.forEach((_, accessor) => {
            // if the accessor begins with this.path
            for (let i = 0; i < this.path.length; i++) {
              if (this.path[i] !== accessor.path[i]) return
            }

            this.scheduler.commit.unstage(accessor)
          })
        }
      )
    }

    // Update the extensions change when:
    // - data changes (from null -> object)
    // - parent extensions change
    const updateExtensions = () => this.loadExtensions()
    this.addDisposer(
      this.onDataChange(updateExtensions),
      parent && parent.onInitializeExtensions(updateExtensions)
    )
  }

  protected initializeExtensions() {
    let extension = this.node.extension

    if (typeof extension === 'function') {
      extension = extension(this.data)
    }
    if (extension === undefined) return
    if (this.node instanceof ScalarNode) return

    const extensionRef = new ExtensionRef(undefined, this, extension)
    this.extensions.unshift(extensionRef)
  }

  protected loadExtensions() {
    this.extensions = []
    this.initializeExtensions()

    // If already a fragment, key fragments should only be added on different types
    const isTopLevel = !(this instanceof FragmentAccessor) || this.node !== this.parent.node


    if (isTopLevel) {
      // Add keyFragments
      this.extensions.forEach(({ keyFragment }) => {
        if (!keyFragment) return
        if (this.selection === (keyFragment as any)) return

        this.selection.add(keyFragment, true)
      })
    }

    this.onInitializeExtensions.emit()

    // call Extension#GET_KEY for the first time, to record all selections onto
    // the KeyedFragment
    if (
      !this.value &&
      // FragmentAccessors copy extension instances, so no need to initialize
      !(this instanceof FragmentAccessor)
    ) {
      this.getKey()
    }

    if (this.value || !this.extensions.length) return

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

  // Update the value, by modifying the cache
  public updateValue(value: Value) {
    if (value === this.value) return

    invariant(
      this.parent?.value,
      `can't update ${this.path} value without parent value`
    )

    const valueless = new Set(this.children.filter(a => !(a.value)))
    this.parent.value.set(this.toString(), value)

    const accessorWithoutValue = this.children.find(a => !a.value && !valueless.has(a))

    // If a child accessor is missing a value, then
    // re-fetch it entirely
    if (accessorWithoutValue) {
      this.scheduler.commit.stage(this, KEYED_REFETCH)
    }
  }

  public setData(data: any) {
    // @TODO
    console.log('set', this.path.toString(), data)
    this.cache.merge(this, data)
  }

  public get<TChild extends TChildren | FragmentAccessor>(
    compare: (child: TChildren | FragmentAccessor) => boolean
  ) {
    return this.children.find(compare) as TChild | undefined
  }

  @computed()
  public get isKeyable() {
    return !!this.extensions.find(e => e.isKeyable)
  }

  public getKey(value: Value | undefined = this.value) {
    if (!(this.isKeyable)) return

    const prevValue = this.value

    // temporarily update value
    if (value) this.value = value

    try {
      let entry = this.cache.entries.get(this.node)

      // Iterate through extensions and call GET_KEY
      // if the key exists in the cache, then return it
      // else create a new cache entry
      let preferedKey: unknown
      let result: { key: any, value: Value } | undefined
      for (const extension of this.extensions) {
        if (!extension.isKeyable) continue

        const key = extension.getKey()
        if (!keyIsValid(key)) continue
        if (!keyIsValid(preferedKey)) preferedKey = key

        // Check to see if the key already exists in cache
        const keyedValue = entry?.getByKey(key)

        if (!result && keyedValue) {
          result = { key, value: keyedValue }
          // if there's no value, complete loop before returning
          if (value) return result
        }
      }

      if (result) return result

      // no keyed extension found
      if (!keyIsValid(preferedKey) || !value) return

      if (!entry) {
        entry = new NodeEntry(this.node)
        this.cache.entries.set(this.node, entry)
      }

      // add a new key to cache
      entry.keys.set(preferedKey, value)

      return { key: preferedKey, value }
    } finally {
      if (value) this.value = prevValue
    }
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
}
