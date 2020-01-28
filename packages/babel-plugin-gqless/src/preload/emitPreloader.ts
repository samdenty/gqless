import { types as t, NodePath } from '@babel/core'
import { FunctionAnalysis, PropAnalysis } from '../analysis'
import { ParamAnalysis } from '../analysis/ParamAnalysis'

const analysisLoader = (
  analysis: PropAnalysis | ParamAnalysis,
  path: NodePath,
  id: t.Identifier
) =>
  t.ifStatement(
    id,
    t.blockStatement(
      Array.from(analysis.properties)
        .map(prop => {
          const memberExp = t.memberExpression(id, t.identifier(prop.name))

          if (prop.properties.size) {
            const id = path.scope.generateUidIdentifier(prop.name)

            return [
              t.variableDeclaration('const', [
                t.variableDeclarator(id, memberExp),
              ]),
              analysisLoader(prop, path, id),
            ]
          }

          return t.expressionStatement(
            prop.variables ? t.callExpression(memberExp, []) : memberExp
          )
        })
        .flat()
    )
  )

export const emitPreloader = (
  insert: (n: t.ArrowFunctionExpression) => NodePath,
  analysis: FunctionAnalysis,
  args: NodePath<t.Expression>[]
) => {
  const funcExpression = t.arrowFunctionExpression([], t.blockStatement([]))
  const path = insert(funcExpression) as NodePath<t.ArrowFunctionExpression>
  const blockPath = path.get('body')

  const argIds = args.map((arg, i) => {
    const paramNode = analysis.params.get(i)?.param.node

    return path.scope.generateUidIdentifier(
      (t.isIdentifier(paramNode) && paramNode.name) ||
        (arg.isIdentifier() && arg.node.name) ||
        `${i}`
    )
  })
  path.set('params', argIds as any)

  args.forEach((arg, i) => {
    const param = analysis.params.get(i)
    if (!param) return
    const id = argIds[i]

    blockPath.pushContainer('body', analysisLoader(param, blockPath, id))
  })

  return funcExpression
}
