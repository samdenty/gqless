import { NodeContainer, FieldsNode, FieldNode } from '../abstract'
import {
  ProxyExtension,
  GET_KEY,
  ArrayNodeExtension,
  INDEX,
  ObjectNodeExtension,
  REDIRECT,
} from './NodeExtension'
import { PathArray } from '../../utils'
import { UFragment, Fragment } from '../../Selection'
import { computed, createMemo, invariant } from '@gqless/utils'
import { DataTrait } from '../traits'
import { ArrayNode } from '../ArrayNode'
import { createExtension } from './createExtension'
import { Accessor, FieldAccessor } from '../../Accessor'
import { Value } from '../../Cache'

const memo = createMemo()

export abstract class Extension {
  public data: any

  constructor(
    public parent: Extension | undefined,
    public node: DataTrait,
    /** (optional) An object used to construct fragmentKey */
    private fragmentKeyedBy: any = parent ? undefined : node
  ) {}

  @computed
  /** A unique key to share instances of a Fragment between extensions */
  protected get fragmentKey() {
    return this.path.map(ref => ref.fragmentKeyedBy).filter(Boolean)
  }

  @computed
  public get fragment() {
    const getKey = (this.data as ProxyExtension)?.[GET_KEY]
    if (!getKey) return

    let node = this.fragmentKey[this.fragmentKey.length - 1]
    if (node instanceof NodeContainer) {
      node = node.innerNode as DataTrait
    }

    // Fragments only work with InterfaceNode / ObjectNode
    if (!(node instanceof FieldsNode)) return

    return memo.fragment(() => {
      const fragment = new Fragment(
        node as UFragment,
        `Keyed${this.fragmentKey.join('_')}`
      )

      // Initialize with selections
      const data = node!.getData({ selection: fragment })
      getKey(data)

      return fragment
    }, this.fragmentKey)
  }

  public get isKeyable() {
    return !!(this.data as ProxyExtension)?.[GET_KEY]
  }

  public getKey(value: Value) {
    const getKey = (this.data as ProxyExtension)?.[GET_KEY]
    if (!getKey) return
    const data = value.node.getData({ value })
    const key = getKey(data)

    return key
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
        instances: entry.instances,
        match(data) {
          return entry.match(data)?.value
        },
        getByKey(key) {
          return entry.getByKey(key)
        },
      }
    )
  }

  /** Returns a memoized child Extension */
  public childIndex(): Extension | undefined {
    return memo.childIndex(() => {
      invariant(this.node instanceof ArrayNode)

      const indexExtension = (this.data as ArrayNodeExtension)?.[INDEX]
      if (indexExtension === undefined) return
      return createExtension(this.node.ofNode, indexExtension, this)
    }, [this])
  }

  /** Returns a memoized child Extension, for a given field */
  public childField(field: FieldNode): Extension | undefined {
    return memo.childField(() => {
      invariant(this.node instanceof FieldsNode)

      const fieldExtension = (this.data as ObjectNodeExtension)?.[field.name]
      if (fieldExtension === undefined) return
      return createExtension(field.ofNode, fieldExtension, this, field)
    }, [this, field])
  }

  public toString() {
    return this.fragmentKey.toString()
  }

  @computed
  public get path(): Extension[] {
    const basePath = this.parent ? this.parent.path : []
    const path = new PathArray(...basePath, this)

    return path
  }
}
