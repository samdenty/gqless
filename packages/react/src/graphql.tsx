import * as React from 'react'

import { DeferContext } from './Defer'
import { startRecording, stopRecording, RecorderRecord } from './recorder'
import { useForceUpdate } from './hooks/useForceUpdate'
import { Selection } from '../Selection'

interface OptimisticOptions {
  name?: string
}

export const graphql = <T extends (...args: any[]) => any>(
  component: T,
  { name }: OptimisticOptions = {}
) => {
  const GraphQLComponent = (...args: Parameters<T>) => {
    const onValueChangeDisposers = React.useMemo(
      () => new WeakMap<Selection<any>, Function>(),
      []
    )
    const recordRef = React.useRef<RecorderRecord>(null)
    const forceUpdate = useForceUpdate()

    React.useEffect(() => {
      return () => {
        recordRef.current.selections.forEach(s => {
          const dispose = onValueChangeDisposers.get(s)
          dispose()
        })
      }
    }, [])

    try {
      startRecording()
      var returnValue = component(...args)
    } catch (e) {
      throw e
    } finally {
      const record = stopRecording()

      record.selections.forEach(s => {
        const added =
          !recordRef.current || !recordRef.current.selections.includes(s)

        if (added) {
          onValueChangeDisposers.set(
            s,
            s.onValueChange(prevValue => {
              // console.log(s.path.toString(), prevValue, s.value)
              // console.log(
              //   s.path.toString(),
              //   'causing force update for',
              //   GraphQLComponent.displayName
              // )
              forceUpdate()
            })
          )
        }
      })

      if (recordRef.current) {
        recordRef.current.selections.forEach(s => {
          const removed = !record.selections.includes(s)
          if (removed) s.onValueChange.off(forceUpdate)
        })
      }

      recordRef.current = record

      const unresolvedSelections = record.selections
        .map(selection => selection.unresolvedSelection)
        .filter(Boolean)

      if (unresolvedSelections.length) {
        const promise = Promise.all(unresolvedSelections)
        const SuspendComponent = () => {
          throw promise
        }

        return (
          <DeferContext.Provider value={{ defer: true }}>
            {returnValue}
            <SuspendComponent />
          </DeferContext.Provider>
        )
      }

      return returnValue
    }
  }

  GraphQLComponent.displayName = (component as any).displayName

  return GraphQLComponent
}
