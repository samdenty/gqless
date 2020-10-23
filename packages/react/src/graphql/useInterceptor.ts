import { Accessor, Interceptor, Scheduler } from 'gqless'
import { StackContext } from '../Query'

export const useInterceptor = (stack: StackContext) => {
  // Create a new Interceptor, which tracks the usage
  // of accessors
  const interceptor = new Interceptor()

  // When a new accessor is found, retrieve the
  // scheduler associated with it
  //
  // Then call Scheduler#pushStack, with the
  // component's stack
  const schedulers = new Set<Scheduler>()
  const interceptedAccessors = new Set<Accessor>()

  // @ts-ignore
  interceptor.onAccessor.listen(accessor => {
    interceptedAccessors.add(accessor)

    if (schedulers.has(accessor.scheduler)) return
    schedulers.add(accessor.scheduler)

    accessor.scheduler.pushStack(...stack.frames)
  })

  return {
    interceptor,
    schedulers,
    interceptedAccessors,
    startIntercepting() {
      interceptor.start()
    },
    stopIntercepting() {
      interceptor.stop()

      // Cleanup the previous Scheduler#pushStack
      // calls made earlier
      schedulers.forEach(scheduler => {
        scheduler.popStack(...stack.frames)
      })
    },
  }
}
