import { Helper } from './Helper'

export class Poller extends Helper {
  private timer?: number
  public polling = false

  constructor(data: any, public interval: number) {
    super(data)
  }

  public updateInterval(interval: number) {
    if (this.interval === interval) return
    this.interval = interval

    // Reset timer
    if (this.polling) this.toggle(true)
  }

  private poll() {
    this.accessor.scheduler.stage(this.accessor.selection)

    this.pollAfterInterval()
  }

  private pollAfterInterval() {
    this.timer = setTimeout(() => this.poll(), this.interval)
  }

  public toggle(poll = !this.polling) {
    this.polling = poll
    clearTimeout(this.timer)
    if (!poll) return

    this.pollAfterInterval()
  }
}
