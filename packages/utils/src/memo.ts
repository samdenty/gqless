type Dependency = {
  weak: WeakMap<any, Dependency>
  strong: Map<any, Dependency>
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
export function createMemo() {
  const cache: Map<string, Dependency> = new Map()

  const memoKey = (key = 'default') => {
    if (!cache.has(key)) cache.set(key, createDependency())

    const keyDependency = cache.get(key)!

    /**
     * Returns the value for the given dependencies,
     * otherwise undefined
     */
    function memo<T = any>(dependencies: any[]): T | undefined
    /**
     * Returns the value for the given dependencies,
     * otherwise function is called and added to cache
     */
    function memo<T>(get: () => T, dependencies?: any[]): T

    function memo<T>(
      getOrDependencies: any[] | (() => T),
      dependencies: any[] = []
    ): T | void {
      const get =
        typeof getOrDependencies === 'function' ? getOrDependencies : undefined
      if (!get) dependencies = getOrDependencies as any[]

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

      if (!get) return

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

    return memo
  }

  return new Proxy(memoKey(), {
    get(_, prop: any) {
      return memoKey(prop)
    },
  }) as ReturnType<typeof memoKey> & Record<string, ReturnType<typeof memoKey>>
}
