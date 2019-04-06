import { ScalarNode, IScalarNodeOptions } from './ScalarNode'
import { Selection } from '../../Selection'
import { interceptFunction } from './utils'

export class NumberNode<T extends number> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }

  protected proxyGetter(selection: Selection<any>, prop: string) {
    const value = super.proxyGetter(selection, prop)
    if (value !== undefined) return value

    const exists = prop in Number.prototype

    if (exists) {
      const method = Number.prototype[prop]
      if (typeof method === 'function') {
        return interceptFunction(selection, prop)
      }

      const { unresolvedSelection } = selection
      if (unresolvedSelection) {
        throw unresolvedSelection
      }

      return selection.value[prop]
    }
  }
}
