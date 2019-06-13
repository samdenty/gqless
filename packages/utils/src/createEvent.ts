export const createEvent = <TCallback extends (...args: any[]) => any>() => {
  const listeners = new Set<TCallback>()

  const onEvent = (callback: TCallback) => {
    listeners.add(callback)

    return () => onEvent.off(callback)
  }

  onEvent.once = (callback: TCallback) => {
    const listener = ((...args) => {
      onEvent.off(callback)
      return callback(...args)
    }) as TCallback

    return onEvent(listener)
  }

  onEvent.off = (callback: TCallback) => {
    listeners.delete(callback)
  }

  onEvent.emit = (...args: Parameters<TCallback>) => {
    return Array.from(listeners).map(emit => emit(...args))
  }

  // onEvent.first = (
  //   isCorrectValue: (value: ReturnType<TCallback>) => boolean
  // ) => (...args: Parameters<TCallback>) => {
  //   for (const emit of Array.from(listeners)) {
  //     const value = emit(...args)
  //     if (isCorrectValue) return value
  //   }
  // }

  return onEvent
}
