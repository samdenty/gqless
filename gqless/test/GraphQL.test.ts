import { createGraphQL } from 'testing'
import { GraphQL, Variable } from 'gqless'

jest.useFakeTimers()

const commitFetched = async (graphql: GraphQL) => {
  const { commit } = graphql.scheduler
  jest.runOnlyPendingTimers()
  await commit.onFetched
}

it('fetches values', async () => {
  const graphql = createGraphQL()

  graphql.query.string
  graphql.query.arrayOfString[0]
  graphql.query.arrayOfObjects.forEach(object => {
    object.string
  })

  await commitFetched(graphql)

  expect(graphql.query.string).toMatchSnapshot()
  expect(graphql.query.arrayOfString).toMatchSnapshot()
  expect(graphql.query.arrayOfObjects[0].string).toMatchSnapshot()

  expect(graphql.cache.toJSON()).toMatchSnapshot()

  expect(graphql.scheduler.commit.selections.size).toEqual(0)
})

it(`shares cache for arguments with/without variables`, async () => {
  const graphql = createGraphQL()

  const object = graphql.query.arrayOfObjects({ string: 'test' })[0]
  object.string

  await commitFetched(graphql)

  expect(
    graphql.query.arrayOfObjects({ string: 'test' })[0].string
  ).toMatchSnapshot()

  expect(
    graphql.query.arrayOfObjects({ string: new Variable('test') })[0].string
  ).toMatchSnapshot()

  expect(graphql.cache.toJSON()).toMatchSnapshot()

  expect(graphql.scheduler.commit.selections.size).toEqual(0)
})
