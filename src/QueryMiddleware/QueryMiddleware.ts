import { QueryNode, QueryField } from '../QueryNode'
import { DocumentNode } from 'graphql'
import { QueryResponse, Node, ProxyInterceptor } from '../Query'

export type QueryMiddleware = {
  onFetch?(data: { nodes: QueryField[]; query: DocumentNode }): void
  onFetched?(data: {
    nodes: QueryField[]
    query: DocumentNode
    error?: any
    response?: QueryResponse
  }): void

  proxyGetter?(
    node: QueryNode,
    prop: string | symbol,
    // Returns the proxy that would have been returned,
    // allowing you to perform other logic
    createNestedProxy: (interceptor?: ProxyInterceptor) => Node
  ): any
}
