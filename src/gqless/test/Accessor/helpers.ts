import {
  RootSelection,
  Scheduler,
  RootAccessor,
  SelectionFetcher,
} from 'gqless'
import { schema, Query } from 'testing'

export const create = (fetchSelections: SelectionFetcher = () => {}) => {
  const selection = new RootSelection(schema.Query)
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
