import { invariant } from '@gqless/utils'

import { Plugins } from '../Plugin'
import { Disposable } from '../utils'
import { Commit } from './Commit'
import { Query } from './Query'
import { Accessor } from '../Accessor'

export type AccessorFetcher = (accessors: Accessor[], queryName?: string) => any

export class Scheduler extends Disposable {
  private timer: any

  public stack: Query[] = []
  public commit: Commit = undefined!

  constructor(
    private fetchAccessors: AccessorFetcher,
    public plugins: Plugins = new Plugins(),
    public interval = 20
  ) {
    super()

    this.start()
    this.addDisposer(this.cancel)
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
    if (!this.commit || this.commit.accessors.size) {
      if (this.commit) this.commit.dispose()

      this.commit = new Commit(this.plugins, this.stack, this.fetchAccessors)
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
