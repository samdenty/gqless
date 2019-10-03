import { Query, Accessor, Fragment, ObjectNode } from 'gqless'
import { StackContext } from '../Query'
import { invariant } from '@gqless/utils'

export type VariantFragments = Map<Accessor, Set<Fragment>>
export type ComponentFragment = WeakMap<ObjectNode, Fragment>

export interface ComponentContext {
  query: Query
  stack: StackContext
  accessors: Set<Accessor>

  // Fragments to be used for render variants
  variantFragments: VariantFragments

  // Global component state
  lastStateIndex: number
  state: any[]
}

/**
 * Returns the current context, for a component
 * wrapped in `graphql()`
 */
export const useComponentContext = () => {
  invariant(
    useComponentContext.value,
    `useComponentContext can only be called within a graphql() wrapped component`
  )

  return useComponentContext.value
}

useComponentContext.value = undefined as ComponentContext | undefined
