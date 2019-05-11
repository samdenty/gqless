export const onEvent = <TCallback extends (...args: any[]) => any>() => {
  const listeners = new Set<TCallback>()

  const onEvent = (callback: TCallback) => {
    listeners.add(callback)

    return () => {
      listeners.delete(callback)
    }
  }

  onEvent.off = (callback: TCallback) => {
    listeners.delete(callback)
  }

  onEvent.emit = (...args: Parameters<TCallback>) => {
    return Array.from(listeners).map(emit => emit(...args))
  }

  onEvent.first = (
    isCorrectValue: (value: ReturnType<TCallback>) => boolean
  ) => (...args: Parameters<TCallback>) => {
    for (const emit of Array.from(listeners)) {
      const value = emit(...args)
      if (isCorrectValue) return value
    }
  }

  return onEvent
}
