import { Query } from '../Query'
import { Selection, SelectionRoot } from '../Selection'

export class QueryBatcher {
  private timer: any
  private commits = new Set<Selection<any, any>>()

  constructor(
    private fetchSelections: (selections: Selection<any>[]) => Promise<any>,
    public interval: number = 50
  ) {
    this.startTimer()
  }

  public stage(selection: Selection<any, any>) {
    const selections =
      selection instanceof SelectionRoot ? selection.selections : [selection]

    selections.forEach(node => {
      this.commits.add(node)
    })
  }

  public unstage(selection: Selection<any, any>) {
    if (selection instanceof SelectionRoot) {
      this.commits.clear()
    } else {
      this.commits.delete(selection)
    }
  }

  public async fetchCommits() {
    if (!this.commits.size) return
    const commits = Array.from(this.commits)

    this.commits.clear()

    try {
      await this.fetchSelections(commits)
    } catch (e) {
      // @TODO
      console.warn('error:', e)
      // commits.forEach(node => node.errors.add(e))
    }
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

  public dispose() {
    this.stopTimer()
  }
}
