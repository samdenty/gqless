import { types as t } from '@babel/core'
import { preload } from '../setup'

it('works', () => {
  const code = preload({
    a: `
      export default () => {}
    `,
  })

  expect(code).toMatchSnapshot()
})

it('supports destructuring', () => {
  const files = {
    a: `
      export default ({ user }) => {
        user.name
      }
    `,
  }

  expect(preload(files, 'props')).toMatchSnapshot()
})

it('supports filtering', () => {
  const files = {
    a: `
      export default user => {
        user.a.b
        user.a.c
        user.b
      }
    `,
  }

  expect(preload(files)).toMatchSnapshot()
  expect(preload(files, '{a:{b}}')).toMatchSnapshot()
  expect(preload(files, '{a}')).toMatchSnapshot()
})

describe('resolves imports >', () => {
  const preloadImp = (source: string) =>
    preload(
      {
        a: source,
        b: `
            export const b = u => u.n
            export default b
          `,
      },
      'props'
    )

  it('import x', () => {
    expect(
      preloadImp(`
        import x from 'b'
        export default x
      `)
    ).toMatchSnapshot()
  })

  it('import {x}', () => {
    expect(
      preloadImp(`
        import { b as _ } from 'b'
        export default _
      `)
    ).toMatchSnapshot()
  })

  it('import * as x', () => {
    expect(
      preloadImp(`
        import * as b from 'b'
        export default b.default
      `)
    ).toMatchSnapshot()
  })
})
