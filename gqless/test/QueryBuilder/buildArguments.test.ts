import {
  buildArguments,
  Formatter,
  Variable,
  Arguments,
  ArgumentsField,
  ArrayNode,
} from 'gqless'
import { schema } from '@internal/fixtures'

it('works with normal objects', () => {
  expect(
    buildArguments(new Formatter(), { a: 1, b: [{ a: 'test' }] })
  ).toMatchInlineSnapshot(`"a: 1, b: [{ a: \\"test\\" }]"`)

  expect(
    buildArguments(new Formatter({ prettify: false }), {
      a: 1,
      b: [{ a: 'test' }],
    })
  ).toMatchInlineSnapshot(`"a:1,b:[{a:\\"test\\"}]"`)
})

it('works with variables', () => {
  const variable = new Variable('test', { node: schema.String })

  expect(
    buildArguments(new Formatter({ variables: true }), { test: variable })
  ).toMatchInlineSnapshot(`"test: $test"`)

  expect(
    buildArguments(new Formatter({ variables: true, prettify: false }), {
      test: variable,
    })
  ).toMatchInlineSnapshot(`"test:$v"`)

  expect(
    buildArguments(new Formatter({ variables: true }), {
      user: { login: variable },
    })
  ).toMatchInlineSnapshot(`"user: { login: $userLogin }"`)

  expect(
    buildArguments(new Formatter(), {
      user: { login: variable },
    })
  ).toMatchInlineSnapshot(`"user: { login: \\"test\\" }"`)
})

it('uses node to output valid syntax', () => {
  expect(
    buildArguments(
      new Formatter(),
      { a: 'EnumOne', b: ['EnumTwo'] },
      {
        node: new Arguments({
          a: new ArgumentsField(schema.Enum),
          b: new ArgumentsField(new ArrayNode(schema.Enum)),
        }),
      }
    )
  ).toMatchInlineSnapshot(`"a: EnumOne, b: [EnumTwo]"`)

  expect(
    buildArguments(
      new Formatter(),
      { a: [{ a: 100 }] },
      {
        node: new Arguments({
          a: new ArgumentsField(schema.String),
        }),
      }
    )
  ).toMatchInlineSnapshot(`"a: \\"[{\\\\\\"a\\\\\\":100}]\\""`)
})
