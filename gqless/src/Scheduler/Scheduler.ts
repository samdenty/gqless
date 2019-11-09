import { invariant } from '@gqless/utils'

import { Plugins } from '../Plugin'
import { Disposable } from '../utils'
import { Commit } from './Commit'
import { Query } from './Query'
import { Accessor } from '../Accessor'

export type AccessorFetcher = (accessors: Accessor[], queryName?: string) => any

export class Scheduler extends Disposable {
  private _timer: any

  public _stack: Query[] = []
  public _commit: Commit = undefined!

  constructor(
    private _fetchAccessors: AccessorFetcher,
    public _plugins: Plugins = new Plugins(),
    public _interval = 50
  ) {
    super()

    this._startTimer()
    this._addDisposer(this._clearTimer)
  }

  public pushStack(...queries: Query[]) {
    this._stack.push(...queries)
  }

  public popStack(...queries: Query[]) {
    for (let i = queries.length - 1; i >= 0; i--) {
      const query = queries[i]
      const idx = this._stack.length - 1

      invariant(
        this._stack[idx] === query,
        `Scheduler#popStack called with '${query}', but not last in stack [${this._stack.join(
          ', '
        )}]`
      )

      this._stack.splice(idx, 1)
    }
  }

  private _startTimer() {
    this._clearTimer()

    // Don't create new Commit, if prev one unused
    if (!this._commit || this._commit._accessors.size) {
      if (this._commit) this._commit._dispose()

      this._commit = new Commit(
        this._plugins,
        this._stack,
        this._fetchAccessors
      )
    }

    const { _commit } = this
    _commit._onActive.then(() => {
      this._timer = setTimeout(() => {
        _commit._fetch()
        this._startTimer()
      }, this._interval)

      _commit._onIdle.then(() => {
        if (_commit !== this._commit) return

        // Cancel timer, and wait until commit is active again
        this._startTimer()
      })
    })
  }

  private _clearTimer() {
    clearTimeout(this._timer)
  }
}
