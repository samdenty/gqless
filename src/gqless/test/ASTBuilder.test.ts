import { print } from 'graphql/language/printer'

import { ASTBuilder, FieldSelection, NodeContainer, ObjectNode, RootSelection, Selection, Variable } from '../src'
import { Query } from './data'

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
  const root = new RootSelection(Query)
  f(f(root, 'query'), 'scalar')
  f(root, 'scalar')
  f(f(root, 'object'), 'scalar')
  f(f(root, 'arrayOfObjects'), 'scalar')
  f(root, 'arrayOfScalar')

  expect(buildQuery(root)).toMatchInlineSnapshot(`
                                "query queryName {
                                  __typename
                                  query {
                                    __typename
                                    scalar
                                  }
                                  scalar
                                  object {
                                    __typename
                                    scalar
                                  }
                                  arrayOfObjects {
                                    __typename
                                    scalar
                                  }
                                  arrayOfScalar
                                }
                                "
                `)
})

it(`works with arguments`, () => {
  expect(
    buildQuery(
      f(
        f(new RootSelection(Query), 'arrayOfObjects', {
          scalar: 10,
          input: { scalar: 20 },
        }),
        'scalar'
      )
    )
  ).toMatchInlineSnapshot(`
        "query queryName {
          __typename
          arrayOfObjects(scalar: 10, input: {scalar: 20}) {
            __typename
            scalar
          }
        }
        "
    `)
})

it(`works with variables`, () => {
  expect(
    buildQuery(
      f(
        f(new RootSelection(Query), 'arrayOfObjects', {
          scalar: new Variable(10, { name: 'var' }),
          input: new Variable({ scalar: 10 }, { name: 'var' }),
        }),
        'scalar'
      )
    )
  ).toMatchInlineSnapshot(`
    Object {
      "query": "query queryName($var_1: ScalarNode, $var: Input) {
      __typename
      arrayOfObjects(scalar: $var_1, input: $var) {
        __typename
        scalar
      }
    }
    ",
      "variables": Object {
        "var": Object {
          "scalar": 10,
        },
        "var_1": 10,
      },
    }
  `)
})

it(`combines selections correctly`, () => {
  const root = new RootSelection(Query)
  const queryScalar = f(root, 'scalar')
  const queryObject = f(root, 'object')
  const queryObjectScalar = f(queryObject, 'scalar')
  const queryArrayOfScalar = f(root, 'arrayOfScalar')
  const queryArrayOfObjects = f(root, 'arrayOfObjects')
  const queryArrayOfObjectsScalar = f(queryArrayOfObjects, 'scalar')

  expect(buildQuery(queryScalar, queryObjectScalar)).toMatchInlineSnapshot(`
                                            "query queryName {
                                              __typename
                                              scalar
                                              object {
                                                __typename
                                                scalar
                                              }
                                            }
                                            "
                      `)

  expect(
    buildQuery(
      queryArrayOfScalar,
      queryArrayOfObjects,
      queryArrayOfObjectsScalar
    )
  ).toMatchInlineSnapshot(`
                                        "query queryName {
                                          __typename
                                          arrayOfScalar
                                          arrayOfObjects {
                                            __typename
                                            scalar
                                          }
                                        }
                                        "
                    `)
})

it(`handles duplicate fields`, () => {
  const root = new RootSelection(Query)

  f(root, 'scalar')
  f(root, 'scalar')

  f(f(root, 'arrayOfObjects'), 'scalar')
  const arrayOfObjects = f(root, 'arrayOfObjects')
  f(arrayOfObjects, 'scalar')
  f(arrayOfObjects, 'scalar')

  f(root, 'arrayOfScalar')
  f(root, 'arrayOfScalar')

  expect(buildQuery(root)).toMatchInlineSnapshot(`
                        "query queryName {
                          __typename
                          scalar
                          scalar__1: scalar
                          arrayOfObjects {
                            __typename
                            scalar
                          }
                          arrayOfObjects__1: arrayOfObjects {
                            __typename
                            scalar
                            scalar__1: scalar
                          }
                          arrayOfScalar
                          arrayOfScalar__1: arrayOfScalar
                        }
                        "
            `)
})
