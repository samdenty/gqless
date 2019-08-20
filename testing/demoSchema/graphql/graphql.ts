import { GraphQL } from 'gqless'
import { schema, Query } from './generated'
import { fetchQuery } from '../fetchQuery'

export const createGraphQL = () => new GraphQL<Query>(schema.Query, fetchQuery)
