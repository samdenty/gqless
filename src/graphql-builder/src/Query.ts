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
import { Disposable } from './mixins'

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

export class Query<TNode extends ObjectNode<any, any, any>> extends Disposable {
  public selection = new RootSelection(this.node)
  public cache = new Cache()
  public accessor = new RootAccessor(this.selection, this.cache)
  public astBuilder: ASTBuilder
  public batcher: QueryBatcher

  public data = this.accessor.data
  public middleware = new MiddlewareEngine()

  public name?: string

  constructor(
    protected node: TNode,
    protected fetchQuery: QueryFetcher,
    { name }: IQueryOptions = {}
  ) {
    super()

    this.name = name

    this.astBuilder = new ASTBuilder(name)
    this.batcher = new QueryBatcher(
      selections => this.fetchSelections(selections)!
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

  protected fetchSelections(selections: Selection<any>[]) {
    const query = this.astBuilder.buildDocument(...selections)
    if (!query) return

    const responsePromise = (async () => {
      const response = await this.fetchQuery(query)

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
              const dataPropMatch = dataProp.match(/^(.+)__(\d)$/)
              if (!dataPropMatch) {
                console.error(
                  `Couldn't locate selection ${accessor.path}.${dataProp}`
                )
                return
              }
              const [_, fieldName, alias] = dataPropMatch

              console.error(
                `Couldn't locate selection ${
                  accessor.path
                }.${fieldName} [alias=${alias}]`
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
        this.cache.update(accessor, data)

        if (accessor.node instanceof FieldsNode) {
          recurseFieldsAccessor(accessor, data)
        } else if (accessor.node instanceof ArrayNode) {
          recurseArrayAccessor(accessor, data)
        }
      }

      recurseAccessor(this.accessor, response!.data)

      return response
    })()

    this.middleware.all.onFetch(query, responsePromise, selections)

    return responsePromise
  }

  public dispose() {
    super.dispose()
    this.batcher.dispose()

    this.middleware.all.dispose()
  }
}
