import { schema } from '@internal/fixtures'
import { Value } from 'gqless'
import { deepReference } from 'gqless/src/Cache/utils'

let rootValue: Value
let events: ReturnType<typeof deepReference>
beforeEach(() => {
  rootValue = new Value(schema.Query, {})
  events = deepReference(rootValue)
})

describe('emits correctly', () => {
  let onReference: any
  let onUnreference: any
  let value1: Value
  let value2: Value
  beforeEach(() => {
    onReference = jest.fn()
    onUnreference = jest.fn()
    value1 = new Value(schema.Object)
    value2 = new Value(schema.Object)

    events.onReference(onReference)
    events.onUnreference(onUnreference)
  })

  test('for root values', () => {
    rootValue.set('a', value1)
    rootValue.set('b', value1)
    expect(onReference).toBeCalledTimes(1)
    expect(onReference).toBeCalledWith(value1)

    // Unreferences
    rootValue.set('a', rootValue)
    expect(onUnreference).not.toBeCalled()

    rootValue.set('b', rootValue)
    expect(onUnreference).toBeCalledTimes(1)
    expect(onUnreference).toBeCalledWith(value1)
  })

  test('for child values', () => {
    rootValue.set('a', value1)
    onReference.mockClear()

    value1.set('a', value2)
    expect(onReference).toBeCalledTimes(1)
    expect(onReference).toBeCalledWith(value2)

    onReference.mockClear()
    rootValue.set('c', value1)
    expect(onReference).not.toBeCalled()

    // Unreferences
    rootValue.set('c', rootValue)
    expect(onUnreference).not.toBeCalled()

    value1.set('a', rootValue)
    expect(onUnreference).toBeCalledTimes(1)
    expect(onUnreference).toBeCalledWith(value2)
  })

  test('for existing references', () => {
    value1.set('a', value2)
    rootValue.set('a', value1)

    expect(onReference).toBeCalledTimes(2)
    expect(onReference).toBeCalledWith(value1)
    expect(onReference).toBeCalledWith(value2)
  })

  test('for unreferences', () => {
    value1.set('a', value2)
    rootValue.set('a', value1)

    expect(onReference).toBeCalledTimes(2)

    rootValue.set('a', rootValue)

    expect(onUnreference).toBeCalledTimes(1)
    expect(onUnreference).toBeCalledWith(value1)
  })
})
