import {
  Query,
  Selection,
  Scheduler,
  RootAccessor,
  NetworkStatus,
} from 'gqless'
import { schema } from '@internal/fixtures'

jest.useFakeTimers()

const testQuery = new Query('TestQuery')

it('schedules selections with stacks', () => {
  const scheduler = new Scheduler((selections, queryName) => {
    expect(selections).toEqual([root])
    expect(queryName).toMatchInlineSnapshot(`"TestQuery"`)
  })

  const root = new RootAccessor(new Selection(schema.Query), scheduler)

  scheduler.pushStack$(testQuery)
  scheduler.commit$.stage$(root)
  scheduler.popStack$(testQuery)
  expect(scheduler.stack$).toEqual([])

  expect(root.status$ !== NetworkStatus.idle).toBeTruthy()

  jest.runOnlyPendingTimers()
})

it('unstages selections', () => {
  const callback = jest.fn()
  const scheduler = new Scheduler(callback)

  const root = new RootAccessor(new Selection(schema.Query), scheduler)

  const unstage = scheduler.commit$.stage$(root)
  unstage()

  jest.runOnlyPendingTimers()

  expect(callback).not.toBeCalled()
})

it('calls plugin methods', () => {
  const onCommit = jest.fn()

  const scheduler = new Scheduler(() => {})
  const root = new RootAccessor(new Selection(schema.Query), scheduler)

  scheduler.plugins$.add({ onCommit })

  scheduler.commit$.stage$(root)

  jest.runOnlyPendingTimers()

  expect(onCommit).toBeCalled()
})

it('emits onFetched when complete', async () => {
  const scheduler = new Scheduler(() => {})
  const root = new RootAccessor(new Selection(schema.Query), scheduler)

  const { commit$: commit } = scheduler
  commit.stage$(root)
  jest.runOnlyPendingTimers()

  await commit.onFetched$
})
