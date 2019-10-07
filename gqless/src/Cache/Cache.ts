import { Accessor } from '../Accessor'
import { Value } from './Value'
import { mergeUpdate, deepReference } from './utils'
import { Node, ObjectNode, Outputable } from '../Node'
import { NodeEntry } from './NodeEntry'

export class Cache {
  // Emitted when a Value is referenced from within the graph
  public onReference: ReturnType<typeof deepReference>['onReference']
  public onUnreference: ReturnType<typeof deepReference>['onUnreference']

  public rootValue: Value
  public entries = new Map<Node & Outputable, NodeEntry>()
  public store = new Map<string, Value>()

  constructor(node: ObjectNode) {
    this.rootValue = new Value(node)

    const events = deepReference(this.rootValue)

    this.onReference = events.onReference
    this.onUnreference = events.onUnreference

    const addToEdges = (value: Value) => {
      if (!this.entries.has(value.node))
        this.entries.set(value.node, new NodeEntry(value.node))
      const graphNode = this.entries.get(value.node)!

      if (graphNode.instances.has(value)) return

      graphNode.instances.add(value)
    }

    addToEdges(this.rootValue)
    this.onReference(addToEdges)
    this.onUnreference(value => {
      if (!this.entries.has(value.node)) return
      const graphNode = this.entries.get(value.node)!

      graphNode.instances.delete(value)
    })
  }

  public toJSON(deep = true) {
    const nodes: any = {}

    this.entries.forEach(nodeEntry => {
      nodes[nodeEntry.node.toString()] =
        deep === true ? nodeEntry.toJSON() : nodeEntry
    })

    return {
      root: deep === true ? this.rootValue.toJSON() : this.rootValue,
      nodes,
    }
  }

  public merge(accessor: Accessor, data: any) {
    mergeUpdate(accessor, data)
  }
}
