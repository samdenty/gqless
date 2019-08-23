import { Accessor } from '../Accessor'
import { Value } from './Value'
import { mergeUpdate, deepReference } from './utils'
import { Node, ObjectNode, Matchable } from '../Node'
import { invariant } from '@gqless/utils'

export class GraphNode {
  public instances = new Set<Value>()
  public keys = new Map<string, Value>()

  constructor(public node: Node) {}

  public match(data: any) {
    if (!(this.node instanceof Matchable)) {
      throw invariant(false, `${this.node} does not support pattern matching`)
    }

    for (const value of Array.from(this.instances)) {
      const result = this.node.match(value, data)
      if (result) return result
    }

    return
  }
}

export class Cache {
  // Emitted when a Value is referenced from within the graph
  public onReference: ReturnType<typeof deepReference>['onReference']
  public onUnreference: ReturnType<typeof deepReference>['onUnreference']

  public rootValue: Value
  public graph = new Map<Node, GraphNode>()
  public store = new Map<string, Value>()

  constructor(node: ObjectNode) {
    this.rootValue = new Value(node)

    const events = deepReference(this.rootValue)

    this.onReference = events.onReference
    this.onUnreference = events.onUnreference

    this.onReference(value => {
      if (!this.graph.has(value.node))
        this.graph.set(value.node, new GraphNode(value.node))
      const graphNode = this.graph.get(value.node)!

      if (graphNode.instances.has(value)) return

      graphNode.instances.add(value)
    })

    this.onUnreference(value => {
      if (!this.graph.has(value.node)) return
      const graphNode = this.graph.get(value.node)!

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
