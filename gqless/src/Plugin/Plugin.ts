import { DocumentNode } from 'graphql'

import { QueryResponse } from '../Client'
import { Query } from '../Scheduler'
import { Selection } from '../Selection'

export interface Plugin {
  // Called each time a new selection is created
  onSelect?(selection: Selection<any>): void

  // Called each time a selection is destroyed
  onUnselect?(selection: Selection<any>): void

  onCommit?(data: {
    selections: Selection[]
    stacks: Query[][]
    stackQueries: Query[]
    queries: Map<Query | undefined, Selection[]>
  }): void

  onFetch?(
    selections: Selection<any>[],
    response: Promise<QueryResponse>,
    variables: Record<string, any> | undefined,
    queryAst: DocumentNode,
    queryName: string | undefined
  ): void

  dispose?(): void
}

export type PluginMethod<K extends keyof Plugin> = Exclude<Plugin[K], undefined>
