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
import { Scheduler } from './Scheduler'
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

export type ProxyInterceptor = (
  target: unknown,
  prop: string | symbol
) => unknown

// @ts-ignore
export class GraphQL<TData = any> extends Disposable {
  public middleware = new MiddlewareEngine()
  public astBuilder = new ASTBuilder()
  public scheduler = new Scheduler(
    this.middleware,
    (selections, name) => this.fetchSelections(selections, name)!
  )
  public cache = new Cache()

  public selection = new RootSelection(this.node)
  public accessor = new RootAccessor(this.selection, this.cache, this.scheduler)

  public query: TData = this.accessor.data

  constructor(protected node: ObjectNode, protected fetchQuery: QueryFetcher) {
    super()

    this.middleware.add(...defaultMiddleware)

    this.selection.onSelect(selection => {
      this.middleware.all.onSelect(selection)
      this.scheduler.stage(selection)
    })

    this.selection.onUnselect(selection => {
      this.middleware.all.onUnselect(selection)
      this.scheduler.unstage(selection)
    })

    // this.selectionRoot.onSelectUpdate(selection => {
    //   this.middleware.all.onSelectUpdate(selection)
    //   this.batcher.stage(selection)
    // })
  }

  protected fetchSelections(selections: Selection<any>[], queryName?: string) {
    const result = this.astBuilder.buildDocument(queryName, ...selections)
    if (!result) return

    const responsePromise = (async () => {
      const response = await this.fetchQuery(result.doc)

      const recurseFieldsAccessor = (
        accessor: Accessor<Selection<ObjectNode | InterfaceNode | UnionNode>>,
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

    this.middleware.all.onFetch(
      result.doc,
      responsePromise,
      queryName,
      selections
    )

    return responsePromise
  }

  public dispose() {
    super.dispose()
    this.scheduler.dispose()

    this.middleware.all.dispose()
  }
}
