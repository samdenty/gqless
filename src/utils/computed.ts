const isDepsEqual = <T extends any[]>(a: T, b: T) => {
  if (a === b) return true
  if (a.length != b.length) return false

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

export const computed = (getDependencies?: () => any[]) => <T>(
  target: T,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const original = descriptor.get

  let deps: any[] = null
  let computedValue = null

  descriptor.get = function() {
    const newDeps = getDependencies ? getDependencies.call(this) : []
    if (deps && isDepsEqual(deps, newDeps)) return computedValue

    deps = newDeps
    computedValue = original.call(this)

    return computedValue
  }
}
