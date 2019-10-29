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
}

const mergeScalar = (value: Value<ScalarNode>, data: any, accessor?: Accessor<Selection<ScalarNode>>) => {
  if (accessor) {
    const keyedValue = keyedMerge(accessor, data)
    if (keyedValue) return
  }

  value.data = data
}

export const keyedMerge = (accessor: Accessor, data: any) => {
  if (!accessor.isKeyable) return

  // Create a *temporary* value with the fields needed to perform a key-operation
  const keyedValue = new Value(accessor.node)
  merge(keyedValue, data, accessor)

  // Get a key using temporarily updated value
  const result = accessor.getKey(keyedValue)
  if (!result) return

  // Update the parent with the keyed value
  accessor.updateValue(result.value)

  // If the value was already in the cache, merge the new data
  if (result.value !== keyedValue) {
    merge(result.value, data, accessor)
  }

  return result.value
}


const iterateArray = (value: Value<ArrayNode<Node & Outputable>>, data: unknown[], accessor?: Accessor<Selection<ArrayNode>>) => {
  data.forEach((data, key) => {
    let keyValue = value.get(key)

    if (!keyValue) {
      keyValue = createValue(value.node.ofNode, data)
      value.set(key, keyValue)
    }

    if (accessor) {
      const indexAccessor = accessor.get(a => (a as IndexAccessor).index === key) || new IndexAccessor(accessor, key)

      const keyedValue = keyedMerge(indexAccessor, data)
      if (keyedValue) return

      merge(keyValue, data, indexAccessor)
      return
    }

    merge(keyValue, data)
  })
}

const iterateObject = (value: Value<ObjectNode>, data: Record<string, any>, accessor?: Accessor<Selection<ObjectNode>>) => {
  Object.entries(data).forEach(([key, data]) => {
    if (key === '__typename') return

    const fieldName = key.match(FIELD_NAME)?.[1]
    if (!fieldName || !value.node.fields.hasOwnProperty(fieldName)) return
    const field = value.node.fields[fieldName]

    let valueForKey = value.get(key)
    if (!valueForKey) {
      valueForKey = createValue(field.ofNode, data)
      value.set(key, valueForKey)
    }

    if (accessor) {
      let fieldAccessor = accessor.get<FieldAccessor>(a => a.toString() === key)
      if (!fieldAccessor) {
        let fieldSelection = accessor.selection.get<FieldSelection>(
          s => s.toString() === key
        )
        if (!fieldSelection) {
          fieldSelection = new FieldSelection(field)
          accessor.selection.add(fieldSelection)
        }
        fieldAccessor = new FieldAccessor(accessor, fieldSelection)
      }

      const keyedValue = keyedMerge(fieldAccessor, data)
      if (keyedValue) return

      merge(valueForKey, data, fieldAccessor)
      return
    }

    merge(valueForKey, data)
  })
}
