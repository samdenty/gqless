import { createEvent } from '../createEvent'

const keyValues = new WeakMap<any, Map<any, any>>()

export const createSetter = <T, K extends keyof T>(object: T, key: K) => {
  if (!keyValues.has(object)) {
    keyValues.set(object, new Map())
  }
  const valueForKey = keyValues.get(object)!
  const event = createEvent<(prevValue: T[K], newValue: T[K]) => void>()
  valueForKey.set(key, object[key])

  Object.defineProperty(object, key, {
    get() {
      return valueForKey.get(key)
    },
    set(value) {
      const prevValue = valueForKey.get(key)
      if (value === prevValue) return
      valueForKey.set(key, value)
      event.emit(prevValue, value)
      return true
    },
    enumerable: true,
    configurable: true,
  })

  return event
}
