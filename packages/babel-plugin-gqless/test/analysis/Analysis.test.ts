import { fileAnalysis } from '../setup'
import { FunctionAnalysis, FileAnalysis } from '../../src/analysis'

describe('resolves exports >', () => {
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

describe('resolves imports >', () => {
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

describe('resolves re-exports >', () => {
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
