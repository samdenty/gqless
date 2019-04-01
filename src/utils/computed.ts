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
  const DependenciesSymbol = Symbol(propertyKey + '.dependencies')
  const LastValueSymbol = Symbol(propertyKey + '.lastValue')

  const original = descriptor.get

  if (getDependencies) {
    descriptor.get = function() {
      const newDeps = getDependencies.call(this)

      if (
        this[DependenciesSymbol] &&
        isDepsEqual(this[DependenciesSymbol], newDeps)
      )
        return this[LastValueSymbol]

      this[DependenciesSymbol] = newDeps
      this[LastValueSymbol] = original.call(this)

      return this[LastValueSymbol]
    }
  } else {
    descriptor.get = function() {
      if (!(LastValueSymbol in this))
        this[LastValueSymbol] = original.call(this)

      return this[LastValueSymbol]
    }
  }
}
