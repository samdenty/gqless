import * as React from 'react'

import { DeferContext } from './Defer'
import { useForceUpdate } from './hooks/useForceUpdate'
import { Selection, Accessor, Recorder, Query, Batcher } from 'graphql-builder'

export interface IQueryOptions {
  name?: string
  seperateRequest?: boolean
}

export const QueryStack = React.createContext<Query[]>([])

export const graphql = <Props extends any>(
  component: (props: Props) => any,
  { name, seperateRequest = false }: IQueryOptions = {}
) => {
  const query = new Query(name)

  const GraphQLComponent = (props: Props) => {
    const parentStack = React.useContext(QueryStack)

    const stack = React.useMemo(
      (): Query[] => (seperateRequest ? [query] : [...parentStack, query]),
      [seperateRequest || parentStack]
    )

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

    // Get the batchers associated with accessors, and link
    // them up to the query
    const recordedBatchers = new Set<Batcher>()
    record.onAccessor(({ batcher }) => {
      if (recordedBatchers.has(batcher)) return
      recordedBatchers.add(batcher)

      stack.forEach(query => {
        batcher.beginQuery(query)
      })
    })

    try {
      record.start()
      var returnValue = component(props)
    } catch (e) {
      throw e
    } finally {
      record.stop()

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

      // Remove unused accessors
      accessors.forEach(accessor => {
        if (record.accessors.has(accessor)) return

        const dispose = accessorDisposers.get(accessor)
        if (dispose) {
          accessorDisposers.delete(accessor)
          dispose()
        }
        accessors.delete(accessor)
      })

      // Cleanup batcher calls
      recordedBatchers.forEach(batcher => {
        stack.forEach(query => {
          batcher.endQuery(query)
        })
      })

      // const unresolvedSelections = record.selections
      //   .map(selection => selection.unresolvedSelection)
      //   .filter(Boolean)

      // if (unresolvedSelections.length) {
      //   const promise = Promise.all(unresolvedSelections)
      //   const SuspendComponent = () => {
      //     throw promise
      //   }

      //   return (
      //     <DeferContext.Provider value={{ defer: true }}>
      //       {returnValue}
      //       <SuspendComponent />
      //     </DeferContext.Provider>
      //   )
      // }

      return (
        <QueryStack.Provider value={stack}>{returnValue}</QueryStack.Provider>
      )
    }
  }

  GraphQLComponent.displayName = (component as any).displayName

  return GraphQLComponent
}
