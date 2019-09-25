export class Disposable {
  private disposers = new Set<Function>()

  protected disposed = false

  protected disposer(...disposers: any[]) {
    disposers.forEach(
      dispose => typeof dispose === 'function' && this.disposers.add(dispose)
    )
  }

  protected deleteDiposer(...disposers: any[]) {
    disposers.forEach(
      dispose => typeof dispose === 'function' && this.disposers.delete(dispose)
    )
  }

  public dispose() {
    if (this.disposed) return

    this.disposed = true
    this.disposers.forEach(dispose => dispose.call(this))
  }
}
