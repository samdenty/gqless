import {
  Fragment,
  getAccessor,
  NodeContainer,
  ObjectNode,
  fragmentOn,
  FragmentAccessor,
  getAbstractImplementation,
} from 'gqless'
import { useMemo } from 'react'
import { useComponentMemo } from './useComponentMemo'

type OfType<TData, TTypename> = TData extends { __typename: TTypename }
  ? TData
  : never

/**
 * Creates a new fragment (same across all instances of component)
 */
export function useFragment<
  TData extends { __typename: string },
  TTypename extends TData['__typename'] = never
>(
  data: TData,
  onType?: TTypename,
  fragmentName?: string
): OfType<TData, TTypename> extends never ? TData : OfType<TData, TTypename> {
  let accessor = getAccessor(data)

  if (accessor instanceof FragmentAccessor) {
    accessor = accessor._parent
  }

  const node = useMemo(() => {
    const node =
      accessor._node instanceof NodeContainer
        ? accessor._node.innerNode
        : accessor._node

    if (onType) {
      const nodeImplementation = getAbstractImplementation(node, onType)
      if (nodeImplementation) return nodeImplementation
    }

    return node
  }, [accessor._node, onType]) as ObjectNode

  const fragment = useComponentMemo(() => new Fragment(node, fragmentName), [
    node,
  ])

  useMemo(() => {
    if (!fragmentName) return
    fragment._name = fragmentName
  }, [fragment, fragmentName])

  const fragmentData = useMemo(() => fragmentOn(accessor, fragment), [
    accessor,
    fragment,
  ])

  return fragmentData
}
