import { QueryNode } from '../../../QueryNode'
import { throwException } from './throwException'

export const interceptFunction = <T>(
  node: QueryNode<T>,
  prop: string | Symbol,
  resolved?: (
    resolution: ReturnType<QueryNode<T>['resolve']>,
    ...args: unknown[]
  ) => unknown,
  unresolved?: (
    resolution: ReturnType<QueryNode<T>['resolve']>,
    ...args: unknown[]
  ) => unknown
) => (...args: unknown[]) => {
  const resolution = node.resolve()

  // Handle when the node is unresolved
  if (resolution.unresolvedNode) {
    // If a custom function is provided, use that
    if (unresolved) {
      const result = unresolved(resolution, ...args)
      if (result !== undefined) return result
    }

    // Else throw the value promise
    throwException(resolution.unresolvedNode)
  }

  // If the value has the method, use that
  if (resolution.value && typeof resolution.value[prop as any] === 'function') {
    return resolution.value[prop as any](...args)
  }

  // Else use a custom function provided
  if (resolved) {
    const result = resolved(resolution, ...args)
    if (result !== undefined) return result
  }
}
