import { interceptFunction } from './utils'
import { ScalarNode, IScalarNodeOptions } from './ScalarNode'
import { Selection } from '../../Selection'

export class StringNode<T extends string> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }

  protected getPrototypeMethod(prop: string | symbol) {
    return String.prototype[prop]
  }
}
