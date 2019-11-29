import { types as t } from '@babel/core'
import { evalToString } from '../../src/utils'
import { path } from './utils'

const toString = (node: t.Node) => evalToString(path(node))

it('works with identifiers', () => {
  expect(toString(t.identifier('a'))).toBe('a')
})

it('works with literals', () => {
  expect(toString(t.stringLiteral('a'))).toBe('a')
  expect(toString(t.numericLiteral(9))).toBe('9')
})
