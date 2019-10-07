import { Value } from './Value'
import { Node, Matchable } from '../Node'
import { invariant } from '@gqless/utils'

export class NodeEntry {
  public instances = new Set<Value>()
  public keys = new Map<string, Value>()

  constructor(public node: Node) {}

  public match(data: any) {
    invariant(
      this.node instanceof Matchable,
      `${this.node} does not support pattern matching`
    )

    for (const value of this.instances) {
      const exactValue = this.node.match(value, data)
      if (exactValue)
        return {
          value,
          exactValue,
        }
    }

    return
  }

  public toJSON(deep = true) {
    return Array.from(this.instances).map(instance =>
      deep === true ? instance.toJSON() : instance
    )
  }
}
