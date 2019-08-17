import { GraphQL, QueryFetcher } from 'gqless'
import { print } from 'graphql/language/printer'

import { Query, schema } from './generated'

const endpoint = `http://${location.hostname}:9002/graphql`

export const fetchQuery: QueryFetcher = async query => {
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

export const graphql = new GraphQL<Query>(schema.Query, fetchQuery)

export const query = graphql.query
