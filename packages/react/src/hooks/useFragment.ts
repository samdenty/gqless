import {
  Fragment,
  getAccessor,
  NodeContainer,
  ObjectNode,
  fragmentOn,
  Abstract,
} from 'gqless'
import { useMemo } from 'react'
import { invariant } from '@gqless/utils'

type OfType<TData, TTypename> = TData extends { __typename: TTypename }
  ? TData
  : never

export function useFragment<
  TData extends { __typename: string },
  TTypename extends TData['__typename'] = never
>(
  data: TData,
  onType?: TTypename,
  fragmentName?: string
): OfType<TData, TTypename> extends never ? TData : OfType<TData, TTypename> {
  const accessor = getAccessor(data)

  const node = useMemo(() => {
    const node =
      accessor.node instanceof NodeContainer
        ? accessor.node.innerNode
        : accessor.node

    if (onType) {
      if (node instanceof Abstract) {
        const implementation = node.implementations.find(
          node => node.toString() === onType
        )
        if (implementation) return implementation
      }

      invariant(
        node.toString() === onType,
        `Fragment type "${onType}" doesn't match provided data of type "${node}"`
      )
    }

    return node
  }, [accessor.node, onType]) as ObjectNode

  const fragment = useMemo(() => new Fragment(node, fragmentName), [node])

  useMemo(() => {
    fragment.name = fragmentName
  }, [fragment, fragmentName])

  const fragmentAccessor = useMemo(() => fragmentOn(accessor, fragment), [
    accessor,
    fragment,
  ])

  return fragmentAccessor.data
}
