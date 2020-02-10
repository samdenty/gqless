import { types as t, NodePath } from '@babel/core'
import { evalAsString, evaluate, evalProperty, Record } from './evaluate'

/**
 * Resolves a variable's path, given a pattern and value
 *
 * {['test']:a}  ,  {test:100}  , a
 * => Path(100)
 */
export const resolveRefInPattern = (
  pattern: NodePath<t.LVal>,
  value: NodePath,
  id: string
) => {
  // var { } =
  if (pattern.isObjectPattern()) {
    for (const prop of pattern.get('properties')) {
      // var { ...rest } =
      if (prop.isRestElement()) {
        if ((prop.node.argument as t.Identifier).name === id) {
          return value
        }
      }

      // var { prop } =
      else if (prop.isObjectProperty()) {
        const propPath = prop.get('value') as NodePath<t.LVal>
        const key = evalProperty(prop)
        if (key === undefined) continue

        const rec = evaluate(value)
        if (!(rec instanceof Record)) continue
        const propValue = rec.get(key)?.valuePath
        if (!propValue) continue

        const result = resolveRefInPattern(propPath, propValue as NodePath, id)
        if (result) return result
      }
    }
  }

  // var [ ] =
  if (pattern.isArrayPattern()) {
    for (const elem of pattern.get('elements')) {
      // var { ...rest } =
      if (elem.isRestElement()) {
        if ((elem.node.argument as t.Identifier).name === id) {
          return value
        }
      }

      const rec = evaluate(value)
      if (!(rec instanceof Record)) continue

      const indexValue = rec.get(elem.key)?.valuePath
      if (!indexValue) continue

      const result = resolveRefInPattern(elem, indexValue as NodePath, id)
      if (result) return result
    }
  }

  // var x =
  else if (pattern.isIdentifier()) {
    if (pattern.node.name === id) return value
  }
}
