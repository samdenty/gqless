import { Selection } from '../Selection'
import { Disposable } from '../mixins'
import { queriesFromStacks } from './queriesFromStacks'
import { Query } from './Query'

export class Batcher extends Disposable {
  private timer: any

  private commits = new Map<Selection<any, any>, Query[]>()

  private queryStack: Query[] = []

  constructor(
    private fetchSelections: (
      selections: Selection<any>[],
      queryName?: string
    ) => Promise<any>,
    public defaultQuery = new Query(),
    public interval: number = 50
  ) {
    super()
    this.startTimer()
    this.resetQueryStack()

    this.disposers.add(this.stopTimer)
  }

  public beginQuery(query: Query) {
    if (this.queryStack.includes(query)) return

    this.queryStack.push(query)
  }

  public endQuery(query: Query) {
    const idx = this.queryStack.indexOf(query)

    // If it's the last in the stack, remove it
    // otherwise previous endQuery's need to be called first
    if (idx === this.queryStack.length - 1) {
      this.queryStack.splice(idx, 1)
    }
  }

  public resetQueryStack() {
    this.queryStack = []
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

    this.commits.set(selection, [...this.queryStack])
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
    const stackQueries = queriesFromStacks(Array.from(this.commits.values()))

    const queries = new Map<Query | undefined, Selection[]>()

    stackQueries.forEach((query, idx) => {
      const selection = selections[idx]

      if (queries.has(query)) {
        const selections = queries.get(query)!
        selections.push(selection)
        return
      }

      queries.set(query, [selection])
    })

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

  public startTimer() {
    this.stopTimer()
    this.timer = setTimeout(async () => {
      this.fetchCommits()
      this.startTimer()
    }, this.interval)
  }

  public stopTimer() {
    if (!this.timer) return

    clearTimeout(this.timer)
    this.timer = null
  }
}
