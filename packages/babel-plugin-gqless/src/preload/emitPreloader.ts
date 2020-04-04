import { types as t, NodePath } from '@babel/core'
import { FunctionAnalysis, ParamAnalysis, FieldAnalysis } from '../analysis'
import { evalAsString, evalProperty, serialize } from '../evaluate'

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
        .map((field) => {
          const fieldName = String(field.name)
          const isElement = field.name === 0
          const memberExp = t.memberExpression(
            id,
            isElement
              ? t.numericLiteral(field.name as number)
              : t.identifier(fieldName),
            isElement
          )
          const exp = field.variables
            ? t.callExpression(memberExp, [serialize(path, field.variables)])
            : memberExp

          const memberArg = shouldEmit(arg, fieldName)
          if (memberArg === false) return []

          if (field.fields.size) {
            const id = path.scope.generateUidIdentifier(
              isElement ? 'elem' : fieldName
            )

            return [
              t.variableDeclaration('const', [t.variableDeclarator(id, exp)]),
              analysisLoader(field, path, memberArg, id),
            ]
          }

          return t.expressionStatement(exp)
        })
        .flat()
    )
  )

export const emitPreloader = (
  outputPath: NodePath<t.ArrowFunctionExpression>,
  analysis: FunctionAnalysis,
  args: NodePath<t.Expression | t.SpreadElement>[]
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
