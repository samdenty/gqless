import { QueryNode, QueryField } from '../QueryNode'
import { DocumentNode } from 'graphql'
import { QueryResponse, Node, ProxyInterceptor } from '../Query'

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never

export type QueryMiddleware = {
  onUnresolvedNode?(node: QueryNode): void

  onFetch?(data: { nodes: QueryField[]; query: DocumentNode }): void
  onFetched?(data: {
    nodes: QueryField[]
    query: DocumentNode
    error?: any
    response?: QueryResponse
  }): void

  proxyGetter?(data: {
    node: QueryNode
    prop: string | symbol
    nodeForProp?: QueryField
    // Returns the proxy that would have been returned,
    // allowing you to perform other logic
    createNestedProxy: (interceptor?: ProxyInterceptor) => Node
  }): any

  dispose?(): void
}

export type QueryMiddlewareArg<T extends keyof QueryMiddleware> = ArgumentTypes<
  QueryMiddleware[T]
>[0]
