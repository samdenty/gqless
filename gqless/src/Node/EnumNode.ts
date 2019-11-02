import { Outputable, IDataContext } from './abstract/Outputable'
import { Node } from './abstract/Node'
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

  public getData(ctx: IDataContext<EnumNode>): any {
    if (!ctx.value) return null

    return ctx.value.data
  }
}
