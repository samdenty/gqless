export class Cache {
  public entries
  constructor() {
    this.entries = []
  }

  public update(key: string, value: Record<string, unknown> | unknown[]) {
    console.log(key, value)
    this.entries[key] = value
  }
}
