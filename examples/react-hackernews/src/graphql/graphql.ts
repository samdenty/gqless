import { GraphQL, QueryFetcher } from 'gqless'
import { Logger } from '@gqless/logger'
import { schema, GraphQLHubAPI } from './generated'
import { print } from 'graphql/language/printer'

const endpoint = 'https://www.graphqlhub.com/graphql'

const fetchQuery: QueryFetcher = async query => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: print(query),
    }),
    mode: 'cors',
  })

  if (!response.ok) {
    throw new Error(`Network error, received status code ${response.status}`)
  }

  const json = await response.json()

  return json
}

export const graphql = new GraphQL<GraphQLHubAPI>(
  schema.GraphQLHubAPI,
  fetchQuery
)
graphql.plugins.add(new Logger(graphql))

export const query = graphql.query
