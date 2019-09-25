import {
  Fragment,
  getAccessor,
  NodeContainer,
  InterfaceNode,
  UnionNode,
  UFragment,
  Node,
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
      const possibleNodes: Node[] | undefined =
        node instanceof UnionNode
          ? node.ofNodes
          : node instanceof InterfaceNode
          ? node.implementations
          : undefined

      if (possibleNodes) {
        const node = possibleNodes.find(node => node.toString() === onType)
        if (node) return node
      }

      invariant(
        node.toString() === onType,
        `Fragment type "${onType}" doesn't match provided data of type "${node}"`
      )
    }

    return node
  }, [accessor.node, onType]) as UFragment

  const fragment = useMemo(() => new Fragment(node, fragmentName), [
    node,
    fragmentName,
  ])
  console.log(fragment)
  // new Fragment()

  return node
}
