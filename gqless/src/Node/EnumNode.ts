import { Outputable } from './abstract/Outputable'
import { Node } from './abstract/Node'
import { Selection } from '../Selection'
import { Accessor } from '../Accessor'
import { Mix, Generic } from 'mix-classes'

export type IEnumNodeOptions = {
  name?: string
}

export interface EnumNode<T extends any = any> extends Node<T> {}

export class EnumNode<T> extends Mix(Outputable, Generic(Node)) {
  public name?: string

  constructor({ name }: IEnumNodeOptions = {}) {
    super()

    this.name = name
  }

  public toString() {
    return this.name || this.constructor.name
  }

  public getData(accessor: Accessor<Selection<EnumNode>>): any {
    super.getData(accessor)
    if (!accessor.value) return null

    return accessor.value.data
  }
}
