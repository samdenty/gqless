import { ScalarNode, IScalarNodeOptions } from './ScalarNode'

export class NumberNode<T extends number> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }

  protected getPrototypeMethod<K extends keyof Number>(prop: K): Number[K] {
    return Number.prototype[prop]
  }
}
