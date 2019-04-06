import * as React from 'react'
import { Selection } from '../Selection'
import { DeferContext } from './Defer'

let unresolvedSelection: Selection<any> = null
export const recordSelection = (selection: Selection<any>) => {
  unresolvedSelection = selection
}

export let isOptimistic = false
const startOptimistic = () => {
  unresolvedSelection = null
  isOptimistic = true
}
const stopOptimistic = () => {
  isOptimistic = false
}

interface OptimisticOptions {
  // If set to false, each component
  fetchAllInOneQuery?: boolean
}

export const optimistic = <T extends (...args: any[]) => any>(
  component: T,
  { fetchAllInOneQuery = true }: OptimisticOptions = {}
) => {
  return (...args: Parameters<T>) => {
    try {
      startOptimistic()
      var returnValue = component(...args)
    } catch (e) {
      throw e
    } finally {
      stopOptimistic()

      if (unresolvedSelection) {
        if (fetchAllInOneQuery) {
          const SuspendComponent = () => {
            if (unresolvedSelection.unresolvedSelection) {
              throw unresolvedSelection.unresolvedSelection
            }

            return null
          }

          return (
            <DeferContext.Provider value={{ defer: true }}>
              {returnValue}
              <SuspendComponent />
            </DeferContext.Provider>
          )
        }

        throw unresolvedSelection
      }

      return returnValue
    }
  }
}
