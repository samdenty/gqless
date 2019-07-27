import * as React from 'react'

import { useForceUpdate } from './hooks/useForceUpdate'
import {
  Accessor,
  Recorder,
  Query,
  Scheduler,
  Selection,
} from 'gqless'
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

    const record = new Recorder()

    // Get the schedulers associated with accessors, and link
    // them up to the query
    const schedulers = new Set<Scheduler>()
    record.onAccessor(({ scheduler }) => {
      if (schedulers.has(scheduler)) return
      schedulers.add(scheduler)

      stack.frames.forEach(query => {
        scheduler.beginQuery(query)
      })
    })

    try {
      record.start()
      var returnValue = component(props)
    } catch (e) {
      throw e
    } finally {
      record.stop()

      // Cleanup scheduler calls
      schedulers.forEach(scheduler => {
        for (let i = stack.frames.length - 1; i >= 0; --i) {
          const query = stack.frames[i]
          scheduler.endQuery(query)
        }
      })
    }

    // Add new accessors
    record.accessors.forEach(accessor => {
      if (accessors.has(accessor)) return

      accessors.add(accessor)
      accessorDisposers.set(
        accessor,
        accessor.onDataUpdate(() => {
          forceUpdate()
        })
      )
    })

    const fetchingSelections = new Set<Selection>()

    // Remove unused accessors
    accessors.forEach(accessor => {
      if (record.accessors.has(accessor)) {
        if (accessor.selection.isFetching) {
          fetchingSelections.add(accessor.selection)
        }

        return
      }

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

    // React suspense
    if (fetchingSelections.size) {
      let resolve: Function
      let resolved = false
      const promise = new Promise(r => (resolve = r))

      fetchingSelections.forEach(selection => {
        selection.onNotFetching.once(() => {
          fetchingSelections.delete(selection)

          if (!fetchingSelections.size) {
            resolved = true
            resolve()
          }
        })
      })

      const SuspendComponent = () => {
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
