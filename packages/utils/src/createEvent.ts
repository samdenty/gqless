export const createEvent = <TCallback extends (...args: any[]) => any>() => {
  return new Event()
}

export class Event<TCallback extends (...args: any[]) => any> {
  listeners = new Set<TCallback>()

  listen(callback: TCallback) {
    this.listeners.add(callback)
    return () => this.off(callback)
  }

  filter(filter: (...parameters: Parameters<TCallback>) => boolean) {
    const filteredEvent = createEvent<TCallback>()

    this.listen(((...args: Parameters<TCallback>) => {
      const shouldEmit = filter(...args)
      if (!shouldEmit) return

      return filteredEvent.emit(...args)
    }) as TCallback)
    return filteredEvent
  }

  then(callback: TCallback) {
    const listener = ((...args: any[]) => {
      this.off(listener)

      return callback(...args)
    }) as TCallback

    return this.listen(listener)
  }

  off(callback: TCallback) {
    this.listeners.delete(callback)
  }

  emit = (...args: Parameters<TCallback>) => {
    for (const emit of Array.from(this.listeners)) {
      emit(...args)
    }
  }
}
