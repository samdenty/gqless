import { NodeContainer, FieldsNode, FieldNode } from '../abstract'
import { ProxyExtension, GET_KEY, ArrayNodeExtension, INDEX, ObjectNodeExtension, REDIRECT } from './NodeExtension'
import { computed, PathArray } from '../../utils'
import { UFragment, Fragment } from '../../Selection'
import { createMemo, invariant } from '@gqless/utils'
import { DataTrait } from '../traits'
import { ArrayNode } from '../ArrayNode'
import { createExtension } from './createExtension'
import { Accessor, FieldAccessor } from '../../Accessor'
import { Value } from '../../Cache'

const memo = createMemo()

export abstract class Extension {
  public _data: any

  constructor(
    public _parent: Extension | undefined,
    public _node: DataTrait,
    /** (optional) An object used to construct fragmentKey */
    private _fragmentKeyedBy: any = _parent ? undefined : _node
  ) {
  }

  @computed()
  /** A unique key to share instances of a Fragment between extensions */
  protected get _fragmentKey() {
    return this._path
      .map(ref => ref._fragmentKeyedBy)
      .filter(Boolean)
  }

  @computed()
  public get _fragment() {
    const getKey = (this._data as ProxyExtension)?.[GET_KEY]
    if (!getKey) return

    let node = this._fragmentKey[this._fragmentKey.length - 1]
    if (node instanceof NodeContainer) {
      node = node.innerNode as DataTrait
    }

    // Fragments only work with InterfaceNode / ObjectNode
    if (!(node instanceof FieldsNode)) return

    return memo.fragment(
      () => {
        const fragment = new Fragment(
          node as UFragment,
          `Keyed${this._fragmentKey.join('_')}`
        )

        // Initialize with selections
        const data = node!.getData({ selection: fragment })
        getKey(data)

        return fragment
      },
      this._fragmentKey
    )
  }

  public get _isKeyable() {
    return !!(this._data as ProxyExtension)?.[GET_KEY]
  }

  public _getKey(value: Value) {
    const getKey = (this._data as ProxyExtension)?.[GET_KEY]
    if (!getKey) return
    const data = value.node.getData({ value })
    const key = getKey(data)

    return key
  }

  public _redirect(accessor: Accessor) {
    const redirect = (this._data as ProxyExtension)?.[REDIRECT]
    if (!redirect) return

    const entry = accessor._cache._entries.get(accessor._node)
    if (!entry) return

    return redirect(
      accessor instanceof FieldAccessor
        ? // @TODO: toJSON everything (could be variables)
          accessor._selection.args
        : undefined,
      {
        instances: entry._instances,
        match(data) {
          return entry._match(data)?.value
        },
        getByKey(key) {
          return entry._getByKey(key)
        }
      }
    )
  }

  /** Returns a memoized child Extension */
  public _childIndex(): Extension | undefined {
    return memo.childIndex(() => {
      invariant(this._node instanceof ArrayNode)

      const indexExtension = (this._data as ArrayNodeExtension)?.[INDEX]
      if (indexExtension === undefined) return
      return createExtension(this._node._ofNode, indexExtension, this)
    }, [this])
  }

  /** Returns a memoized child Extension, for a given field */
  public _childField(field: FieldNode): Extension | undefined {
    return memo.childField(() => {
      invariant(this._node instanceof FieldsNode)

      const fieldExtension = (this._data as ObjectNodeExtension)?.[field._name]
      if (fieldExtension === undefined) return
      return createExtension(field._ofNode, fieldExtension, this, field)
    }, [this, field])
  }

  public toString() {
    return this._fragmentKey.toString()
  }

  @computed()
  public get _path(): Extension[] {
    const basePath = this._parent ? this._parent._path : []
    const path = new PathArray(...basePath, this)

    return path
  }
}
