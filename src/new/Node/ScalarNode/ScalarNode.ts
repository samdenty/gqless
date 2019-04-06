import { Node } from '../abstract'
import { StringNode } from './StringNode'
import { BooleanNode } from './BooleanNode'
import { NumberNode } from './NumberNode'
import { Selection, SelectionRoot } from '../../Selection'
import { ScalarProxyHandler } from '../../Middleware'

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

  protected proxyGetter(
    selection: Selection<UScalarNode>,
    prop: string | symbol
  ) {
    if (prop === Symbol.toPrimitive) {
      return (hint: string) => {
        if (selection.value !== undefined) return selection.value

        throw selection.unresolvedSelection
      }
    }
  }

  public getData(selection: Selection<UScalarNode>) {
    const value: T =
      selection.value !== undefined
        ? selection.value
        : new Proxy(
            {},
            {
              get: (_, prop: string) => this.proxyGetter(selection, prop),
            }
          )

    const returnValue = selection.root.getScalarData(selection, value)

    if (returnValue !== undefined) return returnValue

    return value
  }
}
