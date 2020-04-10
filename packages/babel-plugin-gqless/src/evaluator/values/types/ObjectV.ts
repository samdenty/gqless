import { V } from '../V'
import { NodePath } from '@babel/core'
import { FunctionV } from './FunctionV'

const NONE = Symbol()

export interface PropertyDescriptor {
  configurable?: boolean
  enumerable?: boolean
  writable?: boolean
  value?: V
  get?: FunctionV
  set?: FunctionV
}

export class ObjectV<T = Record<string, any>> extends V<T> {
  public descriptors = new Map<string, PropertyDescriptor>()

  constructor(path: NodePath, value: T | (() => T) = NONE as any) {
    super(
      path,
      (value as any) === NONE
        ? () => {
            this.descriptors.forEach((descriptor, key) => {
              obj[key] = descriptor.value?.value
            })
            return obj
          }
        : value
    )
    const obj = {} as T
  }

  public getOwnPropertyNames() {
    return Array.from(this.descriptors.keys())
  }

  public defineProperty(key: string, descriptor: PropertyDescriptor) {
    this.descriptors.set(key, descriptor)
  }

  public assign(...objs: ObjectV[]) {
    for (const obj of objs) {
      for (const [key, descriptor] of obj.descriptors) {
        if (!descriptor.enumerable) continue

        this.defineProperty(key, descriptor)
      }
    }
  }
}
