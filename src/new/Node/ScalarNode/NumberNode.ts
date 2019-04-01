import { ScalarNode, IScalarNodeOptions } from './ScalarNode'

export class NumberNode<T extends number> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }

  protected proxyGetter(prop: string) {
    const exists = prop in Number.prototype

    if (exists) {
      const method = Number.prototype[prop]
      if (typeof method === 'function') {
        // return interceptFunction(node, prop)
      }

      // const { unresolvedNode } = node.resolve()
      // if (unresolvedNode) throwException(unresolvedNode)
    }
  }
}
