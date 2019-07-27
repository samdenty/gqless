import { introspectionQuery } from './introspectionQuery'
import { introspectionToSchema } from './introspectionToSchema'
import { QueryFetcher } from 'gqless'

export type IFetchSchemaOptions = {
  includeInfo?: boolean
}

export const fetchSchema = async (
  fetchQuery: QueryFetcher,
  { includeInfo }: IFetchSchemaOptions = {}
) => {
  const { data } = await fetchQuery(introspectionQuery(includeInfo))

  return introspectionToSchema(data.__schema)
}
