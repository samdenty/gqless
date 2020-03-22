import { Accessor, getAccessor } from '../Accessor'
import { Query } from '../Scheduler'

// @TODO selection.onStatusChange should reset the timer
// if it's been called from outside

export class Poller {
  private accessor: Accessor

  private timer?: number
  private unstage?: Function

  public polling = false

  constructor(data: any, public interval: number, public stack?: Query[]) {
    this.accessor = getAccessor(data)
  }

  public updateInterval(interval: number) {
    if (this.interval === interval) return
    this.interval = interval

    this.resetTimer()
  }

  /**
   * Polls the selection, scheduling a new poll
   * only after it's been fetched
   */
  private async poll() {
    this.unstage = this.accessor.scheduler.commit.stage(
      this.accessor,
      ...(this.stack || [])
    )

    // Wait until it's been fetched, before polling again
    await this.accessor.onStatusChange

    this.unstage = undefined

    // If we're still polling after we've fetched
    // the selection, then poll again
    if (this.polling) {
      this.pollAfterInterval()
    }
  }

  private pollAfterInterval() {
    this.timer = setTimeout(() => this.poll(), this.interval)
  }

  public resetTimer() {
    if (this.polling) this.toggle(true)
  }

  public toggle(poll = !this.polling) {
    this.polling = poll

    this.unstage?.()
    clearTimeout(this.timer)

    if (!poll) return

    this.pollAfterInterval()
  }
}
