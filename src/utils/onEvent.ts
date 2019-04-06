export const onEvent = <
  TCallback extends (...args: any[]) => any,
  THandlerArgs extends any[] = any[]
>(
  onEventHandler?: (...args: THandlerArgs) => void
) => {
  const listeners = new Set<TCallback>()

  const onEvent = (callback: TCallback, ...args: THandlerArgs) => {
    listeners.add(callback)
    if (onEventHandler) {
      onEventHandler(...args)
    }

    return () => {
      listeners.delete(callback)
    }
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
