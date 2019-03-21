import { Query, Schema } from '../src'
import { executeQuery } from './graphql-faker'
import { IMockedSchema } from './IMockedSchema'

export const schema: Schema = require('./schema.json')

export const query = new Query<IMockedSchema>({
  schema,
  fetchQuery(query) {
    return executeQuery(query)
  },
})

query.data.user.name
query.data.getUser.name
query.data.getUser.age
query.data.user.age
