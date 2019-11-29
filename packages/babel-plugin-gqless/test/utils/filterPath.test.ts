import { NodePath } from '@babel/traverse'
import { types as t } from '@babel/core'
import { filterPath } from '../../src/utils'
import template from '@babel/template'
import { path } from './utils'

const filter = (filter: t.Node, test: t.Node) => {
  return filterPath(path(filter), path(test))
}

it('supports filtering by object property', () => {
  const object = template.expression.ast`{ user }`

  expect(filter(object, t.identifier('user'))).toBeTruthy()
  expect(filter(object, t.identifier('a'))).toBeFalsy()
})

it('defaults for unknown variables', () => {
  expect(filter(t.identifier('query'), t.identifier('user'))).toBeTruthy()
})
