import { Generic, Mix } from 'mix-classes'

import { Accessor, ExtensionRef } from '../Accessor'
import { Selection } from '../Selection'
import { Node } from './abstract/Node'
import { Outputable, IDataContext } from './abstract/Outputable'
import { NodeExtension } from './Extension'
import { Matchable } from './abstract/Matchable'
import { Value } from '../Cache'

export type IScalarNodeOptions = {
  name?: string
  extension?: NodeExtension
}

export interface ScalarNode<T extends any = any> extends Node<T> {}

export class ScalarNode<T> extends Mix(Outputable, Matchable, Generic(Node)) {
  public name?: string

  constructor({ name, extension }: IScalarNodeOptions = {}) {
    super([extension])

    this.name = name
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
    if (ctx.extensions?.length) {
      return ctx.extensions[0].data
    }

    if (!ctx.value) return null

    return ctx.value.data
  }
}
