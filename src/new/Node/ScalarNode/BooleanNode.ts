import { ScalarNode, IScalarNodeOptions } from './ScalarNode'

export class BooleanNode<T extends boolean> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }

  protected proxyGetter(prop: string) {
    const exists = prop in Boolean.prototype

    if (exists) {
      const method = Boolean.prototype[prop]
      if (typeof method === 'function') {
        // return interceptFunction(node, prop)
      }

      // const { unresolvedNode } = node.resolve()
      // if (unresolvedNode) throwException(unresolvedNode)
    }
  }
}
