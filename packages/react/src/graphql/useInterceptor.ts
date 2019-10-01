import { Accessor, Interceptor, Scheduler } from 'gqless'
import { StackContext } from '../Query'

export const useInterceptor = (stack: StackContext) => {
  // Create a new Interceptor, which tracks the usage
  // of accessors
  const interceptor = new Interceptor()

  // When a new accessor is found, retrieve the
  // scheduler associated with it
  //
  // Then call Scheduler#beginQuery, with the
  // component's stack
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

  return {
    interceptor,
    interceptedAccessors,
    startIntercepting() {
      interceptor.start()
    },
    stopIntercepting() {
      interceptor.stop()

      // Cleanup the previous Scheduler#beginQuery
      // calls made earlier
      schedulers.forEach(scheduler => {
        for (let i = stack.frames.length - 1; i >= 0; --i) {
          const query = stack.frames[i]
          scheduler.endQuery(query)
        }
      })
    },
  }
}
