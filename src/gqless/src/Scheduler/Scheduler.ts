import { invariant } from '@gqless/utils'

import { Plugins } from '../Plugin'
import { Selection } from '../Selection'
import { Disposable } from '../utils'
import { Commit } from './Commit'
import { Query } from './Query'

export type SelectionFetcher = (
  selections: Selection<any>[],
  queryName?: string
) => any
export class Scheduler extends Disposable {
  private timer: any
  public interval: number
  public stack: Query[] = []
  public commit: Commit = undefined!

  constructor(
    private fetchSelections: SelectionFetcher,
    public plugins: Plugins = new Plugins(),
    interval = 20
  ) {
    super()
    this.interval = interval

    this.start()

    this.disposers.add(this.cancel)
  }

  public beginQuery(query: Query) {
    this.stack.push(query)
  }

  public endQuery(query: Query) {
    const idx = this.stack.lastIndexOf(query)

    invariant(
      idx === this.stack.length - 1,
      `Scheduler#endQuery called with '${query}', but not last in stack [${this.stack.join(
        ', '
      )}]`
    )

    this.stack.splice(idx, 1)
  }

  private start() {
    this.cancel()

    // Don't create new Commit, if prev one unused
    if (!this.commit || this.commit.selections.size) {
      if (this.commit) this.commit.dispose()

      this.commit = new Commit(this.plugins, this.stack, this.fetchSelections)
    }

    this.timer = setTimeout(() => {
      this.commit.fetch()
      this.start()
    }, this.interval)
  }

  private cancel() {
    clearTimeout(this.timer)
  }
}
