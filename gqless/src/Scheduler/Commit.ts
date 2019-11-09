import { Plugins } from '../Plugin'
import { Accessor, NetworkStatus } from '../Accessor'
import { Disposable } from '../utils'
import { queriesFromStacks } from './queriesFromStacks'
import { Query } from './Query'
import { createEvent } from '@gqless/utils'

const defaultQuery = new Query()

export class Commit extends Disposable {
  public _onActive = createEvent()
  public _onIdle = createEvent()

  public _onFetched = createEvent()
  public _accessors = new Map<Accessor, Query[]>()

  constructor(
    private _plugins: Plugins,
    private _stack: Query[],
    private _fetchAccessors: (
      accessors: Accessor<any>[],
      queryName?: string
    ) => any
  ) {
    super()
  }

  public _stageUntilValue(accessor: Accessor) {
    if (!accessor._resolved) return
    if (accessor._value) return

    const unstage = this._stage(accessor)

    this._addDisposer(
      accessor._onValueChange.then(unstage),
      accessor._onResolvedChange.then(resolved => {
        if (!resolved) unstage()
      })
    )

    return unstage
  }

  public _stage(accessor: Accessor, ...queries: Query[]) {
    const unstage = () => this._unstage(accessor)

    // If the accessor is in this current commit,
    // or being (re-)fetched from a previous commit, don't re-fetch it
    if (this._disposed || accessor._status !== NetworkStatus.idle)
      return unstage

    if (!this._accessors.size) this._onActive.emit()

    accessor._status = accessor._value
      ? NetworkStatus.updating
      : NetworkStatus.loading

    this._accessors.set(accessor, [...this._stack, ...queries])

    // If we already have the parent, remove the
    // parent to narrow down the accessors. This is used when a accessor is created
    // this could cause issues later, may need to add a recurse field to handle polling etc.
    if (accessor._parent && this._accessors.has(accessor._parent)) {
      this._unstage(accessor._parent)
    }

    return unstage
  }

  public _unstage(accessor: Accessor) {
    if (this._disposed) return

    // Only if the accessor is in our commits, set it as not fetching
    // otherwise it could be from a previous commit
    if (this._accessors.has(accessor)) {
      accessor._status = NetworkStatus.idle
    }

    this._accessors.delete(accessor)

    if (!this._accessors.size) this._onIdle.emit()
  }

  public async _fetch() {
    if (!this._accessors.size) return
    const accessors = Array.from(this._accessors.keys())
    const stacks = Array.from(this._accessors.values())
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

    this._plugins._all.onCommit({ stacks, stackQueries, accessors, queries })

    try {
      const promises = Array.from(queries)
        .map(async ([query, accessors]) => {
          const promise = this._fetchAccessors(accessors, query && query.name)

          try {
            await promise
          } finally {
            accessors.forEach(accessor => {
              accessor._status = NetworkStatus.idle
            })
          }
        })
        .filter(Boolean) as Promise<any>[]

      await Promise.all(promises)
    } catch (e) {
      console.error(e)
    }

    this._onFetched.emit()
  }
}
