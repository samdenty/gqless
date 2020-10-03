import { Value } from './Value'
import { Matchable, keyIsEqual } from '../Node'
import { invariant } from '@gqless/utils'
import stringify from 'json-stable-stringify'
import { Type } from '../Type'

export class TypeEntry {
  public instances = new Set<Value>()
  public keys = new Map<any, Value>()

  constructor(public type: Type) {}

  public match(data: any) {
    invariant(
      this.type instanceof Matchable,
      `${this.type} does not support pattern matching`
    )

    for (const value of this.instances) {
      const exactValue = this.type.match(value, data)
      if (exactValue)
        return {
          value,
          exactValue,
        }
    }

    return
  }

  public getByKey(key: any) {
    // First try and find key directly
    if (this.keys.has(key)) return this.keys.get(key)

    // else find structurally equal value
    for (const [possibleKey, value] of this.keys) {
      if (keyIsEqual(key, possibleKey)) return value
    }

    return undefined
  }

  public toJSON(deep = true) {
    const keys: Record<string, any> = {}

    this.keys.forEach((value, key) => {
      keys[stringify(key)] = deep === true ? value.toJSON() : value
    })

    return {
      keys,
      instances: Array.from(this.instances).map(value =>
        deep === true ? value.toJSON() : value
      ),
    }
  }
}
