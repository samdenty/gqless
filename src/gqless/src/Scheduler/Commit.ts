import { Plugins } from '../Plugin'
import { Selection } from '../Selection'
import { Disposable } from '../utils'
import { queriesFromStacks } from './queriesFromStacks'
import { Query } from './Query'

const defaultQuery = new Query()

export class Commit extends Disposable {
  public selections = new Map<Selection, Query[]>()

  constructor(
    private plugins: Plugins,
    private stack: Query[],
    private fetchSelections: (
      selections: Selection<any>[],
      queryName?: string
    ) => Promise<any>
  ) {
    super()
  }

  public stage(selection: Selection<any, any>) {
    const unstage = () => this.unstage(selection)

    // If the selection is in this current commit,
    // or being fetched from a previous commit, don't re-fetch it
    if (this.disposed || selection.isFetching) return unstage

    // If we already have the parent, remove the
    // parent to narrow down the selections. This is used when a selection is created
    // this could cause issues later, may need to add a recurse field to handle polling etc.
    if (selection.parent && this.selections.has(selection.parent)) {
      this.unstage(selection.parent)
    }

    selection.toggleFetching(true)

    this.selections.set(selection, [...this.stack])

    return unstage
  }

  public unstage(selection: Selection<any, any>) {
    if (this.disposed) return

    // Only if the selection is in our commits, set it as not fetching
    // otherwise it could be from a previous commit
    if (this.selections.has(selection)) {
      selection.toggleFetching(false)
    }

    this.selections.delete(selection)
  }

  public async fetch() {
    if (!this.selections.size) return
    const selections = Array.from(this.selections.keys())
    const stacks = Array.from(this.selections.values())
    const stackQueries = queriesFromStacks(stacks)

    const queries = new Map<Query | undefined, Selection[]>()

    // Iterate over stacks and convert into query map
    stackQueries.forEach((query, idx) => {
      if (query === undefined) {
        stackQueries[idx] = query = defaultQuery
      }

      const selection = selections[idx]

      if (queries.has(query)) {
        const selections = queries.get(query)!
        selections.push(selection)
        return
      }

      queries.set(query, [selection])
    })

    this.plugins.all.onCommit({ stacks, stackQueries, selections, queries })

    try {
      const promises = Array.from(queries)
        .map(([query, selections]) => {
          const promise = this.fetchSelections(selections, query && query.name)

          const notFetchingSelections = () => {
            selections.forEach(selection => {
              selection.toggleFetching(false)
            })
          }

          promise.then(notFetchingSelections).catch(notFetchingSelections)

          return promise
        })
        .filter(Boolean) as Promise<any>[]

      await Promise.all(promises)
    } catch (e) {
      console.error(e)
    }
  }
}
