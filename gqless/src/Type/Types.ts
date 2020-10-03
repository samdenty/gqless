import { Schema } from '../schema'
import { Type } from './Type'

export class Types {
  private types = new Map<string, Type>()

  constructor(public schema: Schema) {}

  public queryType = this.get(this.schema.$query)
  public mutationType =
    this.schema.$mutation && this.types.get(this.schema.$mutation)

  public get(name: string) {
    if (!this.types.has(name)) {
      this.types.set(name, new Type(this, name))
    }
    return this.types.get(name)!
  }
}
