import { getAccessor, Abstract, getAbstractImplementation } from 'gqless'
import { useComponentContext } from '../hooks/useComponentContext'
import { invariant } from '@gqless/utils'

export function ofType<
  TData extends { __typename: string },
  T extends TData['__typename']
>(data: TData, typename: T): data is TData & { __typename: T } {
  try {
    const { variantFragments } = useComponentContext()
    const accessor = getAccessor(data)

    const node = getAbstractImplementation(accessor.node, typename)
    if (node) {
      const fragment = accessor.getDefaultFragment(node)
      if (!variantFragments.has(accessor))
        variantFragments.set(accessor, new Set())

      variantFragments.get(accessor)!.add(fragment)
    }
  } catch {}

  return data.__typename === typename
}
