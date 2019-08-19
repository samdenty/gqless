import { Plugins, Query, RootSelection, Scheduler } from '../src'
import * as demoSchema from './data'

jest.useFakeTimers()

const root = new RootSelection(demoSchema.Query)
const testQuery = new Query('TestQuery')

it('schedules selections with stacks', () => {
  const scheduler = new Scheduler((selections, queryName) => {
    expect(selections).toEqual([root])
    expect(queryName).toMatchInlineSnapshot(`"TestQuery"`)
  })

  scheduler.beginQuery(testQuery)
  scheduler.commit.stage(root)
  scheduler.endQuery(testQuery)
  expect(scheduler.stack).toEqual([])

  expect(root.isFetching).toBeTruthy()

  jest.runOnlyPendingTimers()
})

it('unstages selections', () => {
  const callback = jest.fn()
  const scheduler = new Scheduler(callback)

  const unstage = scheduler.commit.stage(root)
  unstage()

  jest.runOnlyPendingTimers()

  expect(callback).not.toBeCalled()
})

it('calls plugin methods', () => {
  const plugins = new Plugins()
  const onCommit = jest.fn()
  plugins.add({ onCommit })

  const scheduler = new Scheduler(() => {}, plugins)

  scheduler.commit.stage(root)

  jest.runOnlyPendingTimers()

  expect(onCommit).toBeCalled()
})
