import { merge } from 'lodash'
// import { QueryBuilder } from './QueryBuilder'
// import { QueryBatcher } from './QueryBatcher'
import { DocumentNode } from 'graphql'
import { Selection, SelectionRoot } from './Selection'
import { ObjectNode, NodeDataType } from './Node'
import { Middleware, defaultMiddleware } from './Middleware'
import { ASTBuilder } from './ASTBuilder'
import { QueryBatcher } from './QueryBatcher'

export type QueryResponse<Data = any> = { data: Data; errors: any }

export interface IQueryOptions {
  fetchQuery(query: DocumentNode): Promise<QueryResponse> | QueryResponse
  queryName?: string
  middleware?(middleware: Middleware[], query: Query<any, any>): Middleware[]
}

export type ProxyInterceptor = (
  target: unknown,
  prop: string | symbol
) => unknown

export class Query<
  TNode extends ObjectNode<any, any, any>,
  TData = NodeDataType<TNode>
> {
  public options: IQueryOptions

  public response: QueryResponse<TData> = this.clear()
  public selectionRoot = new SelectionRoot(this.node)

  public astBuilder: ASTBuilder
  public batcher: QueryBatcher
  public middleware: Middleware[]

  constructor(public node: TNode, options?: IQueryOptions) {
    this.options = {
      ...options,
    }

    this.astBuilder = new ASTBuilder(this.options.queryName)
    this.batcher = new QueryBatcher(this)
    this.middleware = this.options.middleware
      ? this.options.middleware(defaultMiddleware, this)
      : defaultMiddleware
  }

  public clear() {
    this.response = {
      data: {} as TData,
      errors: null,
    }
    return this.response
  }

  public async fetchSelections(selections: Selection<any>[]) {
    const query = this.astBuilder.buildDocument(...selections)

    this.middleware.forEach(m => m.onFetch && m.onFetch({ selections, query }))

    let error: any
    try {
      var response = await this.options.fetchQuery(query)
    } catch (e) {
      error = e
    }

    if (!error) merge(this.response.data, response.data)

    if (error) {
      this.middleware.forEach(
        m => m.onFetched && m.onFetched({ selections, query, error })
      )

      throw error
    }

    this.middleware.forEach(
      m => m.onFetched && m.onFetched({ selections, query, response })
    )

    return response
  }

  public dispose() {
    this.batcher.dispose()

    this.middleware.forEach(m => m.dispose && m.dispose())
  }
}
