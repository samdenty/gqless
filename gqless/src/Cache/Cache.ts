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
  public references!: ReturnType<typeof deepReference>
  public entries = new Map<DataTrait, NodeEntry>()

  public onRootValueChange = createEvent<(rootValue: Value) => void>()

  constructor(node: ObjectNode) {
    super()

    this.onRootValueChange.listen(() => {
      if (this.references) this.references.dispose()

      this.references = deepReference(this.rootValue)

      const addToEntries = (value: Value) => {
        if (!this.entries.has(value.node))
          this.entries.set(value.node, new NodeEntry(value.node))
        const graphNode = this.entries.get(value.node)!

        if (graphNode.instances.has(value)) return

        graphNode.instances.add(value)
      }

      addToEntries(this.rootValue)
      this.references.onReference.listen(addToEntries)
      this.references.onUnreference.listen(value => {
        if (!this.entries.has(value.node)) return
        const graphNode = this.entries.get(value.node)!

        graphNode.instances.delete(value)
      })
    })

    this.rootValue = new Value(node)
  }

  private _rootValue!: Value
  public get rootValue() {
    return this._rootValue
  }
  public set rootValue(value: Value) {
    const prevValue = this._rootValue
    if (value === prevValue) return
    this._rootValue = value
    this.onRootValueChange.emit(value)
  }

  public merge(accessor: Accessor, data: any) {
    const transaction = new Transaction()

    transaction.begin()
    const value = createPath(accessor, data)
    merge(this, value, data, accessor.extensions)
    transaction.end()
  }

  public toJSON(deep = true) {
    const types: any = {}

    this.entries.forEach(nodeEntry => {
      types[nodeEntry.node.toString()] =
        deep === true ? nodeEntry.toJSON() : nodeEntry
    })

    return {
      data: deep === true ? this.rootValue.toJSON() : this.rootValue,
      types,
    }
  }

  public dispose() {
    super.dispose()
    this.references.dispose()
  }
}
