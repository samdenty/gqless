import { ScalarNode, ArrayNode, Abstract } from '../../Node'
import { Value } from '../Value'
import { Accessor, FragmentAccessor } from '../../Accessor'
import { invariant } from '@gqless/utils'
import { Fragment } from '../../Selection'

const resolveFragmentAccessor = (accessor: Accessor, data: any) => {
  if (!data) return
  const { __typename } = data
  if (!__typename || __typename === accessor.node.toString()) return

  invariant(
    accessor.node instanceof Abstract,
    `Received __typename '${__typename}' for non-abstract type '${accessor.node}`
  )

  const { implementations } = accessor.node as Abstract
  const node = implementations.find(i => i.toString() === __typename)

  invariant(
    node,
    `Unknown __typename '${__typename}' for type '${
      accessor.node
    }', expected oneof ${implementations.map(n => `'${n}'`).join(', ')}`
  )

  // TODO: this could find the wrong accessor, and add
  // selections to the wrong fragment
  let fragmentAccessor = accessor.get<FragmentAccessor>(
    a => a instanceof FragmentAccessor && a.node === node
  )

  if (!fragmentAccessor) {
    let fragment = accessor.selection.get<Fragment>(
      f => f instanceof Fragment && f.node === node
    )

    if (!fragment) {
      fragment = new Fragment(node!)
      accessor.selection.add(fragment)
    }

    fragmentAccessor = new FragmentAccessor(accessor, fragment)
  }

  return fragmentAccessor
}

export const shallowUpdate = (
  accessor: Accessor,
  data?: any
): FragmentAccessor | undefined => {
  const fragmentAccessor = resolveFragmentAccessor(accessor, data)

  const { node } = fragmentAccessor || accessor
  const { parent, value } = accessor

  // Update the value if it exists
  if (value) {
    if (data === undefined) return fragmentAccessor

    if (node instanceof ScalarNode) {
      value.update(data)
      return fragmentAccessor
    }

    const wasNull = value.data === null
    const isNull = data === null

    if (wasNull === isNull) return fragmentAccessor

    if (isNull && !wasNull) {
      value.update(null)
      return fragmentAccessor
    }

    if (wasNull && !isNull) {
      value.update(node instanceof ArrayNode ? [] : {})
      return fragmentAccessor
    }

    if (node instanceof ArrayNode) {
      // Update the array length (removing values / adding empty elements)
      value.update((value.data as any[]).slice(0, data.length))
      return fragmentAccessor
    }

    return fragmentAccessor
  }

  // ensure parent values exist
  shallowUpdate(parent!)

  // initialize a new value
  const accessorValue = new Value(
    node,
    // Only initialize with data if it's a ScalarNode
    node instanceof ScalarNode ? data : undefined
  )

  parent!.value!.set(accessor.toString(), accessorValue)

  return fragmentAccessor
}
