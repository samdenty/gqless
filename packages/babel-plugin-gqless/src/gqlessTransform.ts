import { invariant } from '@gqless/utils'
import { NodePath } from '@babel/traverse'
import generate from '@babel/generator'
import { types as t } from '@babel/core'
import { FileAnalysis, FunctionAnalysis } from './analysis'
import { emitPreloader } from './preload'

export const gqlessTransform = (
  analysis: FileAnalysis,
  importName: string,
  path: NodePath
) => {
  switch (importName) {
    case 'preload': {
      scanPreload(analysis, path)
      break
    }
  }
}

const scanPreload = (analysis: FileAnalysis, callPath: NodePath) => {
  const program = callPath.findParent(p => p.isProgram()) as NodePath<t.Program>

  if (!callPath.isCallExpression()) return
  const args = callPath.get('arguments') as NodePath<t.Expression>[]
  args.forEach(a => invariant(a.isExpression()))

  // Get the function to preload
  const preloadPath = args[0]
  invariant(preloadPath)
  const funcAnalysis = analysis.get(preloadPath)
  invariant(funcAnalysis instanceof FunctionAnalysis)

  // Scan the function
  funcAnalysis.scan(...args.slice(1))

  program.pushContainer(
    'body',
    t.expressionStatement(t.arrowFunctionExpression([], t.blockStatement([])))
  )
  const programBody = program.get('body')
  const outPath = programBody[programBody.length - 1].get('expression') as any
  emitPreloader(outPath, funcAnalysis, args.slice(1))

  console.log(funcAnalysis, generate(outPath.node).code)
}
