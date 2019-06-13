import { Selection } from '../Selection'
import { Disposable } from '../mixins'
import { queriesFromStacks } from './queriesFromStacks'
import { Query } from './Query'
import { MiddlewareEngine } from '../Middleware'

export class Scheduler extends Disposable {
  private commitTimer: any
  protected commits = new Map<Selection<any, any>, Query[]>()
  protected defaultQuery: Query

  public commitInterval: number

  public stack: Query[] = []

  constructor(
    private middleware: MiddlewareEngine,
    private fetchSelections: (
      selections: Selection<any>[],
      queryName?: string
    ) => Promise<any>,
    {
      defaultQuery = new Query(),
      commitInterval = 15,
    }: { defaultQuery?: Query; commitInterval?: number } = {}
  ) {
    super()
    this.defaultQuery = defaultQuery
    this.commitInterval = commitInterval

    this.resume()
    this.resetQueryStack()

    this.disposers.add(this.pause)
  }

  public beginQuery(query: Query) {
    if (this.stack.includes(query)) return

    this.stack.push(query)
  }

  public endQuery(query: Query) {
    const idx = this.stack.indexOf(query)

    // If it's the last in the stack, remove it
    // otherwise previous endQuery's need to be called first
    if (idx === this.stack.length - 1) {
      this.stack.splice(idx, 1)
    }
  }

  public resetQueryStack() {
    this.stack = []
  }

  public stage(selection: Selection<any, any>) {
    // If the selection is in this current commit,
    // or being fetched from a previous commit, don't re-fetch it
    if (selection.isFetching) return

    // If we already have the parent, remove the
    // parent to narrow down the selections. This is used when a selection is created
    // this could cause issues later, may need to add a recurse field to handle polling etc.
    if (selection.parent && this.commits.has(selection.parent)) {
      this.unstage(selection.parent)
    }

    selection.fetching()

    this.commits.set(selection, [...this.stack])
  }

  public unstage(selection: Selection<any, any>) {
    // Only if the selection is in our commits, set it as not fetching
    // otherwise it could be from a previous commit
    if (this.commits.has(selection)) {
      selection.notFetching()
    }

    this.commits.delete(selection)
  }

  public async fetchCommits() {
    if (!this.commits.size) return
    const selections = Array.from(this.commits.keys())
    const stacks = Array.from(this.commits.values())
    const stackQueries = queriesFromStacks(stacks)

    const queries = new Map<Query | undefined, Selection[]>()

    // Iterate over stacks and convert into query map
    stackQueries.forEach((query, idx) => {
      if (query === undefined) {
        stackQueries[idx] = query = this.defaultQuery
      }

      const selection = selections[idx]

      if (queries.has(query)) {
        const selections = queries.get(query)!
        selections.push(selection)
        return
      }

      queries.set(query, [selection])
    })

    this.middleware.all.onCommit({ stacks, stackQueries, selections, queries })

    this.commits.clear()

    try {
      const promises = Array.from(queries)
        .map(([query, selections]) => {
          const promise = this.fetchSelections(selections, query && query.name)

          const notFetchingSelections = () => {
            selections.forEach(selection => selection.notFetching())
          }

          promise.then(notFetchingSelections).catch(notFetchingSelections)

          return promise
        })
        .filter(Boolean) as Promise<any>[]

      await Promise.all(promises)
    } catch {}
  }

  protected resume() {
    this.pause()
    this.commitTimer = setTimeout(async () => {
      this.fetchCommits()
      this.resume()
    }, this.commitInterval)
  }

  protected pause() {
    if (!this.commitTimer) return

    clearTimeout(this.commitTimer)
    this.commitTimer = null
  }
}
