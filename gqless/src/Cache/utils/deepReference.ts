import { Value } from '../Value'
import { createEvent } from '@gqless/utils'

export const deepReference = (rootValue: Value) => {
  const disposers = new Set<Function>()
  const _onReference = createEvent<(value: Value) => void>()
  const _onUnreference = createEvent<(value: Value) => void>()

  let valueReferences = new WeakMap<Value, { _count: number }>([
    [rootValue, { _count: 1 }], // Prevent RootValue from being unreferenced (handled on Cache)
  ])

  const watchAndEmit = (parentValue: Value) => {
    const watcherDisposers = new Set<Function>()

    const handleReference = (value: Value) => {
      if (!valueReferences.has(value)) valueReferences.set(value, { _count: 0 })
      const references = valueReferences.get(value)!
      const unrefFromParent = parentValue._onUnreference.filter(
        v => v === value
      )

      // Update reference count
      references._count++
      unrefFromParent.then(() => {
        references._count--

        if (references._count) return
        _onUnreference.emit(value)
      })

      // If there's another reference beside our own,
      // delegate to it
      if (references._count !== 1) return

      _onReference.emit(value)
      const dispose = watchAndEmit(value)

      // When the root is disposed, dispose watcher
      disposers.add(dispose)
      // else wait until value is globally unreferenced
      _onUnreference.filter(v => v === value).then(dispose)
    }

    // Handle references created, before watchAndEmit called
    for (const ref of parentValue._references.keys()) {
      handleReference(ref)
    }

    watcherDisposers.add(
      // When the parent value references a new value
      // recursively watch it
      parentValue._onReference(handleReference)
    )

    return () => watcherDisposers.forEach(dispose => dispose())
  }

  const disposeWatcher = watchAndEmit(rootValue)

  return {
    _onReference,
    _onUnreference,
    _dispose() {
      disposers.forEach(dispose => dispose())
      disposeWatcher()
    },
  }
}
