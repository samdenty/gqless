import { ScalarNode, IScalarNodeOptions } from './ScalarNode'

export class StringNode<T extends string> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }

  protected proxyGetter(prop: string) {
    const exists = prop in String.prototype

    if (exists) {
      const method = String.prototype[prop]
      if (typeof method === 'function') {
        // return interceptFunction(node, prop)
      }

      // const { unresolvedNode } = node.resolve()
      // if (unresolvedNode) throwException(unresolvedNode)
    }
  }
}
