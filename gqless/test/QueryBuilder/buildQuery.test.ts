import {
  Formatter,
  Selection,
  FieldSelection,
  buildQuery,
  Variable,
} from '../../src'
import { schema } from '@internal/fixtures'

it('works', () => {
  const selection = new Selection(schema.Query)
  selection.add(new FieldSelection(schema.Query.fields$.object))

  expect(buildQuery(new Formatter(), undefined, [selection]).query$)
    .toMatchInlineSnapshot(`
    "{
      object {
        __typename
      }
    }"
  `)
  expect(
    buildQuery(new Formatter({ prettify: false }), undefined, [selection])
      .query$
  ).toMatchInlineSnapshot(`"{object{__typename}}"`)
})

it('supports named queries', () => {
  const selection = new Selection(schema.Query)
  selection.add(new FieldSelection(schema.Query.fields$.object))

  expect(buildQuery(new Formatter(), 'Test', [selection]).query$)
    .toMatchInlineSnapshot(`
    "query Test {
      object {
        __typename
      }
    }"
  `)
  expect(
    buildQuery(new Formatter({ prettify: false }), 'Test', [selection]).query$
  ).toMatchInlineSnapshot(`"query Test{object{__typename}}"`)
})

it('supports variables', () => {
  const test = new Variable('test')
  const test2 = new Variable('test2')

  const selection = new Selection(schema.Query)
  selection.add(
    new FieldSelection(schema.Query.fields$.arrayOfObjects, {
      string: test,
      input: {
        string: test2,
      },
    })
  )

  expect(
    buildQuery(new Formatter({ variables: true }), undefined, [selection])
      .query$
  ).toMatchInlineSnapshot(`
    "query($arrayOfObjectsInputString: String!, $arrayOfObjectsString: String) {
      arrayOfObjects(input: { string: $arrayOfObjectsInputString }, string: $arrayOfObjectsString) {
        __typename
      }
    }"
  `)
  expect(
    buildQuery(new Formatter({ prettify: false, variables: true }), undefined, [
      selection,
    ]).query$
  ).toMatchInlineSnapshot(
    `"query($v:String!,$v2:String){arrayOfObjects(input:{string:$v},string:$v2){__typename}}"`
  )
})
