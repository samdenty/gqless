import { Accessor, getAccessor } from '../Accessor'

// @TODO selection.onFetched should reset the timer
// if it's been called from outside

export class Poller {
  private accessor: Accessor

  private timer?: number
  private unstage?: Function

  public polling = false

  constructor(data: any, public interval: number) {
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
    const { selection, scheduler } = this.accessor

    this.unstage = scheduler.commit.stage(selection)
    await selection.onFetched
    this.unstage = undefined

    // If we're still polling after we've fetched
    // the selection, then poll again
    if (!this.polling) return

    this.pollAfterInterval()
  }

  private pollAfterInterval() {
    this.timer = setTimeout(() => this.poll(), this.interval)
  }

  public resetTimer() {
    if (this.polling) this.toggle(true)
  }

  public toggle(poll = !this.polling) {
    this.polling = poll

    this.unstage && this.unstage()
    clearTimeout(this.timer)

    if (!poll) return

    this.pollAfterInterval()
  }
}
