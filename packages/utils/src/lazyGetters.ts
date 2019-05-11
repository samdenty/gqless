export const lazyGetters = <T extends Record<any, any>>(
  obj: T,
  onEvaluated?: (key: keyof T, value: T[keyof T]) => void
): T => {
  for (const [key, descriptor] of Object.entries(
    Object.getOwnPropertyDescriptors(obj)
  )) {
    if (!('get' in descriptor)) {
      if (onEvaluated) onEvaluated(key, obj[key])

      continue
    }

    if (!descriptor.configurable) {
      console.warn('Could not memoize non-configurable getter', key, 'on', obj)
      continue
    }

    Object.defineProperty(obj, key, {
      ...descriptor,
      get() {
        const value = descriptor.get!()
        Object.defineProperty(obj, key, {
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          enumerable: true,
          value,
        })
        if (onEvaluated) onEvaluated(key, value)
        return value
      },
      enumerable: true,
    })
  }

  return obj
}
