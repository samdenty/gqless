import { flattenNodes } from './optimiseNodes'
import { Query } from '../Query'
import { QueryField, QueryRoot } from '../QueryNode'

export class QueryBatcher {
  private timer: any
  private commits = new Set<QueryField>()

  constructor(protected query: Query, public interval: number = 50) {
    this.startTimer()
  }

  public stage(node: QueryField | QueryRoot) {
    const nodes = node instanceof QueryRoot ? node.fields : [node]

    nodes.forEach(node => {
      this.commits.add(node)
    })
  }

  public unstage(node: QueryField | QueryRoot) {
    if (node instanceof QueryRoot) {
      this.commits.clear()
    } else {
      this.commits.delete(node)
    }
  }

  public async fetchCommits() {
    if (!this.commits.size) return
    const commits = flattenNodes(Array.from(this.commits))

    this.commits.clear()

    if (this.query.options.mergeQueries) {
      try {
        await this.query.fetchNodes(commits)
      } catch (e) {
        commits.forEach(node => node.errors.add(e))
      }
    } else {
      await Promise.all(
        commits.map(async node => {
          try {
            await node.fetch()
          } catch (e) {
            node.errors.add(e)
          }
        })
      )
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
