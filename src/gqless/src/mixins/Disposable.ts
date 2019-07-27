export class Disposable {
  protected disposed = false
  protected disposers = new Set<Function>()

  public dispose() {
    if (this.disposed) return

    this.disposed = true
    this.disposers.forEach(dispose => dispose())
  }
}
