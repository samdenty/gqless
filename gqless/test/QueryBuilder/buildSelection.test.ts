import {
  buildSelections,
  Formatter,
  toTree,
  Selection,
  FieldSelection,
  Fragment,
} from '../../src'
import { schema } from '@internal/fixtures'

it('works', () => {
  const selection = new Selection(schema.Query)
  selection.add(new FieldSelection(schema.Query._fields.object))
  const tree = toTree([selection])

  expect(buildSelections(new Formatter(), tree)).toMatchInlineSnapshot(`
    "__typename
    object {
      __typename
    }"
  `)

  expect(
    buildSelections(new Formatter({ prettify: false }), tree)
  ).toMatchInlineSnapshot(`"__typename,object{__typename}"`)
})

it('works with arguments', () => {
  const selection = new Selection(schema.Query)
  selection.add(
    new FieldSelection(schema.Query._fields.arrayOfObjects, {
      string: 'test',
      input: {
        string: 'test2',
      },
    })
  )
  const tree = toTree([selection])

  expect(buildSelections(new Formatter(), tree)).toMatchInlineSnapshot(`
    "__typename
    arrayOfObjects(input: { string: \\"test2\\" }, string: \\"test\\") {
      __typename
    }"
  `)

  expect(
    buildSelections(new Formatter({ prettify: false }), tree)
  ).toMatchInlineSnapshot(
    `"__typename,arrayOfObjects(input:{string:\\"test2\\"},string:\\"test\\"){__typename}"`
  )
})

describe('works with fragments', () => {
  const selection = new Selection(schema.Query)
  const fragment = new Fragment(schema.Query)
  selection.add(fragment)
  fragment.add(new FieldSelection(schema.Query._fields.string))

  const tree = toTree([selection])

  expect(buildSelections(new Formatter({ fragments: 'auto' }), tree))
    .toMatchInlineSnapshot(`
      "__typename
      string"
    `)

  expect(
    buildSelections(new Formatter({ prettify: false }), tree)
  ).toMatchInlineSnapshot(`"__typename,string"`)

  it('and duplicated fragments', () => {
    const queryQuery = new FieldSelection(schema.Query._fields.query)
    queryQuery.add(fragment)
    selection.add(queryQuery)

    const duplicatedFragmentTree = toTree([selection])
    expect(
      buildSelections(
        new Formatter({ fragments: 'auto' }),
        duplicatedFragmentTree
      )
    ).toMatchInlineSnapshot(`
      "__typename
      ...QueryFragment
      query {
        ...QueryFragment
      }"
    `)

    expect(
      buildSelections(
        new Formatter({ prettify: false, fragments: 'auto' }),
        duplicatedFragmentTree
      )
    ).toMatchInlineSnapshot(
      `"__typename,...QueryFragment,query{...QueryFragment}"`
    )
  })
})
