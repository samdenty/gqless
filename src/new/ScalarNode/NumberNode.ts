import { Query } from '../../Query'
import { ScalarNode, IScalarNodeOptions } from './ScalarNode'

export class NumberNode<T extends number> extends ScalarNode<T> {
  constructor(query: Query, options?: IScalarNodeOptions) {
    super(query, options)
  }
}
