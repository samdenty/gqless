import { ScalarNode, IScalarNodeOptions } from './ScalarNode'

export class BooleanNode<T extends boolean> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }

  protected getPrototypeMethod<K extends keyof Boolean>(prop: K): Boolean[K] {
    return Boolean.prototype[prop]
  }
}
