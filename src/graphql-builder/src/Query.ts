import { DocumentNode } from 'graphql'
import { Selection, RootSelection } from './Selection'
import {
  ObjectNode,
  ArrayNode,
  FieldsNode,
  UnionNode,
  InterfaceNode,
} from './Node'
import { defaultMiddleware, MiddlewareEngine } from './Middleware'
import { ASTBuilder } from './ASTBuilder'
import { QueryBatcher } from './QueryBatcher'
import { Cache } from './Cache'
import {
  RootAccessor,
  Accessor,
  IndexAccessor,
  FieldAccessor,
} from './Accessor'

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

export class Query<TNode extends ObjectNode<any, any, any>> {
  protected selection = new RootSelection(this.node)
  protected cache = new Cache()
  protected accessor = new RootAccessor(this.selection, this.cache)
  protected astBuilder: ASTBuilder
  protected batcher: QueryBatcher

  public data = this.accessor.data
  public middleware = new MiddlewareEngine()

  public name?: string

  constructor(
    protected node: TNode,
    protected fetchQuery: QueryFetcher,
    { name }: IQueryOptions = {}
  ) {
    this.name = name

    this.astBuilder = new ASTBuilder(name)
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
    if (!query) return

    let error: any
    const responsePromise = (async () => await this.fetchQuery(query))()

    this.middleware.all.onFetch(query, responsePromise, selections)

    let response: QueryResponse | undefined = undefined
    try {
      response = await responsePromise
    } catch (e) {
      error = e
    }

    if (!error) {
      const recurseFieldsAccessor = (
        accessor: Accessor<
          Selection<
            ObjectNode<any, any> | InterfaceNode<any, any, any> | UnionNode
          >
        >,
        data: Record<string, unknown>
      ) => {
        if (data === null) return

        Object.entries(data).forEach(([dataProp, value]) => {
          // __typename is not a selection, but handled internally
          if (dataProp === '__typename') return

          let fieldAccessor = accessor.getChild(
            ({ selection }) => selection.dataProp === dataProp
          )

          if (!fieldAccessor) {
            const subSelection = accessor.selection.getField(
              s => s.dataProp === dataProp
            )

            if (!subSelection) {
              console.error(
                `Couldn't locate selection ${accessor.path}.${dataProp}`
              )
              return
            }

            fieldAccessor = new FieldAccessor(accessor, subSelection)
          }

          recurseAccessor(fieldAccessor, value)
        })
      }

      const recurseArrayAccessor = (
        accessor: Accessor<Selection<any>, IndexAccessor>,
        data: unknown[]
      ) => {
        if (data === null) return

        data.forEach((value, i) => {
          const indexAccessor =
            accessor.getChild(a => a.index === i) ||
            new IndexAccessor(accessor, i)

          recurseAccessor(indexAccessor, value)
        })
      }

      const recurseAccessor = (accessor: Accessor<any, any>, data: any) => {
        console.log(accessor.path.toString(), accessor.entry)

        if (accessor.node instanceof FieldsNode) {
          recurseFieldsAccessor(accessor, data)
          // this.cache.update(, data)
          return
        }

        if (accessor.node instanceof ArrayNode) {
          recurseArrayAccessor(accessor, data)
          this.cache.update(accessor.path.toString(), data)
          return
        }
      }

      recurseFieldsAccessor(this.accessor, response!.data)
    }

    if (error) {
      throw error
    }

    return response
  }

  public dispose() {
    this.batcher.dispose()

    this.middleware.all.dispose()
  }
}
