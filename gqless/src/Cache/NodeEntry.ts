import { Value } from './Value'
import { Matchable, keyIsEqual, DataTrait } from '../Node'
import { invariant } from '@gqless/utils'
import stringify from 'json-stable-stringify'

export class NodeEntry {
  public instances$ = new Set<Value>()
  public keys$ = new Map<any, Value>()

  constructor(public node$: DataTrait) {}

  public match$(data: any) {
    invariant(
      this.node$ instanceof Matchable,
      `${this.node$} does not support pattern matching`
    )

    for (const value of this.instances$) {
      const exactValue = this.node$.match$(value, data)
      if (exactValue)
        return {
          value,
          exactValue,
        }
    }

    return
  }

  public getByKey$(key: any) {
    // First try and find key directly
    if (this.keys$.has(key)) return this.keys$.get(key)

    // else find structurally equal value
    for (const [possibleKey, value] of this.keys$) {
      if (keyIsEqual(key, possibleKey)) return value
    }

    return undefined
  }

  public toJSON(deep = true) {
    const keys: Record<string, any> = {}

    this.keys$.forEach((value, key) => {
      keys[stringify(key)] = deep === true ? value.toJSON() : value
    })

    return {
      keys,
      instances: Array.from(this.instances$).map(value =>
        deep === true ? value.toJSON() : value
      ),
    }
  }
}
