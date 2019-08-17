type ToCallback<T> = T extends (...args: any[]) => any ? T : (data: T) => void

export const createEvent = <T extends any>() => {
  type TCallback = ToCallback<T>

  const listeners = new Set<TCallback>()

  const onEvent = (callback: TCallback) => {
    listeners.add(callback)

    return () => onEvent.off(callback)
  }

  /**
   * Called once, then disposed
   */
  onEvent.then = (callback: TCallback) => {
    const listener = ((...args: any[]) => {
      onEvent.off(listener)

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
