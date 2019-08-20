import { print } from 'graphql/language/printer'

import {
  ASTBuilder,
  FieldSelection,
  NodeContainer,
  ObjectNode,
  RootSelection,
  Selection,
  Variable,
} from '../src'
import { schema } from 'testing'

const buildQuery = (...selections: Selection[]) => {
  const astBuilder = new ASTBuilder()

  const result = astBuilder.buildDocument('queryName', ...selections)
  if (!result) return null

  const query = print(result.doc)
  if (!result.variables) return query

  return { query, variables: result.variables }
}

const f = (selection: Selection, fieldName: string, args?: any) =>
  new FieldSelection(
    selection,
    ((selection.node instanceof NodeContainer
      ? selection.node.innerNode
      : selection.node) as ObjectNode).fields[fieldName],
    args
  )

it(`works with a basic query`, () => {
  const root = new RootSelection(schema.Query)
  f(f(root, 'query'), 'string')
  f(root, 'string')
  f(f(root, 'object'), 'string')
  f(f(root, 'arrayOfObjects'), 'string')
  f(root, 'arrayOfString')

  expect(buildQuery(root)).toMatchInlineSnapshot(`
                                        "query queryName {
                                          __typename
                                          query {
                                            __typename
                                            string
                                          }
                                          string
                                          object {
                                            __typename
                                            string
                                          }
                                          arrayOfObjects {
                                            __typename
                                            string
                                          }
                                          arrayOfString
                                        }
                                        "
                    `)
})

it(`works with arguments`, () => {
  expect(
    buildQuery(
      f(
        f(new RootSelection(schema.Query), 'arrayOfObjects', {
          string: 'test',
          input: { string: 'test2' },
        }),
        'string'
      )
    )
  ).toMatchInlineSnapshot(`
    "query queryName {
      __typename
      arrayOfObjects(string: \\"test\\", input: {string: \\"test2\\"}) {
        __typename
        string
      }
    }
    "
  `)
})

it(`works with variables`, () => {
  expect(
    buildQuery(
      f(
        f(new RootSelection(schema.Query), 'arrayOfObjects', {
          string: new Variable('test', { name: 'var' }),
          input: new Variable({ string: 'test2' }, { name: 'var' }),
        }),
        'string'
      )
    )
  ).toMatchInlineSnapshot(`
    Object {
      "query": "query queryName($var_1: String, $var: Input) {
      __typename
      arrayOfObjects(string: $var_1, input: $var) {
        __typename
        string
      }
    }
    ",
      "variables": Object {
        "var": Object {
          "string": "test2",
        },
        "var_1": "test",
      },
    }
  `)
})

it(`combines selections correctly`, () => {
  const root = new RootSelection(schema.Query)
  const queryString = f(root, 'string')
  const queryObject = f(root, 'object')
  const queryObjectString = f(queryObject, 'string')
  const queryArrayOfString = f(root, 'arrayOfString')
  const queryArrayOfObjects = f(root, 'arrayOfObjects')
  const queryArrayOfObjectsString = f(queryArrayOfObjects, 'string')

  expect(buildQuery(queryString, queryObjectString)).toMatchInlineSnapshot(`
                                                    "query queryName {
                                                      __typename
                                                      string
                                                      object {
                                                        __typename
                                                        string
                                                      }
                                                    }
                                                    "
                          `)

  expect(
    buildQuery(
      queryArrayOfString,
      queryArrayOfObjects,
      queryArrayOfObjectsString
    )
  ).toMatchInlineSnapshot(`
                                                "query queryName {
                                                  __typename
                                                  arrayOfString
                                                  arrayOfObjects {
                                                    __typename
                                                    string
                                                  }
                                                }
                                                "
                        `)
})

it(`handles duplicate fields`, () => {
  const root = new RootSelection(schema.Query)

  f(root, 'string')
  f(root, 'string')

  f(f(root, 'arrayOfObjects'), 'string')
  const arrayOfObjects = f(root, 'arrayOfObjects')
  f(arrayOfObjects, 'string')
  f(arrayOfObjects, 'string')

  f(root, 'arrayOfString')
  f(root, 'arrayOfString')

  expect(buildQuery(root)).toMatchInlineSnapshot(`
                                "query queryName {
                                  __typename
                                  string
                                  string__1: string
                                  arrayOfObjects {
                                    __typename
                                    string
                                  }
                                  arrayOfObjects__1: arrayOfObjects {
                                    __typename
                                    string
                                    string__1: string
                                  }
                                  arrayOfString
                                  arrayOfString__1: arrayOfString
                                }
                                "
                `)
})
