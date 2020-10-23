import { RootAccessor, Accessor } from './Accessor'
import { Cache } from './Cache'
import { ObjectNode } from './Node'
import { Plugins } from './Plugin'
import { Scheduler } from './Scheduler'
import { Selection } from './Selection'
import { Disposable } from './utils'
import { buildQuery, Formatter } from './QueryBuilder'

export type QueryResponse<Data = any> = { data: Data; errors: any }

export type QueryFetcher = (
  query: string,
  variables?: Record<string, any>
) => Promise<QueryResponse> | QueryResponse

export type ClientOptions = {
  prettifyQueries?: boolean
}

// @ts-ignore
export class Client<TData = any> extends Disposable {
  public plugins = new Plugins()
  public formatter: Formatter

  public scheduler = new Scheduler(
    (accessors, name) => this.fetchAccessors(accessors, name)!,
    this.plugins
  )
  public cache = new Cache(this.node)

  public selection = new Selection(this.node)
  public accessor = new RootAccessor(this.selection, this.scheduler, this.cache)

  public query = this.accessor.data as TData

  constructor(
    protected node: ObjectNode,
    protected fetchQuery: QueryFetcher,
    { prettifyQueries }: ClientOptions = {}
  ) {
    super()

    this.formatter = new Formatter({
      prettify: prettifyQueries,
      fragments: 'auto',
      variables: true,
    })
    this.selection.onSelect.listen(selection => {
      this.plugins.all.onSelect(selection)
    })

    this.selection.onUnselect.listen(selection => {
      this.plugins.all.onUnselect(selection)
    })
  }

  protected fetchAccessors(accessors: Accessor[], queryName?: string) {
    const result = buildQuery(
      this.formatter,
      queryName,
      ...accessors.map(accessor => accessor.selectionPath)
    )

    if (!result) return

    const responsePromise = (async () => {
      const response = await this.fetchQuery(result.query, result.variables)
      result.rootTree.resolveAliases(response.data)
      this.cache.merge(this.accessor, response.data)
      return response
    })()

    this.plugins.all.onFetch(
      accessors,
      responsePromise,
      result.variables,
      result.query,
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
