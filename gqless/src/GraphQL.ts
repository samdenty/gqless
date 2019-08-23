import { DocumentNode } from 'graphql'

import { RootAccessor } from './Accessor'
import { ASTBuilder } from './ASTBuilder'
import { Cache } from './Cache'
import { ObjectNode } from './Node'
import { Plugins } from './Plugin'
import { Scheduler } from './Scheduler'
import { RootSelection, Selection } from './Selection'
import { Disposable } from './utils'

export type QueryResponse<Data = any> = { data: Data; errors: any }

export type QueryFetcher = (
  query: DocumentNode,
  variables?: Record<string, any>
) => Promise<QueryResponse> | QueryResponse

export type ProxyInterceptor = (
  target: unknown,
  prop: string | symbol
) => unknown

// @ts-ignore
export class GraphQL<TData = any> extends Disposable {
  public plugins = new Plugins()
  public astBuilder = new ASTBuilder()
  public scheduler = new Scheduler(
    (selections, name) => this.fetchSelections(selections, name)!,
    this.plugins
  )
  public cache = new Cache(this.node)

  public selection = new RootSelection(this.node)
  public accessor = new RootAccessor(this.selection, this.scheduler, this.cache)

  public query: TData = this.accessor.data

  constructor(protected node: ObjectNode, protected fetchQuery: QueryFetcher) {
    super()

    this.selection.onSelect(selection => {
      this.plugins.all.onSelect(selection)
      // this.scheduler.stage(selection)
    })

    this.selection.onUnselect(selection => {
      this.plugins.all.onUnselect(selection)
      this.scheduler.commit.unstage(selection)
    })
  }

  protected fetchSelections(selections: Selection<any>[], queryName?: string) {
    const result = this.astBuilder.buildDocument(queryName, ...selections)
    if (!result) return

    const responsePromise = (async () => {
      const response = await this.fetchQuery(result.doc, result.variables)

      this.cache.merge(this.accessor, response.data)

      return response
    })()

    this.plugins.all.onFetch(
      selections,
      responsePromise,
      result.variables,
      result.doc,
      queryName
    )

    return responsePromise
  }

  public dispose() {
    super.dispose()
    this.scheduler.dispose()

    this.plugins.all.dispose()
  }
}
