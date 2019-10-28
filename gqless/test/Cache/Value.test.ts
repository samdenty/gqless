import { Value } from 'gqless'
import { schema } from '@internal/fixtures'

let value: Value
beforeEach(() => {
  value = new Value(schema.Query, {})
})

describe('emits onChange', () => {
  let onChange: any
  beforeEach(() => {
    onChange = jest.fn()
    value.onChange(onChange)
  })

  test('on update', () => {
    expect(onChange).not.toBeCalled()
    value.data = null
    expect(onChange).toBeCalledWith({})
  })

  test('not on set', () => {
    expect(onChange).not.toBeCalled()

    value.set('a', value)

    expect(onChange).not.toBeCalled()
  })
})

describe('emits onSet', () => {
  let onSet: any
  beforeEach(() => {
    onSet = jest.fn()
    value.onSet(onSet)
  })

  test('on set', () => {
    expect(onSet).not.toBeCalled()

    value.set('a', value)
    expect(onSet).toBeCalledWith('a', value)
    value.set('a', value)
    expect(onSet).toBeCalledTimes(1)
  })

  test('on update', () => {
    expect(onSet).not.toBeCalled()

    value.data = { a: value }
    expect(onSet).toBeCalledWith('a', value)
    value.data = { a: value, b: value }

    expect(onSet).toBeCalledWith('b', value)
    expect(onSet).toBeCalledTimes(2)
  })
})

test('handles references', () => {
  const onReference = jest.fn()
  const onUnreference = jest.fn()
  value.onReference(onReference)
  value.onUnreference(onUnreference)

  const object = new Value(schema.Object)

  value.set('a', object)
  value.set('b', object)

  expect(onReference).toBeCalledTimes(1)
  expect(onReference).toBeCalledWith(object)
  expect(value.references.keys()).toContain(object)

  value.set('a', value)
  expect(onUnreference).not.toBeCalled()
  value.set('b', value)

  expect(onUnreference).toBeCalledWith(object)
})
