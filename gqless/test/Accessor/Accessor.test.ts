import { Variable } from 'gqless'
import { snapshotAccessor } from './helpers'

jest.useFakeTimers()

it('creates and schedules selections', () => {
  snapshotAccessor(data => {
    data.string
    data.object
    data.object.string
    data.arrayOfObjects.map((o: any) => o)
    data.arrayOfObjects[1].string
    data.arrayOfString
  })
})

it('supports arguments', () => {
  snapshotAccessor(data => {
    data.arrayOfObjects({ string: 'test2' })
    data.arrayOfObjects({ string: 'test3' })[0]
    data.arrayOfObjects({ string: 'test2' })[0].string
    data.arrayOfObjects({ input: new Variable({ string: 'test1' }) })
  })
})

it('supports extensions', () => {
  snapshotAccessor(data => {
    expect(data.object.newPropertyFunction).toMatchInlineSnapshot(`[Function]`)
    expect(data.object.newPropertyNumber).toMatchInlineSnapshot(`1234`)

    expect(data.object.overriddenInt).toMatchInlineSnapshot(`1234`)
    expect(data.object.overriddenString).toMatchInlineSnapshot(
      `"overridden_null"`
    )

    expect(data.object.queryObjectNewProperty).toMatchInlineSnapshot(`1234`)

    expect(data.arrayOfObjects.newArrayProperty).toMatchInlineSnapshot(`1234`)
    expect(data.arrayOfObjects[0].newIndexProperty).toMatchInlineSnapshot(
      `1234`
    )
    expect(data.arrayOfObjects[0].overriddenString).toMatchInlineSnapshot(
      `"arrayOfObjectsIndex"`
    )
  })
})
