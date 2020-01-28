import { types as t, NodePath } from '@babel/core'
import { FunctionAnalysis, PropAnalysis } from '../analysis'
import { ParamAnalysis } from '../analysis'
import { evalAsString, evalProperty, serialize } from '../utils'

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
          const propName = String(prop.name)
          const isIndex = prop.name === 0
          const memberExp = t.memberExpression(
            id,
            isIndex
              ? t.numericLiteral(prop.name as number)
              : t.identifier(propName),
            isIndex
          )
          const memberArg = shouldEmit(arg, propName)
          if (memberArg === false) return []

          if (prop.properties.size) {
            const id = path.scope.generateUidIdentifier(propName)

            return [
              t.variableDeclaration('const', [
                t.variableDeclarator(id, memberExp),
              ]),
              analysisLoader(prop, path, memberArg, id),
            ]
          }

          return t.expressionStatement(
            prop.variables
              ? t.callExpression(memberExp, [serialize(path, prop.variables)])
              : memberExp
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
        `arg`
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
