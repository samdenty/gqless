import { ScalarNode, IScalarNodeOptions } from './ScalarNode'

export class StringNode<T extends string> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }

  protected getPrototypeMethod<K extends keyof String>(prop: K): String[K] {
    return String.prototype[prop]
  }
}
