import { Query } from '../../Query'
import { ScalarNode, IScalarNodeOptions } from './ScalarNode'

export class BooleanNode<T extends boolean> extends ScalarNode<T> {
  constructor(query: Query, options?: IScalarNodeOptions) {
    super(query, options)
  }
}
