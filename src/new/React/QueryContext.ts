import { createContext } from 'react'
import { IQueryOptions } from '../Query'

export const QueryContext = createContext<Partial<IQueryOptions>>({})
export const QueryProvider = QueryContext.Provider
