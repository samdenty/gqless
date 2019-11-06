import { Variable } from 'gqless'

it(`doesn't allow setting to null, if non-nullable`, () => {
  expect(() => new Variable(null, { nullable: false })).toThrow()
  expect(() =>
    // @ts-ignore
    new Variable('', { nullable: false }).updateValue(null)
  ).toThrow()
})

it(`prevents conversion from nullable to non-nullable`, () => {
  const variable = new Variable(null, { nullable: true })

  expect(() => variable.updateNullable(false)).toThrow()
})
