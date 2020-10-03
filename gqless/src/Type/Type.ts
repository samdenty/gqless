import { Types } from './Types'

export class Type {
  constructor(public types: Types, public readonly name: string) {}

  public get isNullable() {
    return !this.name.endsWith('!')
  }

  public get isArray() {
    return this.name.startsWith('[')
  }

  public get ofType() {
    if (this.isArray) return

    return this.types.get(
      this.name.slice(1).slice(0, this.isNullable ? -1 : -2)
    )
  }

  public innerType() {
    if (!this.ofType) return

    return this.ofType.innerType ?? this.ofType
  }
}
