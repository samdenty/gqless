import { DataTrait, DataContext, getValue, interceptAccessor } from './traits'

export type IEnumNodeOptions = {
  name?: string
}

export class EnumNode implements DataTrait {
  public name?: string

  constructor({ name }: IEnumNodeOptions = {}) {
    this.name = name
  }

  public toString() {
    return this.name || this.constructor.name
  }

  public getData(ctx: DataContext<EnumNode>): any {
    interceptAccessor(ctx)

    const value = getValue(ctx)
    if (!value) return null

    return value.data$
  }
}
