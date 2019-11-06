import { IDataContext, getValue } from './abstract/Outputable'
import { Node } from './abstract/Node'
import { Mix, Generic } from 'mix-classes'
import { DataTrait } from './traits'

export type IEnumNodeOptions = {
  name?: string
}

export interface EnumNode<T extends any = any> extends Node<T> {}

export class EnumNode<T> extends Mix(Generic(Node)) implements DataTrait {
  public name?: string

  constructor({ name }: IEnumNodeOptions = {}) {
    super()

    this.name = name
  }

  public toString() {
    return this.name || this.constructor.name
  }

  public getData(ctx: IDataContext<EnumNode>): any {
    const value = getValue(ctx)
    if (!value) return null

    return value.data
  }
}
