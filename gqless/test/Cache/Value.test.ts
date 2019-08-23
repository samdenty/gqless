import { Value } from 'gqless'
import { schema } from 'testing'

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
    value.update(null)
    expect(onChange).toBeCalledWith({})
  })

  test('on set', () => {
    expect(onChange).not.toBeCalled()

    value.set('a', value)

    expect(onChange).toBeCalledWith({ a: value })
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
