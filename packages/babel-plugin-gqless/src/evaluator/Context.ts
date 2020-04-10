import { V } from './values'

export class Context {
  private values = new Map<string, V>()

  constructor(public parent?: Context) {}

  public define(name: string, value: V) {
    this.values.set(name, value)
  }

  public set(name: string, value: V) {
    const context = this.has(name) || this
    context.set(name, value)
  }

  public has(name: string): Context | undefined {
    if (this.values.has(name)) {
      return this
    }

    return this.parent?.has(name)
  }

  public get(name: string) {
    if (this.values.has(name)) {
      return this.values.get(name)
    }

    return this.parent?.get(name)
  }
}
