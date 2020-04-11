import { invariant } from '@gqless/utils'
import { NodePath } from '@babel/traverse'
import generate from '@babel/generator'
import { types as t } from '@babel/core'
import { FileAnalysis, FunctionAnalysis } from './analysis'
import { scanParentPath } from './scan'
import { emitPreloader } from './preload'
import { evaluate } from './evaluator'

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

const scanPreload = (analysis: FileAnalysis, path: NodePath) => {
  const program = path.findParent((p) => p.isProgram()) as NodePath<t.Program>

  for (const result of scanParentPath(path)) {
    if (result.kind !== 'CALL') continue

    const args = result.callPath.get('arguments') as NodePath<
      t.Expression | t.SpreadElement
    >[]
    args.forEach((a) => invariant(a.isExpression()))

    // evaluate(args[1])
    // console.log(analysis.get(args[1]))
    const r = evaluate(args[1])
    console.log(r)
    return

    // Get the function to preload
    const funcToPreload = args[0]
    invariant(funcToPreload)
    const funcAnalysis = analysis.get(funcToPreload)
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
}
