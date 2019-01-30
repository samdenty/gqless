const primitiveMethods = new Set([
  ...Object.getOwnPropertyNames(Array.prototype),
  ...Object.getOwnPropertyNames(String.prototype),
  ...Object.getOwnPropertyNames(Number.prototype),
])

// TODO: Memoize these functions, as they'll be called quite a bit

export const isIndexType = (path: string | symbol) =>
  typeof path !== 'symbol' && !isNaN(path as any)

export const isPrimitiveType = (path: string | symbol) =>
  path === Symbol.toPrimitive

export const isMethodType = (path: string | symbol) =>
  primitiveMethods.has(path as string)

export const isPrimitiveSomething = (path: string | symbol) => {
  return isPrimitiveType(path) || isMethodType(path)
}
