import { Value } from './Value'
import { Matchable, keyIsEqual, DataTrait } from '../Node'
import { invariant } from '@gqless/utils'
import stringify from 'json-stable-stringify'

export class NodeEntry {
  public _instances = new Set<Value>()
  public _keys = new Map<any, Value>()

  constructor(public _node: DataTrait) {}

  public _match(data: any) {
    invariant(
      this._node instanceof Matchable,
      `${this._node} does not support pattern matching`
    )

    for (const value of this._instances) {
      const exactValue = this._node._match(value, data)
      if (exactValue)
        return {
          value,
          exactValue,
        }
    }

    return
  }

  public _getByKey(key: any) {
    // First try and find key directly
    if (this._keys.has(key)) return this._keys.get(key)

    // else find structurally equal value
    for (const [possibleKey, value] of this._keys) {
      if (keyIsEqual(key, possibleKey)) return value
    }

    return undefined
  }

  public toJSON(deep = true) {
    const keys: Record<string, any> = {}

    this._keys.forEach((value, key) => {
      keys[stringify(key)] = deep === true ? value.toJSON() : value
    })

    return {
      keys,
      instances: Array.from(this._instances).map(value =>
        deep === true ? value.toJSON() : value
      ),
    }
  }
}
