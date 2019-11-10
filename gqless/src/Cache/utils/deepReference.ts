import { Value } from '../Value'
import { createEvent } from '@gqless/utils'

export const deepReference = (rootValue: Value) => {
  const disposers = new Set<Function>()
  const onReference$ = createEvent<(value: Value) => void>()
  const onUnreference$ = createEvent<(value: Value) => void>()

  let valueReferences = new WeakMap<Value, { count$: number }>([
    [rootValue, { count$: 1 }], // Prevent RootValue from being unreferenced (handled on Cache)
  ])

  const watchAndEmit = (parentValue: Value) => {
    const watcherDisposers = new Set<Function>()

    const handleReference = (value: Value) => {
      if (!valueReferences.has(value)) valueReferences.set(value, { count$: 0 })
      const references = valueReferences.get(value)!
      const unrefFromParent = parentValue.onUnreference$.filter(
        v => v === value
      )

      // Update reference count
      references.count$++
      unrefFromParent.then(() => {
        references.count$--

        if (references.count$) return
        onUnreference$.emit(value)
      })

      // If there's another reference beside our own,
      // delegate to it
      if (references.count$ !== 1) return

      onReference$.emit(value)
      const dispose = watchAndEmit(value)

      // When the root is disposed, dispose watcher
      disposers.add(dispose)
      // else wait until value is globally unreferenced
      onUnreference$.filter(v => v === value).then(dispose)
    }

    // Handle references created, before watchAndEmit called
    for (const ref of parentValue.references$.keys()) {
      handleReference(ref)
    }

    watcherDisposers.add(
      // When the parent value references a new value
      // recursively watch it
      parentValue.onReference$(handleReference)
    )

    return () => watcherDisposers.forEach(dispose => dispose())
  }

  const disposeWatcher = watchAndEmit(rootValue)

  return {
    onReference$,
    onUnreference$,
    dispose$() {
      disposers.forEach(dispose => dispose())
      disposeWatcher()
    },
  }
}
