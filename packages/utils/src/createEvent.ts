export const createEvent = <TCallback extends (...args: any[]) => any>() => {
  let paused = false
  const listeners = new Set<TCallback>()

  const event = (callback: TCallback) => {
    listeners.add(callback)

    return () => event.off(callback)
  }

  event.filter = (
    filter: (...parameters: Parameters<TCallback>) => boolean
  ) => {
    const filteredEvent = createEvent<TCallback>()

    event(((...args: Parameters<TCallback>) => {
      const shouldEmit = filter(...args)
      if (!shouldEmit) return

      return filteredEvent.emit(...args)
    }) as TCallback)
    return filteredEvent
  }

  // Called once, then disposed
  event.then = (callback: TCallback) => {
    const listener = ((...args: any[]) => {
      event.off(listener)

      return callback(...args)
    }) as TCallback

    return event(listener)
  }

  event.off = (callback: TCallback) => {
    listeners.delete(callback)
  }

  event.emit = (...args: Parameters<TCallback>) => {
    if (paused) return
    return Array.from(listeners).map(emit => emit(...args))
  }

  event.pause = () => {
    paused = true
  }

  event.unpause = () => {
    paused = false
  }

  return event
}
