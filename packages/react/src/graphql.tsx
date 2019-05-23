import * as React from 'react'

import { DeferContext } from './Defer'
import { useForceUpdate } from './hooks/useForceUpdate'
import { Selection, Accessor, Recorder } from 'graphql-builder'

export interface IQueryOptions {
  name?: string
}

export const graphql = <T extends (...args: any[]) => any>(
  component: T,
  { name }: IQueryOptions = {}
) => {
  const GraphQLComponent = (...args: Parameters<T>) => {
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
    try {
      record.start()
      var returnValue = component(...args)
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
          accessor.onDataUpdate(prevData => {
            forceUpdate()
            // console.log(
            //   name,
            //   accessor.path.toString(),
            //   'changed',
            //   'from',
            //   prevData,
            //   'to',
            //   accessor.value!.data
            // )
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

      return returnValue
    }
  }

  GraphQLComponent.displayName = (component as any).displayName

  return GraphQLComponent
}
