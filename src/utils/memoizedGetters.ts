export const memoizedGetters = <T extends Record<any, any>>(obj: T): T => {
  for (const [name, descriptor] of Object.entries(
    Object.getOwnPropertyDescriptors(obj)
  )) {
    if ('get' in descriptor) {
      if (!descriptor.configurable) {
        console.warn(
          'Could not memoize non-configurable getter',
          name,
          'on',
          obj
        )
        continue
      }

      Object.defineProperty(obj, name, {
        ...descriptor,
        get() {
          const value = descriptor.get()
          Object.defineProperty(obj, name, {
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            enumerable: true,
            value,
          })
          return value
        },
        enumerable: true,
      })
    }
  }

  return obj
}
