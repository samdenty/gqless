import {
  FunctionV,
  FunctionCallback,
  ObjectV,
  PropertyDescriptor,
} from '../types'
import { GlobalContext } from '../../GlobalContext'

export const createClass = (
  globalContext: GlobalContext,
  callback: FunctionCallback,
  properties: Record<string, PropertyDescriptor>
) => {
  const Class = new FunctionV(globalContext, null, callback)

  const Prototype = ObjectV.from(globalContext, null, {
    constructor: {
      writable: true,
      enumerable: false,
      configurable: true,
      value: Class,
    },
    ...properties,
  })

  Class.defineProperty('prototype', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: Class,
  })

  return [Class, Prototype]
}
