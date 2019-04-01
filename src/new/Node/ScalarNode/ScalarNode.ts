import { Node } from '../abstract'
import { StringNode } from './StringNode'
import { BooleanNode } from './BooleanNode'
import { NumberNode } from './NumberNode'
import { Selection } from '../../Selection'

export type IScalarNodeOptions = {
  name?: string
}

export type UScalarNode =
  | StringNode<any>
  | BooleanNode<any>
  | NumberNode<any>
  | ScalarNode<any>

export class ScalarNode<T extends string | boolean | number> extends Node<T> {
  public data: T
  public name?: string

  constructor({ name }: IScalarNodeOptions = {}) {
    super()
    this.name = name
  }

  protected proxyGetter(prop: string) {}

  public getData(selection: Selection<any>) {
    if (selection.value !== undefined) {
      return selection.value as T
    }

    return new Proxy(
      {},
      {
        get: (_, prop: string) => this.proxyGetter(prop),
      }
    ) as T
  }
}
