import { NodePath, types as t } from '@babel/core'
import { evaluate } from './evaluate'
import { Context } from './Context'

export const evalAsString = (path: NodePath, context?: Context) =>
  String(evaluate(path, context))

export const evalProperty = (
  path: NodePath<t.ObjectProperty>,
  context?: Context
) => {
  if (path.node.computed) {
    return evalAsString(path.get('key') as NodePath, context)
  }

  return (path.node.key as t.Identifier).name
}
