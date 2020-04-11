import * as v from '.'
import { NodePath } from '@babel/core'
import { ObjectV } from './types'

export class V<T = any> {
  public value!: T
  public runtime?: true

  public proto: ObjectV | null = null

  constructor(
    public path: NodePath | null,
    value: T | (() => T),
    runtime?: boolean
  ) {
    if (runtime) this.runtime = true

    if (typeof value === 'function') {
      Object.defineProperty(this, 'value', { get: value as any })
    } else {
      this.value = value
    }
  }

  public get(prop: string) {
    if (prop === '__proto__') {
      return this.proto
    }

    return this.proto?.get(prop)
  }

  public has(prop: string) {
    if (prop === '__proto__') {
      return true
    }

    return this.proto?.has(prop)
  }

  public isAddible(): this is v.NumberV | v.BooleanV {
    return this instanceof v.NumberV || this instanceof v.BooleanV
  }

  [Symbol.toPrimitive]() {
    return this.value
  }
}
