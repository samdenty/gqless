export class Disposable {
  private _disposers = new Set<Function>()

  protected _disposed = false

  public _addDisposer(...disposers: any[]) {
    disposers.forEach(
      dispose => typeof dispose === 'function' && this._disposers.add(dispose)
    )
    return () => this._deleteDiposer(...disposers)
  }

  public _deleteDiposer(...disposers: any[]) {
    disposers.forEach(
      dispose =>
        typeof dispose === 'function' && this._disposers.delete(dispose)
    )
  }

  public _dispose() {
    if (this._disposed) return

    this._disposed = true
    this._disposers.forEach(dispose => dispose.call(this))
  }
}
