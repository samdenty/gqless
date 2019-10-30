import { Value } from '../Value'
import { ObjectNode, ScalarNode, ArrayNode, Outputable, Node } from '../../Node'
import { createValue } from './createValue'
import { Accessor, FieldAccessor, IndexAccessor } from '../../Accessor'
import { FieldSelection, Selection } from '../../Selection'

const FIELD_NAME = /^([^(]+)\(?/


/**
 * Merge-updates a value
 * @param value value to update
 * @param data data to merge
 * @param accessor (optional) pass to enable cache keys
 */
export const merge = (value: Value, data: any, accessor?: Accessor) => {
  try {
    if (value.node instanceof ScalarNode) {
      mergeScalar(value as any, data, accessor as any)
      return
    }

    const wasNull = value.data === null
    const isNull = data === null

    // don't do anything if both are null
    if (wasNull && isNull) return

    // simply update for null
    if (isNull) {
      value.data = null
      return
    }

    if (value.node instanceof ObjectNode) {
      if (wasNull) value.data = {}
      iterateObject(value as any, data, accessor as any)
      return
    }

    if (value.node instanceof ArrayNode) {
      // Update the array length (removing values if needed)
      value.data = wasNull ? [] : (value.data as any[]).slice(0, data.length)
      iterateArray(value as any, data, accessor as any)
      return
    }
  } finally {
    console.groupEnd()
  }

}

const keyedMerge = (data: any, accessor: Accessor) => {
  if (!accessor.isKeyable) return

  // Create a *temporary* value with the fields needed to perform a key-operation
  const keyedValue = new Value(accessor.node)
  const prevValue = accessor.value
  accessor.value = keyedValue
  accessor.onValueChange.pause()

  // TODO: Only merge require fields, as this could be expensive
  merge(keyedValue, data, accessor)

  const result = accessor.getKey(keyedValue)
  accessor.value = prevValue
  accessor.onValueChange.unpause()
  if (!result) return

  // Update value (possibly triggering re-fetch)
  accessor.updateValue(result.value)

  // If the value was already in the cache, merge the new data
  if (result.value !== keyedValue) {
    merge(result.value, data, accessor)
  }

  return result.value
}

const mergeScalar = (value: Value<ScalarNode>, data: any, accessor?: Accessor<Selection<ScalarNode>>) => {
  if (accessor) {
    const keyedValue = keyedMerge(data, accessor)
    if (keyedValue) return
  }

  value.data = data
}

const iterateArray = (value: Value<ArrayNode<Node & Outputable>>, data: unknown[], accessor?: Accessor<Selection<ArrayNode>>) => {
  data.forEach((data, key) => {
    let keyValue = value.get(key)
    let indexAccessor: IndexAccessor | undefined

    if (accessor) {
      indexAccessor = accessor.get(key) || new IndexAccessor(accessor, key)
      const keyedValue = keyedMerge(data, indexAccessor)
      if (keyedValue) return
    }

    if (!keyValue) {
      keyValue = createValue(value.node.ofNode, data)
      value.set(key, keyValue)
    }

    merge(keyValue, data, indexAccessor)
  })
}

const iterateObject = (value: Value<ObjectNode>, data: Record<string, any>, accessor?: Accessor<Selection<ObjectNode>>) => {
  for (const key of Object.keys(data)) {
    if (key === '__typename') continue

    let fieldName = key
    if (!value.node.fields.hasOwnProperty(key))  {
      fieldName = fieldName.match(FIELD_NAME)?.[1]!
      if (!fieldName || !value.node.fields.hasOwnProperty(fieldName)) continue
    }

    const field = value.node.fields[fieldName]

    let valueForKey = value.get(key)
    let fieldAccessor: FieldAccessor | undefined

    if (accessor) {
      fieldAccessor = accessor.get<FieldAccessor>(key)
      if (!fieldAccessor) {
        let fieldSelection = accessor.selection.get<FieldSelection>(key)
        if (!fieldSelection) {
          fieldSelection = new FieldSelection(field)
          accessor.selection.add(fieldSelection)
        }
        fieldAccessor = new FieldAccessor(accessor, fieldSelection)
      }

      const keyedValue = keyedMerge(data[key], fieldAccessor)
      if (keyedValue) continue
    }

    if (!valueForKey) {
      valueForKey = createValue(field.ofNode, data[key])
      value.set(key, valueForKey)
    }

    merge(valueForKey, data[key], fieldAccessor)
  }
}
