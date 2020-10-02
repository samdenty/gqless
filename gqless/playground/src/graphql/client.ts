import { Client, QueryFetcher } from 'gqless'
import { schema, Query } from './schema'
import { Logger } from '@gqless/logger'

console.log(schema)

const endpoint = `http://${location.hostname}:9002/graphql`

export const fetchQuery: QueryFetcher = async (query, variables) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: 'cors',
  })

  if (!response.ok) {
    throw new Error(`Network error, received status code ${response.status}`)
  }

  const json = await response.json()

  return json
}

export const client = new Client<Query>(schema, fetchQuery)

new Logger(client)

export const query = client.query
