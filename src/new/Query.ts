import merge from 'lodash/fp/merge'
// import { QueryBuilder } from './QueryBuilder'
// import { QueryBatcher } from './QueryBatcher'
import { DocumentNode } from 'graphql'
import { Selection, SelectionRoot } from './Selection'
import { ObjectNode, NodeDataType, ArrayNode, Node } from './Node'
import { defaultMiddleware, MiddlewareEngine } from './Middleware'
import { ASTBuilder } from './ASTBuilder'
import { QueryBatcher } from './QueryBatcher'

export type QueryResponse<Data = any> = { data: Data; errors: any }

export type QueryFetcher = (
  query: DocumentNode
) => Promise<QueryResponse> | QueryResponse

export interface IQueryOptions {
  name?: string
}

export type ProxyInterceptor = (
  target: unknown,
  prop: string | symbol
) => unknown

export class Query<
  TNode extends ObjectNode<any, any, any>,
  TData = NodeDataType<TNode>
> {
  protected selectionRoot = new SelectionRoot(this.node)
  protected astBuilder: ASTBuilder
  protected batcher: QueryBatcher

  public response: QueryResponse<TData>
  public data = this.selectionRoot.createProxy()
  public middleware = new MiddlewareEngine()

  public name: string

  constructor(
    protected node: TNode,
    protected fetchQuery: QueryFetcher,
    { name: queryName = null }: IQueryOptions = {}
  ) {
    this.name = queryName
    this.clearResponse()

    this.astBuilder = new ASTBuilder(queryName)
    this.batcher = new QueryBatcher(selections =>
      this.fetchSelections(selections)
    )
    this.middleware.add(...defaultMiddleware)

    this.selectionRoot.onSelect(selection => {
      this.middleware.all.onSelect(selection)
      this.batcher.stage(selection)
    })

    this.selectionRoot.onGetScalarData((selection, value) => {
      return this.middleware.first.getScalarData(selection, value)(
        value => value !== undefined
      )
    })

    this.selectionRoot.onSelectUpdate(selection => {
      this.middleware.all.onSelectUpdate(selection)
      this.batcher.stage(selection)
    })
  }

  protected clearResponse() {
    this.response = {
      data: {} as TData,
      errors: null,
    }
  }

  protected async fetchSelections(selections: Selection<any>[]) {
    const query = this.astBuilder.buildDocument(...selections)

    this.middleware.all.onFetch({ selections, query })

    let error: any
    try {
      var response = await this.fetchQuery(query)
    } catch (e) {
      error = e
    }

    if (!error) {
      const newResponse = merge(this.response, response)
      this.response = newResponse

      this.selectionRoot.value = newResponse.data
    }

    if (error) {
      this.middleware.all.onFetched({ selections, query, error })
      throw error
    }

    this.middleware.all.onFetched({ selections, query, response })
    return response
  }

  public dispose() {
    this.batcher.dispose()

    this.middleware.all.dispose()
  }
}
