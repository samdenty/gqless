import { invariant } from '@gqless/utils'

/**
 * Preload a function / React component
 *
 * @example
 * // Preload a React Component
 * preload(UserComponent, { user })
 *
 * // Preload a normal function
 * preload(getFullName, user)
 */
export const preload = <T extends (...args: any[]) => any>(
  _func: T,
  ..._args: T extends (...args: infer U) => any
    ? Partial<{ [K in keyof U]: Partial<U[K]> }>
    : never
) => {
  // This function will be replaced by babel plugin
  invariant(false as true, `babel-plugin-gqless is required for preloading`)
}
