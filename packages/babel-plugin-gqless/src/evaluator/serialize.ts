import { Context } from './Context'
import * as v from './values'

export const serialize = (ctx: Context, value: any) => {
  const addDescriptors = (obj: v.ObjectV) => {
    const descriptors = Object.getOwnPropertyDescriptors(value)
    for (const key in descriptors) {
      const descriptor = descriptors[key]

      obj.defineProperty(key, {
        value: serialize(ctx.globalContext, value[key]),
        configurable: descriptor.configurable,
        enumerable: descriptor.enumerable,
        writable: descriptor.writable,
      })
    }
  }

  if (value === undefined) {
    return new v.UndefinedV(null)
  }

  if (value === null) {
    return new v.NullV(null)
  }

  if (typeof value === 'function') {
    const func = new v.FunctionV(ctx, null, value)
    addDescriptors(func)
    return func
  }

  if (typeof value === 'number') {
    return new v.NumberV(ctx.globalContext, null, value)
  }
  if (typeof value === 'string') {
    return new v.StringV(ctx.globalContext, null, value)
  }
  if (typeof value === 'boolean') {
    return new v.BooleanV(ctx.globalContext, null, value)
  }

  const obj = new v.ObjectV(ctx.globalContext, null)
  addDescriptors(obj)
  return obj
}
