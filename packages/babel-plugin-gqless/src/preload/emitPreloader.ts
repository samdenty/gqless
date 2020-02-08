import { types as t, NodePath } from '@babel/core'
import { FunctionAnalysis, ParamAnalysis, FieldAnalysis } from '../analysis'
import { evalAsString, evalProperty, serialize } from '../utils'

const shouldEmit = (
  preloadArg: NodePath | null,
  field: string
): NodePath | null | false => {
  if (!preloadArg) return null

  if (preloadArg.isObjectExpression()) {
    for (const prop of preloadArg.get('properties')) {
      if (prop.isObjectProperty() && evalProperty(prop) === field) {
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
  analysis: FieldAnalysis | ParamAnalysis,
  path: NodePath,
  arg: NodePath | null,
  id: t.Identifier
) =>
  t.ifStatement(
    id,
    t.blockStatement(
      Array.from(analysis.fields)
        .map(field => {
          const fieldName = String(field.name)
          const isIndex = field.name === 0
          const memberExp = t.memberExpression(
            id,
            isIndex
              ? t.numericLiteral(field.name as number)
              : t.identifier(fieldName),
            isIndex
          )
          const memberArg = shouldEmit(arg, fieldName)
          if (memberArg === false) return []

          if (field.fields.size) {
            const id = path.scope.generateUidIdentifier(fieldName)

            return [
              t.variableDeclaration('const', [
                t.variableDeclarator(id, memberExp),
              ]),
              analysisLoader(field, path, memberArg, id),
            ]
          }

          return t.expressionStatement(
            field.variables
              ? t.callExpression(memberExp, [serialize(path, field.variables)])
              : memberExp
          )
        })
        .flat()
    )
  )

export const emitPreloader = (
  outputPath: NodePath<t.ArrowFunctionExpression>,
  analysis: FunctionAnalysis,
  args: NodePath<t.Expression>[]
) => {
  const blockPath = outputPath.get('body')

  const argIds = args.map((arg, i) => {
    const paramNode = analysis.params.get(i)?.path.node

    return outputPath.scope.generateUidIdentifier(
      (t.isIdentifier(paramNode) && paramNode.name) ||
        (arg.isIdentifier() && arg.node.name) ||
        'arg'
    )
  })
  outputPath.set('params', argIds as any)

  args.forEach((arg, i) => {
    const param = analysis.params.get(i)
    if (!param) return
    const id = argIds[i]

    blockPath.pushContainer('body', analysisLoader(param, blockPath, arg, id))
  })
}
