import { Plugins } from '../Plugin'
import { Accessor, NetworkStatus } from '../Accessor'
import { Disposable } from '../utils'
import { queriesFromStacks } from './queriesFromStacks'
import { Query } from './Query'
import { createEvent } from '@gqless/utils'

const defaultQuery = new Query()

export class Commit extends Disposable {
  public onFetched = createEvent()
  public accessors = new Map<Accessor, Query[]>()

  constructor(
    private plugins: Plugins,
    private stack: Query[],
    private fetchAccessors: (
      accessors: Accessor<any>[],
      queryName?: string
    ) => any
  ) {
    super()
  }

  public stageUntilValue(accessor: Accessor) {
    if (accessor.value) return

    const unstage = this.stage(accessor)
    this.addDisposer(accessor.onValueChange.then(unstage))

    return unstage
  }

  public stage(accessor: Accessor) {
    const unstage = () => this.unstage(accessor)

    // If the accessor is in this current commit,
    // or being (re-)fetched from a previous commit, don't re-fetch it
    if (this.disposed || accessor.status !== NetworkStatus.idle) return unstage

    // If we already have the parent, remove the
    // parent to narrow down the accessors. This is used when a accessor is created
    // this could cause issues later, may need to add a recurse field to handle polling etc.
    if (accessor.parent && this.accessors.has(accessor.parent)) {
      this.unstage(accessor.parent)
    }

    accessor.status = accessor.value
      ? NetworkStatus.updating
      : NetworkStatus.loading

    this.accessors.set(accessor, [...this.stack])

    return unstage
  }

  public unstage(accessor: Accessor) {
    if (this.disposed) return

    // Only if the accessor is in our commits, set it as not fetching
    // otherwise it could be from a previous commit
    if (this.accessors.has(accessor)) {
      accessor.status = NetworkStatus.idle
    }

    this.accessors.delete(accessor)
  }

  public async fetch() {
    if (!this.accessors.size) return
    const accessors = Array.from(this.accessors.keys())
    const stacks = Array.from(this.accessors.values())
    const stackQueries = queriesFromStacks(stacks)

    const queries = new Map<Query | undefined, Accessor[]>()

    // Iterate over stacks and convert into query map
    stackQueries.forEach((query, idx) => {
      if (query === undefined) {
        stackQueries[idx] = query = defaultQuery
      }

      const accessor = accessors[idx]

      if (queries.has(query)) {
        const accessors = queries.get(query)!
        accessors.push(accessor)
        return
      }

      queries.set(query, [accessor])
    })

    this.plugins.all.onCommit({ stacks, stackQueries, accessors, queries })

    try {
      const promises = Array.from(queries)
        .map(async ([query, accessors]) => {
          const promise = this.fetchAccessors(accessors, query && query.name)

          try {
            await promise
          } finally {
            accessors.forEach(accessor => {
              accessor.status = NetworkStatus.idle
            })
          }
        })
        .filter(Boolean) as Promise<any>[]

      await Promise.all(promises)
    } catch (e) {
      console.error(e)
    }

    this.onFetched.emit()
  }
}
