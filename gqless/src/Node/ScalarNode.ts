import { Generic, Mix } from 'mix-classes'
import { Node } from './abstract/Node'
import { IDataContext, getExtensions, getValue } from './abstract/Outputable'
import {
  NodeExtension,
  StaticExtension,
  ComputableExtension,
  createExtension,
} from './Extension'
import { Matchable } from './abstract/Matchable'
import { Value } from '../Cache'
import { DataTrait } from './traits'

export type IScalarNodeOptions = {
  name?: string
  extension?: NodeExtension
}

export interface ScalarNode<T extends any = any> extends Node<T> {}

export class ScalarNode<T> extends Mix(Matchable, Generic(Node))
  implements DataTrait {
  public extension?: StaticExtension | ComputableExtension
  public name?: string

  constructor({ name, extension }: IScalarNodeOptions = {}) {
    super()

    this.name = name

    if (extension) {
      this.extension = createExtension(this, extension)
    }
  }

  public match(value: Value, data: any) {
    const result = super.match(value, data)
    if (result !== undefined) return result

    if (data instanceof RegExp) {
      const input = String(value.data)
      return input.match(data) ? value : undefined
    }

    return
  }

  public toString() {
    return this.name || this.constructor.name
  }

  public getData(ctx: IDataContext) {
    const extensions = getExtensions(ctx)
    if (extensions.length) {
      return extensions[0].data
    }

    const value = getValue(ctx)
    if (!value) return null
    return value.data
  }
}
