import { Accessor } from '../Accessor'
import { Value } from './Value'
import { mergeUpdate, deepReference } from './utils'
import { Node, ObjectNode, Outputable } from '../Node'
import { Edge } from './Edge'

export class Cache {
  // Emitted when a Value is referenced from within the graph
  public onReference: ReturnType<typeof deepReference>['onReference']
  public onUnreference: ReturnType<typeof deepReference>['onUnreference']

  public rootValue: Value
  public edges = new Map<Node & Outputable, Edge>()
  public store = new Map<string, Value>()

  constructor(node: ObjectNode) {
    this.rootValue = new Value(node)

    const events = deepReference(this.rootValue)

    this.onReference = events.onReference
    this.onUnreference = events.onUnreference

    const addToEdges = (value: Value) => {
      if (!this.edges.has(value.node))
        this.edges.set(value.node, new Edge(value.node))
      const graphNode = this.edges.get(value.node)!

      if (graphNode.instances.has(value)) return

      graphNode.instances.add(value)
    }

    addToEdges(this.rootValue)
    this.onReference(addToEdges)
    this.onUnreference(value => {
      if (!this.edges.has(value.node)) return
      const graphNode = this.edges.get(value.node)!

      graphNode.instances.delete(value)
    })
  }

  public toJSON(deep = true) {
    const edges: any = {}

    this.edges.forEach(edge => {
      edges[edge.node.toString()] = deep === true ? edge.toJSON() : edge
    })

    return {
      root: deep === true ? this.rootValue.toJSON() : this.rootValue,
      edges,
    }
  }

  public merge(accessor: Accessor, data: any) {
    mergeUpdate(accessor, data)
  }
}
