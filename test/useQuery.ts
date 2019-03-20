import { print } from 'graphql'
import { IMockedSchema } from '.'
import { useQuery } from '../src/React'
import { IQueryOptions, Schema } from '../src'
import { executeQuery } from './graphql-faker'

const schema: Schema = require('./schema.json')

export const useTestQuery = (options: Partial<IQueryOptions> = {}) => {
  const query = useQuery<IMockedSchema>({
    schema,
    fetchQuery(query) {
      expect(print(query)).toMatchSnapshot()

      return executeQuery(query)
    },
    ...options,
  })

  return query
}

export const queryComponent = <T, T2>(
  component: (props: T) => T2,
  done: Function
) => (props: T): T2 => {
  const value = component(props)
  if (value) done()

  return value
}
