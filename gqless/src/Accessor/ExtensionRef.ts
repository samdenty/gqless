import { computed, PathArray } from '../utils'
import {
  UExtension,
  INDEX,
  ArrayExtension,
  ObjectExtension,
  REDIRECT,
  ProxyExtension,
  GET_KEY,
  NodeContainer,
  FieldsNode
} from '../Node'
import { Accessor } from './Accessor'
import { FieldAccessor } from './FieldAccessor'
import { createMemo, invariant } from '@gqless/utils'
import { Fragment, UFragment } from '../Selection'
import { FragmentAccessor } from './FragmentAccessor'

const memoized = createMemo()

export class ExtensionRef<TData = any> {
  constructor(
    public parent: ExtensionRef | undefined = undefined,
    public accessor: Accessor,
    public readonly data: UExtension<TData>
  ) {}

  // The key for the extension, based on path
  // eg. ObjectNode(User),FieldNode(age)
  @computed()
  private get extensionKey() {
    return this.path
      .map(ref => {
        if (!ref.parent) return ref.accessor.node

        if (ref.accessor instanceof FieldAccessor) {
          return ref.accessor.selection.field
        }
      })
      .filter(Boolean)
  }

  @computed()
  public get keyFragment() {
    // GET_KEY should be defined across all extension instances
    if (!(this.data as ProxyExtension)?.[GET_KEY]) return

    let node = this.extensionKey[this.extensionKey.length - 1]
    if (node instanceof NodeContainer) {
      node = node.innerNode
    }

    // Fragments only work with InterfaceNode / ObjectNode
    if (!(node instanceof FieldsNode)) return

    return memoized.keyFragment(
      () =>
        new Fragment(
          node as UFragment,
          `Keyed${this.extensionKey.join('_')}`
        ),
      this.extensionKey
    )
  }

  @computed()
  public get isKeyable() {
    return !!(this.data as ProxyExtension)?.[GET_KEY]
  }

  public getKey(): any {
    const getKey = (this.data as ProxyExtension)?.[GET_KEY]
    if (!getKey) return

    if (!this.keyFragment) {
      return getKey(this.accessor.data)
    }

    const fragmentAccessor = memoized.fragmentAccessor(
      () =>
        this.accessor.get<FragmentAccessor>(
          a => a.selection === this.keyFragment
        ) || new FragmentAccessor(this.accessor, this.keyFragment!),
      [this.accessor, this.keyFragment]
    )

    const stopResolving = fragmentAccessor.startResolving()
    try {
      return getKey(fragmentAccessor.data)
    } finally {
      stopResolving()
    }
  }

  public redirect(accessor: Accessor) {
    const redirect = (this.data as ProxyExtension)?.[REDIRECT]
    if (!redirect) return

    const entry = accessor.cache.entries.get(accessor.node)
    if (!entry) return

    return redirect(
      accessor instanceof FieldAccessor
        ? // @TODO: toJSON everything (could be variables)
          accessor.selection.args
        : undefined,
      {
        match(data) {
          return entry.match(data)?.value
        },
      }
    )
  }

  public childIndex(accessor: Accessor) {
    let indexExtension = (this.data as ArrayExtension)?.[INDEX]

    if (typeof indexExtension === 'function') {
      indexExtension = indexExtension(accessor.data)
    }

    if (indexExtension === undefined) return
    return new ExtensionRef(this, accessor, indexExtension)
  }

  public childField(accessor: FieldAccessor) {
    let fieldExtension = (this.data as ObjectExtension)?.[accessor.selection.field.name]

    if (typeof fieldExtension === 'function') {
      fieldExtension = fieldExtension(accessor.data)
    }

    if (fieldExtension === undefined) return
    return new ExtensionRef(this, accessor, fieldExtension)
  }

  public toString() {
    return this.accessor.toString()
  }

  @computed()
  public get path(): ExtensionRef[] {
    const basePath = this.parent ? this.parent.path : []
    const path = new PathArray(...basePath, this)

    return path
  }
}
