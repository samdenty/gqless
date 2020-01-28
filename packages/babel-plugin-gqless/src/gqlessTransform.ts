import generate from '@babel/generator'
import { invariant } from '@gqless/utils'
import { Scope, NodePath } from '@babel/traverse'
import { types as t } from '@babel/core'
import { FileAnalysis, analyze, FunctionAnalysis } from './analysis'
import { emitPreloader } from './preload'

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
  if (!callPath.isCallExpression()) return
  const args = callPath.get('arguments') as NodePath<t.Expression>[]
  args.forEach(a => invariant(a.isExpression()))

  // Get the function to preload
  const preloadPath = args[0]
  invariant(preloadPath)
  const program = preloadPath.findParent(p => p.isProgram()) as NodePath<
    t.Program
  >

  const getIdentifier = (path: NodePath): NodePath<t.Identifier> | void => {
    if (path.isIdentifier()) return path
    if (path.isMemberExpression()) return getIdentifier(path.get('object'))
  }
  const funcIdentifier = getIdentifier(preloadPath)

  if (!funcIdentifier) return

  // Get the definition of the function
  const path = funcIdentifier.scope.getBinding(funcIdentifier.node.name)?.path
  if (!path) return

  const funcAnalysis = analyze(analysis, path, args)
  invariant(funcAnalysis instanceof FunctionAnalysis)

  console.log(
    generate(
      emitPreloader(
        n => {
          program.pushContainer('body', t.expressionStatement(n))
          const body = program.get('body')
          return body[body.length - 1].get('expression') as any
        },
        funcAnalysis,
        args.slice(1)
      )
    ).code
  )
}
