import { QueryMiddleware } from '../QueryMiddleware'
import { QueryNode } from '../QueryNode'

export class PromiseMiddleware implements QueryMiddleware {
  public proxyGetter(node: QueryNode, prop: string) {
    if (prop === 'then' || prop === 'catch' || prop === 'finally') {
      return node.value[prop].bind(node.value)
    }
  }
}
