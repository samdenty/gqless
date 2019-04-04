import { DocumentNode } from 'graphql'
import { QueryResponse } from '../Query'
import { Selection } from '../Selection'

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never

export type Middleware = {
  // onUnresolvedNode?(node: QueryNode): void

  onFetch?(data: { selections: Selection<any>[]; query: DocumentNode }): void
  onFetched?(data: {
    selections: Selection<any>[]
    query: DocumentNode
    error?: any
    response?: QueryResponse
  }): void

  // proxyGetter?(data: {
  //   node: QueryNode
  //   prop: string | symbol
  //   nodeForProp?: QueryField
  //   // Returns the proxy that would have been returned,
  //   // allowing you to perform other logic
  //   createNestedProxy: (interceptor?: ProxyInterceptor) => Node
  // }): any

  dispose?(): void
}

export type QueryMiddlewareArg<T extends keyof Middleware> = ArgumentTypes<
  Middleware[T]
>[0]
