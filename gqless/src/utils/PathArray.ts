export class PathArray<T> extends Array<T> {
  constructor(...items: T[]) {
    super(...items)
    Object.setPrototypeOf(this, Object.create(PathArray.prototype))
  }

  public toString() {
    return this.map(element => String(element)).join('.')
  }
}
