import { getAccessor, NetworkStatus, Accessor } from '../Accessor'
import { Interceptor } from '../Interceptor'

interface ResolvedOptions {
  waitForUpdate?: boolean
  refetch?: boolean
}

/**
 * Waits for an accessor / function to be fully resolved,
 * and returns the final value
 *
 * @example
 * const name = await resolved(query.me.name)
 * console.log(name)
 *
 * @example
 * const data = await resolved(() => ({ name: query.me.name }))
 * console.log(data.name)
 *
 * @example
 * await resolved(query.me.name)
 * console.log(query.me.name)
 */
export function resolved<T>(
  data: T,
  options: ResolvedOptions
): Promise<T extends (...args: any[]) => infer U ? U : T> {
  const isResolved = (accessor: Accessor) =>
    options.waitForUpdate || false
      ? accessor.status === NetworkStatus.idle
      : accessor.status !== NetworkStatus.loading

  try {
    var accessor = getAccessor(data)
  } catch (e) {
    if (typeof data !== 'function') throw e

    const interceptor = new Interceptor()
    const nonIdleAccessors = new Set<Accessor>()

    interceptor.onAccessor(accessor => {
      nonIdleAccessors.add(accessor)
    })

    interceptor.start()
    try {
      var result = data()
    } finally {
      interceptor.stop()
    }

    return new Promise((resolve, reject) => {
      nonIdleAccessors.forEach(accessor => {
        if (isResolved(accessor)) {
          nonIdleAccessors.delete(accessor)
          return
        }

        const dispose = accessor.onStatusChange(() => {
          if (!isResolved(accessor)) return
          dispose()

          nonIdleAccessors.delete(accessor)
          if (nonIdleAccessors.size) return

          try {
            const finalResult = data()
            resolve(finalResult)
          } catch (e) {
            reject(e)
          }
        })
      })

      if (!nonIdleAccessors.size) {
        resolve(result)
      }
    })
  }

  if (isResolved(accessor)) {
    return Promise.resolve(data) as any
  }

  return new Promise<any>(resolve => {
    // TODO: Support for promise reject
    accessor.onStatusChange(() => {
      if (isResolved(accessor)) resolve(accessor.data)
    })
  })
}
