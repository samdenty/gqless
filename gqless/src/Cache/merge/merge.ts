import { Value } from '../Value'
import { ObjectNode, ScalarNode, ArrayNode, Outputable, Node } from '../../Node'
import { createValue } from './createValue'
import { Accessor, FieldAccessor, IndexAccessor } from '../../Accessor'
import { FieldSelection, Selection, Fragment } from '../../Selection'

const FIELD_NAME = /^([^(]+)\(?/


/**
 * Merge-updates a value
 * @param value value to update
 * @param data data to merge
 * @param accessor (optional) pass to enable cache keys
 * @param selectionsFilter (optional) pass to filter merging
 *
 * @returns mergeFiltered - merges the data omitted by selectionsFilter
 */
export const merge = (value: Value, data: any, accessor?: Accessor, ...selectionsFilter: Selection[]): Function | undefined => {
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
      return iterateObject(value as any, data, accessor as any, ...selectionsFilter)
    }

    if (value.node instanceof ArrayNode) {
      // Update the array length (removing values if needed)
      value.data = wasNull ? [] : (value.data as any[]).slice(0, data.length)
      iterateArray(value as any, data, accessor as any)
      return
    }
    return
  } finally {
    console.groupEnd()
  }

}

const keyedMerge = (data: any, accessor: Accessor, ...selectionsFilter: Selection[]) => {
  if (!accessor.isKeyable) return

  const { keyFragments } = accessor

  // Create a *temporary* value with the fields needed to perform a key-operation
  const keyedValue = createValue(accessor.node, data)

  // Temporarily update the accessor's value
  const prevValue = accessor.value
  accessor.value = keyedValue
  accessor.onValueChange.pause()

  // Merge only the fields required for a key-op into the new value
  const completeMerge = merge(keyedValue, data, accessor, ...keyFragments)

  // Find a key, and get value from cache
  const result = accessor.getKey(keyedValue)

  // Reset accessor value back
  accessor.value = prevValue
  accessor.onValueChange.unpause()

  // No result, discard keyedValue
  if (!result) return

  // Key was found, update value
  // this could trigger a KeyedRefetch
  accessor.updateValue(result.value)

  // If the value was already in the cache,
  // discard keyedValue and merge oncemore
  if (result.value !== keyedValue) {
    merge(result.value, data, accessor, ...selectionsFilter)
  } else {
    // Value wasn't in cache, so merge the rest of data
    // on the keyedValue
    completeMerge?.()
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

const iterateArray = (value: Value<ArrayNode<Node & Outputable>>, data: unknown[], accessor?: Accessor<Selection<ArrayNode>>, ...selectionsFilter: Selection[]) => {
  data.forEach((data, key) => {
    let keyValue = value.get(key)
    let indexAccessor: IndexAccessor | undefined

    if (accessor) {
      indexAccessor = accessor.get(key) || new IndexAccessor(accessor, key)
      const keyedValue = keyedMerge(data, indexAccessor, ...selectionsFilter)
      if (keyedValue) return
    }

    if (!keyValue) {
      keyValue = createValue(value.node.ofNode, data)
      value.set(key, keyValue)
    }

    merge(keyValue, data, indexAccessor, ...selectionsFilter)
  })
}

const iterateObject = (value: Value<ObjectNode>, data: Record<string, any>, accessor?: Accessor<Selection<ObjectNode>>, ...selectionsFilter: Selection[]) => {
  const selectionsForKey = (key: string, ...selectionsFilter: Selection[]) => {
    const selections: Selection[] = []

    for (const selection of selectionsFilter) {
      if (selection instanceof Fragment) {
        selections.push(...selectionsForKey(key, ...selection.selections))
        continue
      }

      if (selection.toString() === key) {
        selections.push(selection)
      }
    }

    return selections
  }

  const mergeKey = (key: string, ...filteredSelections: Selection[]) => {
    let fieldName = key
    if (!value.node.fields.hasOwnProperty(key))  {
      fieldName = fieldName.match(FIELD_NAME)?.[1]!
      if (!fieldName || !value.node.fields.hasOwnProperty(fieldName)) return
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
      if (keyedValue) return
    }

    if (!valueForKey) {
      valueForKey = createValue(field.ofNode, data[key])
      value.set(key, valueForKey)
    }

    merge(valueForKey, data[key], fieldAccessor, ...filteredSelections)
  }

  const mergeFiltered: Function[] = []

  for (const key of Object.keys(data)) {
    if (key === '__typename') continue

    const selections = selectionsForKey(key, ...selectionsFilter)

    // If it's not selected, add to mergeFiltered
    if (selectionsFilter.length && !selectionsForKey.length) {
      mergeFiltered.push(() => mergeKey(key, ...selections))
      continue
    }

    mergeKey(key, ...selections)
  }

  return mergeFiltered.length ? () => {
    for (const merge of mergeFiltered) {
      merge()
    }
  } : undefined
}
