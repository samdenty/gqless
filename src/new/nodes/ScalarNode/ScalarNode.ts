import { Node } from '../../Node'
import { StringNode } from '.'
import { BooleanNode } from './BooleanNode'
import { NumberNode } from './NumberNode'

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
}
