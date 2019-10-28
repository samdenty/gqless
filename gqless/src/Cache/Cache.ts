import { Accessor } from '../Accessor'
import { Value } from './Value'
import { deepReference, createPath } from './utils'
import { merge } from './merge'
import { Node, ObjectNode, Outputable } from '../Node'
import { NodeEntry } from './NodeEntry'
import { Disposable } from '../utils'
import { createSetter } from '@gqless/utils'
import { Transaction } from './Transaction'

export class Cache extends Disposable {
  public references!: ReturnType<typeof deepReference>
  public entries = new Map<Node & Outputable, NodeEntry>()
  public rootValue!: Value

  public onRootValueChange = createSetter(this as Cache, 'rootValue')

  constructor(node: ObjectNode) {
    super()

    this.onRootValueChange(() => {
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
      this.references.onReference(addToEntries)
      this.references.onUnreference(value => {
        if (!this.entries.has(value.node)) return
        const graphNode = this.entries.get(value.node)!

        graphNode.instances.delete(value)
      })
    })

    this.rootValue = new Value(node)
  }

  public merge(accessor: Accessor, data: any) {
    const transaction = new Transaction()

    transaction.begin()
    const value = createPath(accessor, data)
    merge(value, data, accessor)
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
