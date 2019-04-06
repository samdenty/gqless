import { createContext } from 'react'
import { QueryFetcher } from '../Query'
import { ObjectNode } from '../Node'

export interface IQueryContext {
  fetchQuery: QueryFetcher
  Query: ObjectNode<any, any, any>
}

export const QueryContext = createContext<IQueryContext>(null)
export const QueryProvider = QueryContext.Provider
