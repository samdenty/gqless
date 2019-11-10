import { Value } from '../Value'
import { keyIsValid, Extension } from '../../Node'
import { NodeEntry } from '../NodeEntry'
import { Cache } from '../Cache'

export const getKeyFromCache = (cache: Cache, value$: Value, extensions: Extension[]) => {
  const node = value$.node$

  let entry = cache.entries$.get(node)

  // Iterate through extensions and call GET_KEY
  // if the key exists in the cache, then return it
  // else create a new cache entry
  let preferedKey: unknown
  let result: { key$: any, value$: Value } | undefined
  for (const extension of extensions) {
    if (!extension.isKeyable$) continue

    const key$ = extension.getKey$(value$)
    if (!keyIsValid(key$)) continue
    if (!keyIsValid(preferedKey)) preferedKey = key$

    // Check to see if the key already exists in cache
    const keyedValue = entry?.getByKey$(key$)

    if (!result && keyedValue) {
      result = { key$, value$: keyedValue }
      // if there's no value, complete loop before returning
      if (value$) return result
    }
  }

  if (result) return result

  // no keyed extension found
  if (!keyIsValid(preferedKey) || !value$) return

  if (!entry) {
    entry = new NodeEntry(node)
    cache.entries$.set(node, entry)
  }

  // add a new key to cache
  entry.keys$.set(preferedKey, value$)

  return { key$: preferedKey, value$ }
}
