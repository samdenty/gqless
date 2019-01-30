import { optimiseNodes } from './optimiseNodes'
import { Query } from '../Query'
import { QueryField } from '../QueryNode'

export class QueryBatcher {
  private timer: any
  private commits = new Set<QueryField>()

  constructor(private query: Query, public interval: number = 50) {
    this.startTimer()
  }

  public stageNode(node: QueryField) {
    this.commits.add(node)
  }

  public unstageNode(node: QueryField) {
    this.commits.delete(node)
  }

  public async commit() {
    if (!this.commits.size) return
    const commits = optimiseNodes(Array.from(this.commits))

    console.log('got some', commits)

    this.commits.clear()

    if (this.query.options.mergeQueries) {
      try {
        await this.query.fetchNodes(commits)
      } catch (e) {
        commits.forEach(node => node.errors.add(e))

        console.error(commits, 'failed to fetch')
      }
    } else {
      await Promise.all(
        commits.map(async node => {
          try {
            await node.fetch()
          } catch (e) {
            node.errors.add(e)
            console.error(node, 'failed to fetch')
          }
        })
      )
    }
  }

  public startTimer() {
    this.stopTimer()
    this.timer = setTimeout(async () => {
      this.commit()
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
