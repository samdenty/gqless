export const lazyGetters = <T extends Record<any, any>>(
  obj: T,
  onEvaluated?: (key: keyof T, value: T[keyof T]) => void
): T => {
  for (const key in obj) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key)
    if (!descriptor) continue
    const prevGet = descriptor.get

    if (!prevGet) {
      onEvaluated?.(key, obj[key])
      continue
    }

    if (!descriptor.configurable) continue

    Object.defineProperty(obj, key, {
      ...descriptor,
      get() {
        const value = prevGet()
        Object.defineProperty(obj, key, {
          configurable: true,
          writable: false,
          enumerable: true,
          value,
        })

        onEvaluated?.(key, value)
        return value
      },
    })
  }

  return obj
}
