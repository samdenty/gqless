import {
  NodeExtension,
  StaticExtension,
  ComputableExtension,
  createExtension,
  ComputedExtension,
} from './Extension'
import { Matchable } from './abstract/Matchable'
import { Value } from '../Cache'
import {
  DataTrait,
  DataContext,
  getExtensions,
  getValue,
  interceptAccessor,
} from './traits'

export type IScalarNodeOptions = {
  name?: string
  extension?: NodeExtension
}

export class ScalarNode extends Matchable implements DataTrait {
  public _extension?: StaticExtension | ComputableExtension
  public _name?: string

  constructor({ name, extension }: IScalarNodeOptions = {}) {
    super()

    this._name = name

    if (extension) {
      this._extension = createExtension(this, extension)
    }
  }

  public _match(value: Value, data: any) {
    const result = super._match(value, data)
    if (result !== undefined) return result

    if (data instanceof RegExp) {
      const input = String(value.data)
      return input.match(data) ? value : undefined
    }

    return
  }

  public toString() {
    return this._name || this.constructor.name
  }

  public getData(ctx: DataContext) {
    interceptAccessor(ctx)

    const extensions = getExtensions(ctx)
    const value = getValue(ctx)

    const extension = extensions[0]
    if (extension) {
      return extension._data
    }

    if (!value) return null
    return value.data
  }
}
