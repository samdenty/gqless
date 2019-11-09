export class Disposable {
  private _disposers = new Set<Function>()

  protected disposed = false

  public addDisposer(...disposers: any[]) {
    disposers.forEach(
      dispose => typeof dispose === 'function' && this._disposers.add(dispose)
    )
    return () => this.deleteDiposer(...disposers)
  }

  public deleteDiposer(...disposers: any[]) {
    disposers.forEach(
      dispose =>
        typeof dispose === 'function' && this._disposers.delete(dispose)
    )
  }

  public dispose() {
    if (this.disposed) return

    this.disposed = true
    this._disposers.forEach(dispose => dispose.call(this))
  }
}
