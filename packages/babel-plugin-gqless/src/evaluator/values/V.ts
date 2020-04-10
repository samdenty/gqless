import * as v from '.'
import { NodePath } from '@babel/core'
import { Context } from '../Context'

export class V<T = any> {
  public value!: T
  public runtime?: true

  constructor(public path: NodePath, value: T | (() => T), runtime?: boolean) {
    if (runtime) this.runtime = true

    if (typeof value === 'function') {
      Object.defineProperty(this, 'value', { get: value as any })
    } else {
      this.value = value
    }
  }

  public isAddible(): this is v.NumberV | v.BooleanV {
    return this instanceof v.NumberV || this instanceof v.BooleanV
  }

  [Symbol.toPrimitive]() {
    return this.value
  }
}
