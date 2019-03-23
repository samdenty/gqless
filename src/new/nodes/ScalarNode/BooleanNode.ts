import { ScalarNode, IScalarNodeOptions } from './ScalarNode'

export class BooleanNode<T extends boolean> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }
}
