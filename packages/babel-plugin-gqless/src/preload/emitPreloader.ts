import { types as t, NodePath } from '@babel/core'
import { FunctionAnalysis, PropAnalysis } from '../analysis'
import { ParamAnalysis } from '../analysis'
import { evalAsString, evalProperty } from '../utils'

const shouldEmit = (
  preloadArg: NodePath | null,
  field: string
): NodePath | null | false => {
  if (!preloadArg) return null

  if (preloadArg.isObjectExpression()) {
    for (const prop of preloadArg.get('properties')) {
      if (
        prop.isObjectProperty() &&
        evalAsString(prop, evalProperty) === field
      ) {
        return prop.get('value')
      }
    }

    return false
  }

  // if (
  //   filter.isNullLiteral() ||
  //   (filter.isIdentifier() && filter.node.name === 'undefined')
  // ) {
  //   return false
  // }

  return null
}

const analysisLoader = (
  analysis: PropAnalysis | ParamAnalysis,
  path: NodePath,
  arg: NodePath | null,
  id: t.Identifier
) =>
  t.ifStatement(
    id,
    t.blockStatement(
      Array.from(analysis.properties)
        .map(prop => {
          const memberExp = t.memberExpression(id, t.identifier(prop.name))
          const memberArg = shouldEmit(arg, prop.name)
          console.warn(memberArg, arg, prop.name)
          if (memberArg === false) return []

          if (prop.properties.size) {
            const id = path.scope.generateUidIdentifier(prop.name)

            return [
              t.variableDeclaration('const', [
                t.variableDeclarator(id, memberExp),
              ]),
              analysisLoader(prop, path, memberArg, id),
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

    blockPath.pushContainer('body', analysisLoader(param, blockPath, arg, id))
  })

  return funcExpression
}
