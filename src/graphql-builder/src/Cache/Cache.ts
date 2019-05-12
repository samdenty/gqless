import { onEvent } from '../utils'
import { Accessor } from '../Accessor'

export class Cache {
  public store = new Map<string, any>()
  constructor() {}

  public onUpdate = onEvent()

  /**
   * Update a cache entry
   * @param cacheKey A key that points to either an ObjectNode or ArrayNode
   * @param newValue The new value
   */
  public update(
    cacheKey: string,
    newValue: Record<string, unknown> | unknown[]
  ) {
    if (!this.store.has(cacheKey)) {
      console.log('insert', cacheKey)
      // Newly added cache entry
      this.store.set(cacheKey, newValue)
      return
    }

    const currentValue = this.store.get(cacheKey)

    // If the values are the same (ie. null === null) return
    if (currentValue === newValue) return

    if (currentValue === null && newValue !== null) {
      // Previous value was null, new value ain't.
      this.store.set(cacheKey, newValue)
      console.log('from null to not-null', cacheKey)
      return
    }

    if (currentValue !== null && newValue === null) {
      // Delete all keys starting with the newly-nulled key
      for (const key of this.store.keys()) {
        // This needs to be changed, to accessor logic
        if (key.startsWith(cacheKey)) {
          this.store.delete(key)
        }
      }

      console.log('from not-null to null', cacheKey)

      this.store.set(cacheKey, newValue)
      return
    }

    // Merge values
    if (newValue instanceof Array) {
      // todo
      console.log('merge array', currentValue, newValue)
      return
    }

    console.log('merge object', cacheKey)

    for (const key of Object.keys(newValue)) {
      if (key in currentValue) {
        if (currentValue[key] === newValue[key]) return
        console.log('updated key', key, cacheKey)
        return
      }

      // if (Accessor type === scalar)
      console.log('created key', `${cacheKey}.${key}`)
      currentValue[key] = newValue[key]
      // else return
    }
  }
}
