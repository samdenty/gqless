import { createGraphQL } from '@internal/fixtures'
import { Client } from 'gqless'

jest.useFakeTimers()

const commitFetched = async (client: Client) => {
  const { commit } = client.scheduler
  jest.runOnlyPendingTimers()
  await commit.onFetched
}

it('uses not too much memory', async () => {
  const client = createGraphQL()
  client.query.string
  client.query.arrayOfString[0]
  client.query.arrayOfObjects.forEach(object => {
    object.string
  })
  await commitFetched(client)
  const used = process.memoryUsage().heapUsed / 1024 / 1024
  expect(used).toBeLessThan(150)
})
