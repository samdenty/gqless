import { Accessor } from '../Accessor'
import { Value } from './Value'
import { mergeUpdate, deepReference } from './utils'
import { Node, ObjectNode } from '../Node'
import { Edge } from './Edge'

export class Cache {
  // Emitted when a Value is referenced from within the graph
  public onReference: ReturnType<typeof deepReference>['onReference']
  public onUnreference: ReturnType<typeof deepReference>['onUnreference']

  public rootValue: Value
  public edges = new Map<Node, Edge>()
  public store = new Map<string, Value>()

  constructor(node: ObjectNode) {
    this.rootValue = new Value(node)

    const events = deepReference(this.rootValue)

    this.onReference = events.onReference
    this.onUnreference = events.onUnreference

    this.onReference(value => {
      if (!this.edges.has(value.node))
        this.edges.set(value.node, new Edge(value.node))
      const graphNode = this.edges.get(value.node)!

      if (graphNode.instances.has(value)) return

      graphNode.instances.add(value)
    })

    this.onUnreference(value => {
      if (!this.edges.has(value.node)) return
      const graphNode = this.edges.get(value.node)!

      graphNode.instances.delete(value)
    })
  }

  public toJSON() {
    const obj: any = {}

    this.store.forEach((value, key) => {
      obj[key] = value.toJSON()
    })

    return obj
  }

  public merge(accessor: Accessor, data: any) {
    mergeUpdate(accessor, data)
  }
}
