import { getAccessor } from 'gqless'
import { create } from './helpers'

jest.useFakeTimers()

it(`throws when no accessors have been used`, () => {
  expect(() => {
    getAccessor(null)
  }).toThrowErrorMatchingSnapshot()
})

it('works with ObjectNode', () => {
  const { data } = create()

  expect(getAccessor(data.query)).toMatchInlineSnapshot(`Query.query`)
})

it('works with ArrayNode', () => {
  const { data } = create()

  expect(getAccessor(data.arrayOfString)).toMatchInlineSnapshot(
    `Query.arrayOfString`
  )

  expect(getAccessor(data.arrayOfString[0])).toMatchInlineSnapshot(
    `Query.arrayOfString.0`
  )
})

it('works with ScalarNode', () => {
  const { data } = create()

  expect(getAccessor(data.string)).toMatchInlineSnapshot(`Query.string`)
})

it(`throws for ScalarNode when values don't match`, () => {
  const { data } = create()

  expect(() => {
    const string = data.string
    data.object
    getAccessor(string)
  }).toThrowErrorMatchingSnapshot()
})

it(`throws for ScalarNode when microtask occurs before call`, () => {
  const { data } = create()

  expect(() => {
    const string = data.string

    jest.runOnlyPendingTimers()

    getAccessor(string)
  }).toThrowErrorMatchingSnapshot()
})
