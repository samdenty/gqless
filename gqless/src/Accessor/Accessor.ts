import { createEvent, invariant, createSetter, createMemo } from '@gqless/utils'

import { Cache, Value } from '../Cache'
import {
  Extension,
  IExtension,
  Node,
  Outputable,
  ScalarNode,
  REDIRECT,
  ObjectNode,
} from '../Node'
import { Scheduler } from '../Scheduler'
import { Selection, FieldSelection, Fragment } from '../Selection'
import { computed, Disposable } from '../utils'
import { onDataChange } from './utils'
import { FragmentAccessor } from './FragmentAccessor'

export const ACCESSOR = Symbol('accessor')

export enum NetworkStatus {
  idle,
  loading,
  updating,
}

const memoized = createMemo()

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

  public onValueChange = createSetter(this as Accessor, 'value')
  // Equality check only
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
        () => this.scheduler.commit.unstage(this)
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

    invariant(
      this.parent.value,
      `can't update accessor value without parent value`
    )

    this.parent.value!.set(this.toString(), value)
  }

  public setData(data: any) {
    // @TODO
    console.log('set', this.path.toString(), data)
    this.cache.merge(this, data)
  }

  public get<TChild extends TChildren>(compare: (child: TChildren) => boolean) {
    return this.children.find(compare) as TChild | undefined
  }

  public getDefaultFragment(node: ObjectNode) {
    const fragment = memoized.fragment(() => new Fragment(node), [
      node,
      ...this.selectionPath,
    ])

    return fragment
  }

  @computed()
  public get selectionPath(): Selection[] {
    const basePath = this.parent ? this.parent.selectionPath : []
    const path =
      // Remove duplicated selections
      basePath[basePath.length - 1] === this.selection
        ? basePath
        : [...basePath, this.selection]

    path.toString = () => path.map(selection => selection.toString()).join('.')

    return path
  }

  @computed()
  public get path(): Accessor[] {
    const basePath = this.parent ? this.parent.path : []
    const path = [...basePath, this]

    path.toString = () => path.map(accessor => accessor.toString()).join('.')

    return path
  }
}
