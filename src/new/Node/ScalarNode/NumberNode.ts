import { ScalarNode, IScalarNodeOptions } from './ScalarNode'
import { Selection } from '../../Selection'
import { interceptFunction } from './utils'

export class NumberNode<T extends number> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }

  protected getPrototypeMethod(prop: string | symbol) {
    return Number.prototype[prop]
  }
}
