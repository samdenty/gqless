import { invariant } from '@gqless/utils'

import { Plugins } from '../Plugin'
import { Disposable } from '../utils'
import { Commit } from './Commit'
import { Query } from './Query'
import { Accessor } from '../Accessor'

export type AccessorFetcher = (accessors: Accessor[], queryName?: string) => any

export class Scheduler extends Disposable {
  private timer$: any

  public stack$: Query[] = []
  public commit$: Commit = undefined!

  constructor(
    private fetchAccessors$: AccessorFetcher,
    public plugins$: Plugins = new Plugins(),
    public interval$ = 50
  ) {
    super()

    this.startTimer$()
    this.addDisposer$(this.clearTimer$)
  }

  public pushStack$(...queries: Query[]) {
    this.stack$.push(...queries)
  }

  public popStack$(...queries: Query[]) {
    for (let i = queries.length - 1; i >= 0; i--) {
      const query = queries[i]
      const idx = this.stack$.length - 1

      invariant(
        this.stack$[idx] === query,
        `Scheduler#popStack called with '${query}', but not last in stack [${this.stack$.join(
          ', '
        )}]`
      )

      this.stack$.splice(idx, 1)
    }
  }

  private startTimer$() {
    this.clearTimer$()

    // Don't create new Commit, if prev one unused
    if (!this.commit$ || this.commit$.accessors$.size) {
      if (this.commit$) this.commit$.dispose$()

      this.commit$ = new Commit(
        this.plugins$,
        this.stack$,
        this.fetchAccessors$
      )
    }

    const { commit$ } = this
    commit$.onActive$.then(() => {
      this.timer$ = setTimeout(() => {
        commit$.fetch$()
        this.startTimer$()
      }, this.interval$)

      commit$.onIdle$.then(() => {
        if (commit$ !== this.commit$) return

        // Cancel timer, and wait until commit is active again
        this.startTimer$()
      })
    })
  }

  private clearTimer$() {
    clearTimeout(this.timer$)
  }
}
