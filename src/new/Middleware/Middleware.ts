import { DocumentNode } from 'graphql'
import { QueryResponse } from '../Query'
import { Selection } from '../Selection'
import { UScalarNode } from '../Node'

export type ScalarProxyHandler = (prop: string | symbol) => any
export type Middleware = {
  // Called each time a new selection is created
  onSelect?(selection: Selection<any>): void

  // Called each time a selection has changed
  onSelectUpdate?(selection: Selection<any>): void

  onFetch?(data: { selections: Selection<any>[]; query: DocumentNode }): void
  onFetched?(data: {
    selections: Selection<any>[]
    query: DocumentNode
    error?: any
    response?: QueryResponse
  }): void

  getScalarData?(
    selection: Selection<UScalarNode>,
    value: string | number | boolean | object
  ): any

  dispose?(): void
}
