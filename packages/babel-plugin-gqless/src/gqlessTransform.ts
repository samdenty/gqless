import { invariant } from '@gqless/utils'
import { Scope, NodePath } from '@babel/traverse'
import { types as t } from '@babel/core'
import { FileAnalysis, analyze } from './analysis'

export const gqlessTransform = (
  analysis: FileAnalysis,
  importName: string,
  path: NodePath
) => {
  switch (importName) {
    case 'preload': {
      recursePreload(analysis, path)
      break
    }
  }
}

const recursePreload = (analysis: FileAnalysis, callPath: NodePath) => {
  if (!t.isCallExpression(callPath.node)) return
  callPath.node.arguments.forEach(a => invariant(t.isExpression(a)))

  // Get the function to preload
  const preloadNode = callPath.node.arguments[0]
  invariant(preloadNode)
  const getName = (node: t.Node) => {
    if (t.isIdentifier(node)) return node.name
    if (t.isMemberExpression(node)) return getName(node.object)
  }
  const funcName = getName(preloadNode)

  if (!funcName) return

  // Get the definition of the function
  const path = callPath.scope.getBinding(funcName)?.path
  if (!path) return

  analyze(analysis, path, callPath.get('arguments') as NodePath<t.Expression>[])
}
