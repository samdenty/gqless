import { QueryMiddleware, QueryMiddlewareArg } from '../QueryMiddleware'

export class PromiseMiddleware implements QueryMiddleware {
  public proxyGetter({ node, prop }: QueryMiddlewareArg<'proxyGetter'>) {
    if (prop === 'then' || prop === 'catch' || prop === 'finally') {
      return node.value[prop].bind(node.value)
    }
  }
}
