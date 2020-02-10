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
    it('import {x}', () => {
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

    it('import x', () => {
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

    it('import * as x', () => {
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
    it('export {x} from', () => {
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

    it('export * from', () => {
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

    it('export x from', () => {
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

    it('export * as x from', () => {
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
  it('with recursive de-structuring', () => {
    const analysis = fileAnalysis({
      a: `
        const { b } = { b: { a: () => {} } }

        export const { a } = b
      `,
    })

    expect(analysis.getExport('a')).toBeInstanceOf(FunctionAnalysis)
  })

  it('with object de-structuring', () => {
    const analysis = fileAnalysis({
      a: `
        const n = 'n'
        const fn = () => {}

        export const { ['f'+n]: a } = { fn }
      `,
    })

    expect(analysis.getExport('a')).toBeInstanceOf(FunctionAnalysis)
  })

  it('with array de-structuring', () => {
    const analysis = fileAnalysis({
      a: `
        export const [, a] = [, () => {}]
      `,
    })

    expect(analysis.getExport('a')).toBeInstanceOf(FunctionAnalysis)
  })
})

describe('scans', () => {
  it('arg destructuring', () => {
    const files = {
      a: `
        export default ({ user }) => {
          user.name
        }
      `,
    }

    expect(scan(files, 'props')).toMatchSnapshot()
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

    it('import x', () => {
      expect(
        scanImp(`
          import x from 'b'
          export default x
        `)
      ).toMatchSnapshot()
    })

    it('import {x}', () => {
      expect(
        scanImp(`
          import { b as _ } from 'b'
          export default _
        `)
      ).toMatchSnapshot()
    })

    it('import * as x', () => {
      expect(
        scanImp(`
          import * as b from 'b'
          export default b.default
        `)
      ).toMatchSnapshot()
    })
  })

  describe('function calls', () => {
    it('with object arguments', () => {
      const files = {
        a: `
          const a = ({ u }) => u.age
          export default u => {
            const { args } = { args: { u } }
            a(args)
            u.name
          }
        `,
      }

      expect(scan(files, 'props')).toMatchInlineSnapshot(`
        FunctionAnalysis (
          0 -> {
            age {}
            name {}
          }
        )
      `)
    })

    it('with multiple arguments', () => {
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
})
