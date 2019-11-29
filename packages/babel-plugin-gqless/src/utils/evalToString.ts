import { types as t, NodePath } from '@babel/core'

export const evalToString = (path: NodePath): string | void => {
  if (t.isIdentifier(path.node)) {
    return path.node.name
  }

  if (t.isStringLiteral(path.node) || t.isNumericLiteral(path.node)) {
    return String(path.node.value)
  }

  // TODO: Support for template literals, binaryExpressions etc.
}
