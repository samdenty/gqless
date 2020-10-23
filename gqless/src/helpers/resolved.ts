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
  options?: ResolvedOptions
): Promise<T extends (...args: any[]) => infer U ? U : T> {
  const isResolved = (accessor: Accessor) =>
    options?.waitForUpdate || false
      ? accessor.status === NetworkStatus.idle
      : accessor.status !== NetworkStatus.loading

  let accessor: Accessor
  try {
    accessor = getAccessor(data)
    if (options?.refetch) accessor.scheduler.commit.stage(accessor)
  } catch (err) {
    if (typeof data !== 'function') throw err

    const interceptor = new Interceptor()
    const nonIdleAccessors = new Set<Accessor>()

    interceptor.onAccessor.listen(acc => {
      if (nonIdleAccessors.has(acc)) return
      nonIdleAccessors.add(acc)
      if (options?.refetch) acc.scheduler.commit.stage(acc)
    })

    interceptor.start()
    try {
      var result = data()
    } finally {
      interceptor.stop()
    }

    return new Promise((resolve, reject) => {
      nonIdleAccessors.forEach(acc => {
        if (isResolved(acc)) {
          nonIdleAccessors.delete(acc)
          return
        }

        const dispose = acc.onStatusChange.listen(() => {
          if (!isResolved(acc)) return
          dispose()

          nonIdleAccessors.delete(acc)
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
    accessor.onStatusChange.listen(() => {
      if (isResolved(accessor)) resolve(accessor.data)
    })
  })
}
