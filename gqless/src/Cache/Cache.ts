import { Accessor } from '../Accessor'
import { Value } from './Value'
import { deepReference, createPath } from './utils'
import { merge } from './merge'
import { ObjectNode, DataTrait } from '../Node'
import { NodeEntry } from './NodeEntry'
import { Disposable } from '../utils'
import { createEvent } from '@gqless/utils'
import { Transaction } from './Transaction'

export class Cache extends Disposable {
  public _references!: ReturnType<typeof deepReference>
  public _entries = new Map<DataTrait, NodeEntry>()

  public _onRootValueChange = createEvent<(rootValue: Value) => void>()

  constructor(node: ObjectNode) {
    super()

    this._onRootValueChange(() => {
      if (this._references) this._references._dispose()

      this._references = deepReference(this._rootValue)

      const addToEntries = (value: Value) => {
        if (!this._entries.has(value.node))
          this._entries.set(value.node, new NodeEntry(value.node))
        const graphNode = this._entries.get(value.node)!

        if (graphNode._instances.has(value)) return

        graphNode._instances.add(value)
      }

      addToEntries(this._rootValue)
      this._references._onReference(addToEntries)
      this._references._onUnreference(value => {
        if (!this._entries.has(value.node)) return
        const graphNode = this._entries.get(value.node)!

        graphNode._instances.delete(value)
      })
    })

    this._rootValue = new Value(node)
  }

  private __rootValue!: Value
  public get _rootValue() {
    return this.__rootValue
  }
  public set _rootValue(value: Value) {
    const prevValue = this.__rootValue
    if (value === prevValue) return
    this.__rootValue = value
    this._onRootValueChange.emit(value)
  }

  public _merge(accessor: Accessor, data: any) {
    const transaction = new Transaction()

    transaction.begin()
    const value = createPath(accessor, data)
    merge(this, value, data, accessor._extensions)
    transaction.end()
  }

  public toJSON(deep = true) {
    const types: any = {}

    this._entries.forEach(nodeEntry => {
      types[nodeEntry._node.toString()] =
        deep === true ? nodeEntry.toJSON() : nodeEntry
    })

    return {
      data: deep === true ? this._rootValue.toJSON() : this._rootValue,
      types,
    }
  }

  public dispose() {
    super.dispose()
    this._references._dispose()
  }
}
