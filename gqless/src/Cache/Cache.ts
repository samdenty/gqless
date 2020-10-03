import { Accessor } from '../Accessor'
import { Value } from './Value'
import { deepReference, createPath } from './utils'
import { merge } from './merge'
import { ObjectNode, DataTrait } from '../Node'
import { TypeEntry } from './TypeEntry'
import { Disposable } from '../utils'
import { createEvent } from '@gqless/utils'
import { Transaction } from './Transaction'
import { Type } from '../Type'

export class Cache extends Disposable {
  public references!: ReturnType<typeof deepReference>
  public entries = new Map<Type, TypeEntry>()

  public onRootValueChange = createEvent<(rootValue: Value) => void>()

  constructor(type: Type) {
    super()

    this.onRootValueChange(() => {
      if (this.references) this.references.dispose()

      this.references = deepReference(this.rootValue)

      const addToEntries = (value: Value) => {
        if (!this.entries.has(value.type))
          this.entries.set(value.type, new TypeEntry(value.type))
        const graphNode = this.entries.get(value.type)!

        if (graphNode.instances.has(value)) return

        graphNode.instances.add(value)
      }

      addToEntries(this.rootValue)
      this.references.onReference(addToEntries)
      this.references.onUnreference(value => {
        if (!this.entries.has(value.type)) return
        const graphNode = this.entries.get(value.type)!

        graphNode.instances.delete(value)
      })
    })

    this.rootValue = new Value(type)
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
      types[nodeEntry.type.toString()] =
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
