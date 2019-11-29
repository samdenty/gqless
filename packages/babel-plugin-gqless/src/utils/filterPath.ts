import { types as t, NodePath } from '@babel/core'
import { evalToString } from './evalToString'

export const filterPath = (
  filter: NodePath<t.Node>,
  test: NodePath<t.Node>
): boolean => {
  if (t.isObjectExpression(filter.node)) {
    const propToTest = evalToString(test)
    if (!propToTest) return true

    for (const prop of (filter as NodePath<t.ObjectExpression>).get(
      'properties'
    )) {
      if (t.isObjectProperty(prop.node)) {
        const key = prop.get('key') as NodePath
        if (evalToString(key) === propToTest) return true
      }
    }

    return false
  }

  return true
}
