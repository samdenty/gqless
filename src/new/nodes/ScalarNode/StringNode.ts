import { ScalarNode, IScalarNodeOptions } from './ScalarNode'

export class StringNode<T extends string> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }
}
