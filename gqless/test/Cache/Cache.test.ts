import { Cache, Value, merge, StaticExtension, GET_KEY } from 'gqless'
import { schema } from '@internal/fixtures'

let cache: Cache
beforeEach(() => {
  cache = new Cache(schema.Query)
})

it('records instances', () => {
  const value = new Value(schema.String)
  const value2 = new Value(schema.String)

  expect(cache._entries.size).toBe(1)

  cache._rootValue.set('a', value)
  expect(cache._entries.size).toBe(2)
  const entry = cache._entries.get(value.node)!
  expect(entry._instances.has(value)).toBeTruthy()

  cache._rootValue.set('a', value2)
  expect(entry._instances.has(value)).toBeFalsy()
  expect(entry._instances.has(value2)).toBeTruthy()
})

it('supports matching', () => {
  const aValue = new Value(schema.String, 'test-a')
  const bValue = new Value(schema.String, 'test-b')

  cache._rootValue.set('a', aValue)
  cache._rootValue.set('b', bValue)

  const stringEntry = cache._entries.get(schema.String)!

  expect(stringEntry._match(/test-/)!.value).toBe(aValue)
  expect(stringEntry._match(/b/)!.value).toBe(bValue)
})

it('supports merging', () => {
  merge(cache, cache._rootValue, { object: { int: 1 } })

  expect(cache.toJSON().data).toMatchInlineSnapshot(`
    Object {
      "__typename": "Query",
      "object": Object {
        "__typename": "Object",
        "int": 1,
      },
    }
  `)

  merge(cache, cache._rootValue, { object: { string: 'test' } })

  expect(cache.toJSON().data).toMatchInlineSnapshot(`
    Object {
      "__typename": "Query",
      "object": Object {
        "__typename": "Object",
        "int": 1,
        "string": "test",
      },
    }
  `)

  merge(cache, cache._rootValue, { object: null })

  expect(cache.toJSON().data).toMatchInlineSnapshot(`
    Object {
      "__typename": "Query",
      "object": null,
    }
  `)
})

it('supports keys', () => {
  const queryExtensions = [
    new StaticExtension(undefined, schema.Query, {
      object: {
        [GET_KEY]: (obj: any) => obj.int,
      },
      object2: {
        [GET_KEY]: (obj: any) => obj.int,
      },
    }),
  ]

  merge(
    cache,
    cache._rootValue,
    { object: { int: 1, string: 'a' } },
    queryExtensions
  )

  const objectKey = cache._entries.get(schema.Object)!
  const keyedValue = objectKey._getByKey(1)!

  expect(keyedValue.toJSON()).toMatchInlineSnapshot(`
    Object {
      "__typename": "Object",
      "int": 1,
      "string": "a",
    }
  `)

  merge(
    cache,
    cache._rootValue,
    { object2: { int: 1, string2: 'b' } },
    queryExtensions
  )

  expect(cache._rootValue.get('object')).toBe(cache._rootValue.get('object2'))

  expect(keyedValue.toJSON()).toMatchInlineSnapshot(`
    Object {
      "__typename": "Object",
      "int": 1,
      "string": "a",
      "string2": "b",
    }
  `)

  expect(cache.toJSON()).toMatchSnapshot()
})
