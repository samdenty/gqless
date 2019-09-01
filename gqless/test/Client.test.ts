import { createGraphQL } from '@internal/fixtures'
import { Client, Variable } from 'gqless'

jest.useFakeTimers()

const commitFetched = async (client: Client) => {
  const { commit } = client.scheduler
  jest.runOnlyPendingTimers()
  await commit.onFetched
}

it('fetches values', async () => {
  const client = createGraphQL()

  client.query.string
  client.query.arrayOfString[0]
  client.query.arrayOfObjects.forEach(object => {
    object.string
  })

  await commitFetched(client)

  expect(client.query.string).toMatchSnapshot()
  expect(client.query.arrayOfString).toMatchSnapshot()
  expect(client.query.arrayOfObjects[0].string).toMatchSnapshot()

  expect(client.cache.toJSON()).toMatchSnapshot()

  expect(client.scheduler.commit.selections.size).toEqual(0)
})

it(`shares cache for arguments with/without variables`, async () => {
  const client = createGraphQL()

  const object = client.query.arrayOfObjects({ string: 'test' })[0]
  object.string

  await commitFetched(client)

  expect(
    client.query.arrayOfObjects({ string: 'test' })[0].string
  ).toMatchSnapshot()

  expect(
    client.query.arrayOfObjects({ string: new Variable('test') })[0].string
  ).toMatchSnapshot()

  expect(client.cache.toJSON()).toMatchSnapshot()

  expect(client.scheduler.commit.selections.size).toEqual(0)
})
