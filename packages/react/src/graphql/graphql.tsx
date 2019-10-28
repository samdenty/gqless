import * as React from 'react'
import { Query } from 'gqless'
import { useComponentContext } from '../hooks/useComponentContext'
import { StackContext } from '../Query'
import { useAccessors } from './useAccessors'
import { useFragments, VariantContext } from './useFragments'

export interface IGraphQLOptions {
  name?: string
  seperateRequest?: boolean
  /**
   * Whether or not child components can use their own queries.
   *
   * true  | child components can use their own queries
   * false | all queries will be merged into this components query
   * null  | (default) inherited with React context
   */
  allowInheritance?: boolean | null
}

export const graphql = <Props extends any>(
  component: (props: Props) => any,
  {
    name,
    allowInheritance = null,
    seperateRequest = false,
  }: IGraphQLOptions = {}
) => {
  const query = new Query(name, false)
  const state: any[] = []

  const GraphQLComponent = (props: Props) => {
    const parentVariant = React.useContext(VariantContext)
    const parentStack = React.useContext(StackContext)

    const stack = React.useMemo((): StackContext => {
      if (!parentStack.inheritance) return parentStack

      return {
        ...parentStack,
        inheritance:
          allowInheritance === null
            ? parentStack.inheritance
            : allowInheritance,
        frames: seperateRequest ? [query] : [...parentStack.frames, query],
      }
    }, [seperateRequest || parentStack])

    useComponentContext.value = {
      variantFragments: undefined!,
      lastStateIndex: -1,
      state,
      stack,
      accessors: undefined!,
      query,
      schedulers: undefined!,
    }

    const {
      accessors,
      schedulers,
      startIntercepting,
      stopIntercepting,
      updateAccessors,
    } = useAccessors(stack)
    Object.assign(useComponentContext, { accessors, schedulers })

    const {
      variantFragments,
      startResolving,
      stopResolving,
      getRenderVariants,
    } = useFragments()
    Object.assign(useComponentContext, { variantFragments })

    try {
      startResolving()
      startIntercepting()

      var returnValue = component(props)
    } catch (e) {
      throw e
    } finally {
      useComponentContext.value = undefined
      stopIntercepting()
      stopResolving()
    }

    // If we've recorded Abstract accessors in the
    // variantFragments, then create an array
    // containing all variants of the resolved types
    //
    // then return a new component for each variant,
    // which will convert accessors into fragmentaccessors
    // at render.
    if (variantFragments.size) {
      const renderVariants = getRenderVariants()

      if (renderVariants.length)
        return renderVariants.map((variant, i) => (
          <VariantContext.Provider
            key={i}
            value={[...parentVariant, ...variant]}
          >
            <GraphQLComponent {...props} />
          </VariantContext.Provider>
        ))
    }

    returnValue = (
      <StackContext.Provider value={stack}>{returnValue}</StackContext.Provider>
    )

    const promise = updateAccessors()

    // React suspense support
    if (promise) {
      let resolved = false
      promise.then(() => (resolved = true))

      // We can't directly throw the promise, otherwise
      // child components (with data requirements) won't
      // render - meaning multiple requests
      //
      // To prevent this we instead return a Fragment,
      // which contains a component that throws the Promise.
      const Suspend = () => {
        // This is necessary to prevent an infinite loop
        if (resolved) return null

        throw promise
      }

      return (
        <>
          {returnValue}
          <Suspend />
        </>
      )
    }

    return returnValue
  }

  GraphQLComponent.displayName = (component as any).displayName
  GraphQLComponent.query = query

  return GraphQLComponent
}
