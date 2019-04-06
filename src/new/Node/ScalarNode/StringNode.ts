import { interceptFunction } from './utils'
import { ScalarNode, IScalarNodeOptions } from './ScalarNode'
import { Selection } from '../../Selection'

export class StringNode<T extends string> extends ScalarNode<T> {
  constructor(options?: IScalarNodeOptions) {
    super(options)
  }

  protected proxyGetter(selection: Selection<any>, prop: string) {
    const value = super.proxyGetter(selection, prop)
    if (value !== undefined) return value

    const exists = prop in String.prototype

    if (exists) {
      const method = String.prototype[prop]
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
