import { Query } from '../../Query'
import { ScalarNode, IScalarNodeOptions } from './ScalarNode'

export class StringNode<T extends string> extends ScalarNode<T> {
  constructor(query: Query, options?: IScalarNodeOptions) {
    super(query, options)
  }
}
