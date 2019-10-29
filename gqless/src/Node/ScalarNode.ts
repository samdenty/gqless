import { Generic, Mix } from 'mix-classes'

import { Accessor } from '../Accessor'
import { Selection } from '../Selection'
import { Node } from './abstract/Node'
import { Outputable } from './abstract/Outputable'
import { Extension, ScalarExtension } from './Extension'
import { Matchable } from './abstract/Matchable'
import { Value } from '../Cache'

export type IScalarNodeOptions = {
  name?: string
  extension?: Extension
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

  public getData(accessor: Accessor<Selection<ScalarNode>>): any {
    super.getData(accessor)

    if (accessor.extensions.length) {
      return accessor.extensions[0].data
    }

    if (!accessor.value) return null
    return accessor.value.data
  }
}
