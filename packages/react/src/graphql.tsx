import { Accessor, Interceptor, Query, Scheduler, Selection } from 'gqless'
import * as React from 'react'

import { useForceUpdate } from './hooks/useForceUpdate'
import { StackContext } from './Query'

export interface IQueryOptions {
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
  { name, allowInheritance = null, seperateRequest = false }: IQueryOptions = {}
) => {
  const query = new Query(name, false)

  const GraphQLComponent = (props: Props) => {
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

    const accessorDisposers = React.useMemo(
      () => new Map<Accessor, Function>(),
      []
    )
    const accessors = React.useMemo(() => new Set<Accessor>(), [])
    const forceUpdate = useForceUpdate()

    React.useEffect(() => {
      return () => {
        accessorDisposers.forEach(dispose => dispose())
      }
    }, [])

    // Create a new Interceptor, which can tracks the usage
    // of accessors
    const interceptor = new Interceptor()

    // When a new accessor is found, retrieve the
    // scheduler associated with it
    //
    // Then call Scheduler#beginQuery, with the
    // component's stac
    const schedulers = new Set<Scheduler>()
    const interceptedAccessors = new Set<Accessor>()

    interceptor.onAccessor(accessor => {
      interceptedAccessors.add(accessor)

      if (schedulers.has(accessor.scheduler)) return
      schedulers.add(accessor.scheduler)

      stack.frames.forEach(query => {
        accessor.scheduler.beginQuery(query)
      })
    })

    try {
      // Begin intercepting accessors, located inside
      // within component's render method
      interceptor.start()
      var returnValue = component(props)
    } catch (e) {
      throw e
    } finally {
      interceptor.stop()

      // Cleanup the previous Scheduler#beginQuery
      // calls made earlier
      schedulers.forEach(scheduler => {
        for (let i = stack.frames.length - 1; i >= 0; --i) {
          const query = stack.frames[i]
          scheduler.endQuery(query)
        }
      })
    }

    // Find all the new accessors and add to Set
    interceptedAccessors.forEach(accessor => {
      if (accessors.has(accessor)) return

      accessors.add(accessor)
      accessorDisposers.set(
        accessor,
        // Make component update when data changes
        accessor.onDataUpdate(() => {
          forceUpdate()
        })
      )
    })

    const fetchingSelections = new Set<Selection>()

    accessors.forEach(accessor => {
      // Locate accessors currently being fetched,
      // and add to Set
      if (interceptedAccessors.has(accessor)) {
        if (accessor.selection.isFetching) {
          fetchingSelections.add(accessor.selection)
        }

        return
      }

      // Remove previously used accessors, that
      // aren't required anymore
      const dispose = accessorDisposers.get(accessor)
      if (dispose) {
        accessorDisposers.delete(accessor)
        dispose()
      }
      accessors.delete(accessor)
    })

    returnValue = (
      <StackContext.Provider value={stack}>{returnValue}</StackContext.Provider>
    )

    // React suspense support
    if (fetchingSelections.size) {
      // Promise that resolves when all selections are fetched
      let resolve: Function
      let resolved = false
      const promise = new Promise(r => (resolve = r))

      fetchingSelections.forEach(selection => {
        selection.onFetched.then(() => {
          fetchingSelections.delete(selection)

          if (!fetchingSelections.size) {
            resolved = true
            resolve()
          }
        })
      })

      // We can't directly throw the promise, otherwise
      // child components (with data requirements) won't
      // render - meaning multiple requests
      //
      // To prevent this we instead return a Fragment,
      // which contains a component that throws the Promise.
      const SuspendComponent = () => {
        // This is necessary to prevent an infinite loop
        if (resolved) return null

        throw promise
      }

      return (
        <>
          {returnValue}
          <SuspendComponent />
        </>
      )
    }

    return returnValue
  }

  GraphQLComponent.displayName = (component as any).displayName
  GraphQLComponent.query = query

  return GraphQLComponent
}
