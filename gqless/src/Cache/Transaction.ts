let currentTransaction: Transaction | undefined

export class Transaction {
  private callbacks = new Set<Function>()

  public begin() {
    if (currentTransaction) return
    currentTransaction = this
  }

  public end() {
    if (currentTransaction !== this) return
    currentTransaction = undefined
    this.flush()
  }

  private flush() {
    const callbacks = Array.from(this.callbacks)
    this.callbacks.clear()

    callbacks.forEach(callback => callback())
  }

  public onComplete(callback: Function) {
    this.callbacks.add(callback)
  }
}

export const afterTransaction = (callback: Function) => {
  if (currentTransaction) {
    currentTransaction.onComplete(callback)
    return
  }

  callback()
}
