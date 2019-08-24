import { Value } from './Value'
import { Node, Matchable } from '../Node'
import { invariant } from '@gqless/utils'

export class Edge {
  public instances = new Set<Value>()
  public keys = new Map<string, Value>()

  constructor(public node: Node) {}

  public match(data: any) {
    if (!(this.node instanceof Matchable)) {
      throw invariant(false, `${this.node} does not support pattern matching`)
    }

    for (const value of Array.from(this.instances)) {
      const exactValue = this.node.match(value, data)
      if (exactValue)
        return {
          value,
          exactValue,
        }
    }

    return
  }
}
