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
    ) => any,
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

  // private getCurrentSelections() {
  //   const query =
  //     this.queryStack[this.queryStack.length - 1] || this.defaultQuery

  //   let selections = this.querySelections.get(query)
  //   if (!selections) {
  //     selections = new Set()
  //     this.querySelections.set(query, selections)
  //   }

  //   return selections
  // }

  public stage(selection: Selection<any, any>) {
    if (this.commits.has(selection)) return

    this.commits.set(selection, [...this.queryStack])
  }

  public unstage(selection: Selection<any, any>) {
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
      await Promise.all(
        Array.from(queries).map(([query, selections]) => {
          return this.fetchSelections(selections, query && query.name)
        })
      )
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
