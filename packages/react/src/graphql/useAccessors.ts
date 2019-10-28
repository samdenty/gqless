import { Accessor, NetworkStatus } from 'gqless'
import { useMemo, useEffect } from 'react'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { StackContext } from '../Query'
import { useInterceptor } from './useInterceptor'
import { useComponentContext } from '../hooks/useComponentContext'

export const useAccessors = (stack: StackContext) => {
  const accessors = useMemo(() => new Set<Accessor>(), [])

  const accessorDisposers = useMemo(() => new Map<Accessor, Function[]>(), [])
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    return () => {
      accessorDisposers.forEach(disposers => {
        disposers.forEach(dispose => dispose())
      })
    }
  }, [])

  const interceptor = useInterceptor(stack)

  return {
    ...interceptor,
    accessors,
    updateAccessors(): Promise<void> | void {
      // Find all the new accessors and add to Set
      interceptor.interceptedAccessors.forEach(accessor => {
        if (accessors.has(accessor)) return

        accessors.add(accessor)
        accessorDisposers.set(
          accessor,
          // Make component update when data changes
          [
            accessor.onDataChange(() => {
              forceUpdate()
            }),
            accessor.onStatusChange(
              (prevValue: NetworkStatus, newValue: NetworkStatus) => {
                const prevIdle = prevValue === NetworkStatus.idle
                const active = newValue !== NetworkStatus.idle

                if (prevIdle && active) {
                  forceUpdate()
                }
              }
            ),
          ]
        )
      })

      const nonIdleAccessors = new Set<Accessor>()

      accessors.forEach(accessor => {
        // Locate accessors currently being fetched,
        // and add to Set
        if (interceptor.interceptedAccessors.has(accessor)) {
          if (accessor.status !== NetworkStatus.idle) {
            nonIdleAccessors.add(accessor)
          }

          return
        }

        // Remove previously used accessors, that
        // aren't required anymore
        const disposers = accessorDisposers.get(accessor)
        if (disposers) {
          accessorDisposers.delete(accessor)
          disposers.forEach(dispose => dispose())
        }
        accessors.delete(accessor)
      })

      if (nonIdleAccessors.size) {
        let resolve: Function
        const promise = new Promise<void>(r => (resolve = r))

        nonIdleAccessors.forEach(accessor => {
          accessor.onStatusChange.then(() => {
            nonIdleAccessors.delete(accessor)
            if (!nonIdleAccessors.size) resolve()
          })
        })

        return promise
      }
    },
  }
}
