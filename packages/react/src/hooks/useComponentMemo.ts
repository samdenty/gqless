import { createMemo } from '@gqless/utils'
import { useComponentContext } from './useComponentContext'

/**
 * createMemo, persisted across all instances of Component
 */
export const useComponentMemo = <T>(
  getValue: () => T,
  dependencies?: any[]
) => {
  const context = useComponentContext()
  const stateIndex = ++context.lastStateIndex$

  const memo: ReturnType<typeof createMemo> =
    context.state$[stateIndex] || (context.state$[stateIndex] = createMemo())

  return memo(getValue, dependencies)
}
