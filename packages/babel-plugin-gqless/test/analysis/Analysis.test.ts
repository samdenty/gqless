import { fileAnalysis, scan } from '../setup'
import { FunctionAnalysis, FileAnalysis } from '../../src/analysis'

describe('resolves', () => {
  describe('exports >', () => {
    test('export default', () => {
      const analysis = fileAnalysis({
        a: `
          export default () => {}
        `,
      })

      expect(analysis.getExport('default')).toBeInstanceOf(FunctionAnalysis)
    })

    test('export {x}', () => {
      const analysis = fileAnalysis({
        a: `
          const x = () => {}
          export { x }
        `,
      })

      expect(analysis.getExport('x')).toBeInstanceOf(FunctionAnalysis)
    })

    test('export const x', () => {
      const analysis = fileAnalysis({
        a: `
          export const a = () => {}
        `,
      })

      expect(analysis.getExport('a')).toBeInstanceOf(FunctionAnalysis)
    })
  })

  describe('imports >', () => {
    test('import {x}', () => {
      const analysis = fileAnalysis({
        a: `
          import { f as b } from 'b'
          export const f = b
        `,
        b: `
          export const f = () => {}
        `,
      })

      expect(analysis.getExport('f')).toBeInstanceOf(FunctionAnalysis)
    })

    test('import x', () => {
      const analysis = fileAnalysis({
        a: `
          import f from 'b'
          export const b = f
        `,
        b: `
          export default () => {}
        `,
      })

      expect(analysis.getExport('b')).toBeInstanceOf(FunctionAnalysis)
    })

    test('import * as x', () => {
      const analysis = fileAnalysis({
        a: `
          import * as b from 'b'
          export const f = b.f
        `,
        b: `
          export const f = () => {}
        `,
      })

      expect(analysis.getExport('f')).toBeInstanceOf(FunctionAnalysis)
    })
  })

  describe('re-exports >', () => {
    test('export {x} from', () => {
      const analysis = fileAnalysis({
        a: `
          export { f as x } from 'b'
        `,
        b: `
          export const f = () => {}
        `,
      })

      expect(analysis.getExport('x')).toBeInstanceOf(FunctionAnalysis)
    })

    test('export * from', () => {
      const analysis = fileAnalysis({
        a: `
          export * from 'b'
        `,
        b: `
          export const x = () => {}
        `,
      })

      expect(analysis.getExport('x')).toBeInstanceOf(FunctionAnalysis)
    })

    test('export x from', () => {
      const analysis = fileAnalysis({
        a: `
          export x from 'b'
        `,
        b: `
          export default () => {}
        `,
      })

      expect(analysis.getExport('x')).toBeInstanceOf(FunctionAnalysis)
    })

    test('export * as x from', () => {
      const analysis = fileAnalysis({
        a: `
          export * as x from 'b'
        `,
        b: `
          export const f = () => {}
        `,
      })

      expect(analysis.getExport('x')).toBeInstanceOf(FileAnalysis)
    })
  })
})

describe('evaluates values', () => {
  test('with recursive de-structuring', () => {
    const analysis = fileAnalysis({
      a: `
        const { b } = { b: { a: () => {} } }

        export const { a } = b
      `,
    })

    expect(analysis.getExport('a')).toBeInstanceOf(FunctionAnalysis)
  })

  test('with object de-structuring', () => {
    const analysis = fileAnalysis({
      a: `
        const n = 'n'
        const fn = () => {}

        export const { ['f'+n]: a } = { fn }
      `,
    })

    expect(analysis.getExport('a')).toBeInstanceOf(FunctionAnalysis)
  })

  test('with array de-structuring', () => {
    const analysis = fileAnalysis({
      a: `
        export const [, a] = [, () => {}]
      `,
    })

    expect(analysis.getExport('a')).toBeInstanceOf(FunctionAnalysis)
  })
})

describe('scans', () => {
  test('arg destructuring', () => {
    const files = {
      a: `
        export default ({ user }) => {
          user.name
        }
      `,
    }

    expect(scan(files, 'props')).toMatchSnapshot()
  })

  test('field variables', () => {
    const files = {
      a: `
        export default u => {
          u.avatarUrl({ size: 100 })
        }
      `,
    }

    expect(scan(files, 'props')).toMatchInlineSnapshot(`
      FunctionAnalysis (
        0 -> {
          avatarUrl({
            "size": 100
          }) {}
        }
      )
    `)
  })

  describe('imports >', () => {
    const scanImp = (source: string) =>
      scan(
        {
          a: source,
          b: `
              export const b = u => u.n
              export default b
            `,
        },
        'props'
      )

    test('import x', () => {
      expect(
        scanImp(`
          import x from 'b'
          export default x
        `)
      ).toMatchSnapshot()
    })

    test('import {x}', () => {
      expect(
        scanImp(`
          import { b as _ } from 'b'
          export default _
        `)
      ).toMatchSnapshot()
    })

    test('import * as x', () => {
      expect(
        scanImp(`
          import * as b from 'b'
          export default b.default
        `)
      ).toMatchSnapshot()
    })
  })

  describe('variables', () => {
    test('with destructuring', () => {
      const files = {
        a: `
          export default u => {
            const { a: { b, ...a }, ...o } = { a: u.a }

            o.a.b3
            a.b2
            b.c
          }
        `,
      }

      expect(scan(files, 'props')).toMatchSnapshot()
    })

    test('with spread', () => {
      const files = {
        a: `
            export default u => {
              const _u = { ...u }

              _u.a
            }
          `,
      }

      // expect(scan(files, 'props')).toMatchInlineSnapshot(`
      //   FunctionAnalysis (
      //     0 -> {
      //       a {}
      //     }
      //   )
      // `)
    })
  })

  describe('function calls', () => {
    test('with object arguments', () => {
      const files = {
        a: `
          const a = ({ u }) => u.age
          export default u => {
            a({ u })
            u.name
          }
        `,
      }

      expect(scan(files, 'props')).toMatchSnapshot()
    })

    test('with multiple arguments', () => {
      const files = {
        a: `
          const a = (a, b, c) => {
            a.a
            b.b
            c.c
          }

          export default u => {
            a(u, u, {})
            u.name
          }
        `,
      }

      expect(scan(files, 'props')).toMatchSnapshot()
    })
  })

  describe('array', () => {
    test('methods', () => {
      const files = {
        a: `
          export default u => {
            u.filter(u => u.a).map(u => u.b)
            u.forEach((u, i, _u) => {
              _u.x
              u.c
            })
            u.find(u => u.d).e
          }
        `,
      }

      expect(scan(files, 'props')).toMatchSnapshot()
    })

    test('for of', () => {
      const files = {
        a: `
          export default u => {
            for (const x of u) {
              x.a
            }

            let y
            for (y of u) {
              y.b
            }
          }
        `,
      }

      expect(scan(files, 'props')).toMatchSnapshot()
    })

    test('for loop', () => {
      const files = {
        a: `
          export default u => {
            for (let i = 0; i < u.length; i++) {
              u[i].a
            }
          }
        `,
      }

      expect(scan(files, 'props')).toMatchSnapshot()
    })
  })
})
