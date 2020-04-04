import { scanImports } from './setup'

it('ignores unused imports', () => {
  expect(
    scanImports(`
      import * as a from 'mod'
      import b from 'mod'
      import c from 'mod'
      const d = require('mod')
    `)
  ).toMatchSnapshot()
})

describe('modules >', () => {
  test('namespace imports', () => {
    expect(
      scanImports(`
        import * as a from 'mod'
        a.b
      `)
    ).toMatchSnapshot()
  })

  test('default imports', () => {
    expect(
      scanImports(`
        import a from 'mod'
        a
      `)
    ).toMatchSnapshot()
  })

  test('named imports', () => {
    expect(
      scanImports(`
        import { a } from 'mod'
        a
      `)
    ).toMatchSnapshot()
  })
})

describe('commonjs >', () => {
  test('require destructure', () => {
    expect(
      scanImports(`
        const { a } = require('mod')
      `)
    ).toMatchSnapshot()
  })

  test('require property', () => {
    expect(
      scanImports(`
        const a = require('mod').a
      `)
    ).toMatchSnapshot()
  })
})
