import merge from 'lodash/fp/merge'
// import { QueryBuilder } from './QueryBuilder'
// import { QueryBatcher } from './QueryBatcher'
import { DocumentNode } from 'graphql'
import { Selection, RootSelection } from './Selection'
import { ObjectNode, NodeDataType, ArrayNode, Node } from './Node'
import { defaultMiddleware, MiddlewareEngine } from './Middleware'
import { ASTBuilder } from './ASTBuilder'
import { QueryBatcher } from './QueryBatcher'
import { Cache } from './Cache'
import { RootAccessor } from './Accessor'

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
  protected selection = new RootSelection(this.node)
  protected cache = new Cache()
  protected accessor = new RootAccessor(this.selection, this.cache)
  protected astBuilder: ASTBuilder
  protected batcher: QueryBatcher

  public response: QueryResponse<TData>
  public data = this.accessor.data
  public middleware = new MiddlewareEngine()

  public name: string

  constructor(
    protected node: TNode,
    protected fetchQuery: QueryFetcher,
    { name: queryName = null }: IQueryOptions = {}
  ) {
    this.name = queryName

    this.astBuilder = new ASTBuilder(queryName)
    this.batcher = new QueryBatcher(selections =>
      this.fetchSelections(selections)
    )
    this.middleware.add(...defaultMiddleware)

    this.selection.onSelect(selection => {
      this.middleware.all.onSelect(selection)
      this.batcher.stage(selection)
    })

    this.selection.onUnselect(selection => {
      this.middleware.all.onUnselect(selection)
      this.batcher.unstage(selection)
    })

    // this.selectionRoot.onGetScalarData((selection, value) => {
    //   return this.middleware.first.getScalarData(selection, value)(
    //     value => value !== undefined
    //   )
    // })

    // this.selectionRoot.onDataAccessed(selection => {
    //   this.middleware.all.onDataAccessed(selection)
    // })

    // this.selectionRoot.onSelectUpdate(selection => {
    //   this.middleware.all.onSelectUpdate(selection)
    //   this.batcher.stage(selection)
    // })
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
      const recurseSelection = (
        selection: Selection<ObjectNode<any, any, any> | ArrayNode<any, any>>,
        data: Record<string, any>,
        path: any[]
      ) => {
        Object.entries(data).forEach(([key, value]) => {
          const fieldSelection = selection.getField(s => s.dataProp === key)

          if (fieldSelection) {
            const fieldPath = [...path, fieldSelection.toString()]

            if (fieldSelection.field.ofNode instanceof ObjectNode) {
              recurseSelection(fieldSelection as any, value, fieldPath)
            }

            if (fieldSelection.field.ofNode instanceof ArrayNode) {
              if (value instanceof Array) {
                const mergedValue = value.map((item, i) =>
                  recurseSelection(fieldSelection, item, [...fieldPath, i])
                )

                this.cache.update(fieldPath.join('.'), value)
              }
            }
          }
        })

        this.cache.update(path.join('.'), data)
      }

      // console.log(response.data)
      recurseSelection(this.selection, response.data, ['Query'])

      const newResponse = merge(this.response, response)
      this.response = newResponse
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
