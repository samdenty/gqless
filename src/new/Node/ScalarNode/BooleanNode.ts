import { ScalarNode, IScalarNodeOptions } from './ScalarNode'
import { Selection } from '../../Selection'
import { interceptFunction } from './utils'

export class BooleanNode<T extends boolean> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }

  protected getPrototypeMethod(prop: string | symbol) {
    return Boolean.prototype[prop]
  }
}
