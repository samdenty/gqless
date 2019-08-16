import { Generic, Mix } from 'mix-classes'

import { Accessor } from '../Accessor'
import { Selection } from '../Selection'
import { Node } from './abstract/Node'
import { Outputable } from './abstract/Outputable'
import { Extension } from './Extension'

export type IScalarNodeOptions = {
  name?: string
  extension?: Extension
}

export interface ScalarNode<T extends any = any> extends Node<T> {}

export class ScalarNode<T> extends Mix(Outputable, Generic(Node)) {
  public name?: string

  constructor({ name, extension }: IScalarNodeOptions = {}) {
    super([extension])

    this.name = name
  }

  public toString() {
    return this.name || this.constructor.name
  }

  public getData(accessor: Accessor<Selection<ScalarNode>>): any {
    super.getData(accessor)

    if (!accessor.value) return null

    let value: any = accessor.value.data

    if (accessor.extensions.length) {
      const extension = accessor.extensions[accessor.extensions.length - 1]

      return typeof extension === 'function' ? extension(value) : extension
    }

    return value
  }
}
