import { Node } from '../abstract'
import { StringNode } from './StringNode'
import { BooleanNode } from './BooleanNode'
import { NumberNode } from './NumberNode'
import { Selection, RootSelection } from '../../Selection'
import { ScalarProxyHandler } from '../../Middleware'
import { interceptFunction } from './utils'
import { Accessor } from '../../Accessor'

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

  protected getPrototypeMethod(prop: string | symbol) {
    return (
      String.prototype[prop] ||
      Number.prototype[prop] ||
      Boolean.prototype[prop]
    )
  }

  private proxyGetter(
    accessor: Accessor<Selection<UScalarNode>>,
    prop: string | symbol
  ) {
    // if (prop === Symbol.toPrimitive) {
    //   return (hint: string) => {
    //     if (selection.value !== undefined) return selection.value
    //     throw selection.unresolvedSelection
    //   }
    // }
    // const method = this.getPrototypeMethod(prop)
    // if (method !== undefined) {
    //   if (typeof method === 'function') {
    //     return interceptFunction(selection, prop)
    //   }
    //   const { unresolvedSelection } = selection
    //   if (unresolvedSelection) {
    //     throw unresolvedSelection
    //   }
    //   return selection.value[prop]
    // }
  }

  public getData(accessor: Accessor<Selection<UScalarNode>>) {
    let value: T = null //accessor.value

    if (value === undefined) {
      value = new Proxy(
        {},
        {
          get: (_, prop: string) => this.proxyGetter(accessor, prop),
        }
      ) as T
    }

    // const returnValue = accessor.root.getScalarData(accessor, value)
    // if (returnValue !== undefined) return returnValue
    return value
  }
}
