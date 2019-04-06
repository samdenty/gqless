import { introspectionQuery } from './introspectionQuery'
import { introspectionToSchema } from './introspectionToSchema'
import { QueryFetcher } from '../../Query'

export const fetchSchema = async (fetchQuery: QueryFetcher) => {
  const { data } = await fetchQuery(introspectionQuery)

  return introspectionToSchema(data.__schema)
}
