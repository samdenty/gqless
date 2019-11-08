import { Value } from '../Value'
import { keyIsValid, Extension } from '../../Node'
import { NodeEntry } from '../NodeEntry'
import { Cache } from '../Cache'

export const getKeyFromCache = (cache: Cache, _value: Value, extensions: Extension[]) => {
  const node = _value.node

  let entry = cache._entries.get(node)

  // Iterate through extensions and call GET_KEY
  // if the key exists in the cache, then return it
  // else create a new cache entry
  let preferedKey: unknown
  let result: { _key: any, _value: Value } | undefined
  for (const extension of extensions) {
    if (!extension._isKeyable) continue

    const _key = extension._getKey(_value)
    if (!keyIsValid(_key)) continue
    if (!keyIsValid(preferedKey)) preferedKey = _key

    // Check to see if the key already exists in cache
    const keyedValue = entry?._getByKey(_key)

    if (!result && keyedValue) {
      result = { _key, _value: keyedValue }
      // if there's no value, complete loop before returning
      if (_value) return result
    }
  }

  if (result) return result

  // no keyed extension found
  if (!keyIsValid(preferedKey) || !_value) return

  if (!entry) {
    entry = new NodeEntry(node)
    cache._entries.set(node, entry)
  }

  // add a new key to cache
  entry._keys.set(preferedKey, _value)

  return { _key: preferedKey, _value }
}
