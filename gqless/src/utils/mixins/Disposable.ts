export class Disposable {
  private disposers = new Set<Function>()

  protected disposed = false

  public addDisposer(...disposers: any[]) {
    disposers.forEach(
      dispose => typeof dispose === 'function' && this.disposers.add(dispose)
    )
    return () => this.deleteDiposer(...disposers)
  }

  public deleteDiposer(...disposers: any[]) {
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
