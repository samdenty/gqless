import * as v from './values'
import { NodePath } from '@babel/core'
import { Context } from './Context'

export const serialize = (path: NodePath, value: any, context?: Context) => {
  const addDescriptors = (obj: v.ObjectV) => {
    const descriptors = Object.getOwnPropertyDescriptors(value)
    for (const key in descriptors) {
      const descriptor = descriptors[key]

      obj.defineProperty(key, {
        value: serialize(path, value[key]),
        configurable: descriptor.configurable,
        enumerable: descriptor.enumerable,
        writable: descriptor.writable,
      })
    }
  }

  if (value === undefined) {
    return new v.UndefinedV(path)
  }

  if (value === null) {
    return new v.NullV(path)
  }

  if (typeof value === 'function') {
    const func = new v.FunctionV(context, path, value)
    addDescriptors(func)
    return func
  }

  if (typeof value === 'number') {
    return new v.NumberV(path, value)
  }
  if (typeof value === 'string') {
    return new v.StringV(path, value)
  }
  if (typeof value === 'boolean') {
    return new v.BooleanV(path, value)
  }

  const obj = new v.ObjectV(path)
  addDescriptors(obj)
  return obj
}
