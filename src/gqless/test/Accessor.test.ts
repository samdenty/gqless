import { RootAccessor, RootSelection, Scheduler, SelectionFetcher, Variable } from '../src'
import { Query } from './data'

jest.useFakeTimers()

const create = (fetchSelections: SelectionFetcher) => {
  const selection = new RootSelection(Query)
  const scheduler = new Scheduler(fetchSelections)
  const accessor = new RootAccessor(selection, scheduler)
  return { selection, scheduler, accessor }
}

const snapshotAccessor = (getMatches: (data: any) => void) => {
  const fetchSelections = jest.fn()
  const instance = create(fetchSelections)
  getMatches(instance.accessor.data)

  jest.runOnlyPendingTimers()

  expect(fetchSelections).toBeCalled()
  expect(instance.selection).toMatchSnapshot('selections')
  expect(instance.accessor).toMatchSnapshot('accessors')

  return instance
}

it('creates and schedules selections', () => {
  snapshotAccessor(data => {
    data.scalar
    data.object
    data.object.scalar
    data.arrayOfObjects.map((o: any) => o)
    data.arrayOfObjects[1].scalar
    data.arrayOfScalar
  })
})

it('supports arguments', () => {
  snapshotAccessor(data => {
    data.arrayOfObjects({ scalar: 2 })
    data.arrayOfObjects({ scalar: 3 })[0]
    data.arrayOfObjects({ scalar: 2 })[0].scalar
    data.arrayOfObjects({ input: new Variable({ scalar: 1 }) })
  })
})
