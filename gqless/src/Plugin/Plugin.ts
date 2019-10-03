import { QueryResponse } from '../Client'
import { Query } from '../Scheduler'
import { Selection } from '../Selection'
import { Accessor } from '../Accessor'

export interface Plugin {
  // Called each time a new selection is created
  onSelect?(selection: Selection<any>): void

  // Called each time a selection is destroyed
  onUnselect?(selection: Selection<any>): void

  onCommit?(data: {
    accessors: Accessor[]
    stacks: Query[][]
    stackQueries: Query[]
    queries: Map<Query | undefined, Accessor[]>
  }): void

  onFetch?(
    accessors: Accessor[],
    response: Promise<QueryResponse>,
    variables: Record<string, any> | undefined,
    query: string,
    queryName: string | undefined
  ): void

  dispose?(): void
}

export type PluginMethod<K extends keyof Plugin> = Exclude<Plugin[K], undefined>
