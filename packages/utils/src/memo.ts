interface StrongDependency extends Map<any, Dependency> {}
interface WeakDependency extends WeakMap<any, Dependency> {}

type Dependency = {
  weak: WeakDependency
  strong: StrongDependency
  value?: any
}
const createDependency = (): Dependency => ({
  weak: new WeakMap(),
  strong: new Map(),
})

const dependencyType = (data: any) =>
  data && data instanceof Object ? 'weak' : 'strong'

/**
 * Memory-leak free memoization
 */
export function memo() {
  const cache: Map<string, Dependency> = new Map()

  const memoKey = (key = 'default') => {
    if (!cache.has(key)) cache.set(key, createDependency())

    const keyDependency = cache.get(key)!

    return <T>(get: () => T, dependencies: any[] = []): T => {
      let dependency = keyDependency
      let index = 0
      const changedDependency = dependencies.find((data, i) => {
        index = i
        const type = dependencyType(data)
        if (!dependency[type].has(data)) return true
        dependency = dependency[type].get(data)!

        return false
      })

      if (!changedDependency && 'value' in dependency) return dependency.value

      for (let i = index; i < dependencies.length; i++) {
        const data = dependencies[i]
        const newDependency = createDependency()
        dependency[dependencyType(data)].set(data, newDependency)
        dependency = newDependency
      }

      const value = get()
      dependency.value = value
      return value
    }
  }

  return new Proxy(memoKey(), {
    get(_, prop: any) {
      return memoKey(prop)
    },
  }) as ReturnType<typeof memoKey> & Record<string, ReturnType<typeof memoKey>>
}
