import { Scheduler, RootAccessor, AccessorFetcher, Selection } from 'gqless'
import { schema, Query } from '@internal/fixtures'

export const create = (fetchSelections: AccessorFetcher = () => {}) => {
  const selection = new Selection(schema.Query)
  const scheduler = new Scheduler(fetchSelections)
  const accessor = new RootAccessor(selection, scheduler)
  return { selection, scheduler, accessor, data: accessor.data as Query }
}

export const snapshotAccessor = (getMatches: (data: Query) => void) => {
  const fetchSelections = jest.fn()
  const instance = create(fetchSelections)
  getMatches(instance.data as Query)

  jest.runOnlyPendingTimers()

  expect(fetchSelections).toBeCalled()
  expect(instance.selection).toMatchSnapshot('selections')
  expect(instance.accessor).toMatchSnapshot('accessors')

  return instance
}
