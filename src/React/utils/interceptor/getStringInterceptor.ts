import { QueryNode } from '../../../QueryNode'
import { interceptFunction } from './interceptFunction'
import { throwException } from './throwException'

export const getStringInterceptor = <T>(
  node: QueryNode<T>,
  prop: string | Symbol
) => {
  const exists = prop in String.prototype

  if (exists) {
    const method = String.prototype[prop as any]
    if (typeof method === 'function') {
      return interceptFunction(node, prop)
    }

    const { unresolvedNode } = node.resolve()
    if (unresolvedNode) throwException(unresolvedNode)
  }
}
