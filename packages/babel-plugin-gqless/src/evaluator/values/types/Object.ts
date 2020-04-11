import { V } from '../V'
import { NodePath } from '@babel/core'
import { FunctionV } from './Function'
import { createClass } from '../utils'
import { GlobalContext } from '../../GlobalContext'

export const createObjectPrototype = (ctx: GlobalContext) =>
  createClass(ctx, function Object(): any {}, {
    toString: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: new FunctionV(ctx, null),
    },
  })

export interface PropertyDescriptor {
  configurable?: boolean
  enumerable?: boolean
  writable?: boolean
  value?: V
  get?: FunctionV
  set?: FunctionV
}

export class ObjectV<
  T extends Record<string, any> = Record<string, any>
> extends V<T> {
  public descriptors = new Map<string, PropertyDescriptor>()

  constructor(ctx: GlobalContext, path: NodePath | null, value: T = {} as any) {
    super(path, () => {
      const addProperties = (obj: ObjectV) => {
        if (obj.proto) addProperties(obj.proto)

        obj.descriptors.forEach((descriptor, key: keyof T) => {
          Object.defineProperty(value, key, {
            enumerable: true,
            configurable: true,
            get() {
              return descriptor.value?.value
            },
          })
        })
      }
      addProperties(this)
      return value
    })
    this.proto = ctx.ObjectPrototype
  }

  static from(
    globalContext: GlobalContext,
    path: NodePath | null,
    properties: Record<string, PropertyDescriptor>
  ) {
    const obj = new ObjectV(globalContext, path)
    obj.defineProperties(properties)
    return obj
  }

  public set(prop: string) {}

  public get(prop: string) {
    const descriptor = this.descriptors.get(prop)
    if (descriptor) {
      return descriptor.value
    }

    return super.get(prop)
  }

  public has(prop: string) {
    if (this.descriptors.has(prop)) {
      return true
    }

    return super.has(prop)
  }

  public getOwnPropertyNames() {
    return Array.from(this.descriptors.keys())
  }

  public defineProperty(key: string, descriptor: PropertyDescriptor) {
    this.descriptors.set(key, descriptor)
  }

  public defineProperties(properties: Record<string, PropertyDescriptor>) {
    for (const key in properties) {
      this.defineProperty(key, properties[key])
    }
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
