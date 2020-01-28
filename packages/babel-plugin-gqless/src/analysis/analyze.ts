import { dirname } from 'path'
import { types as t, NodePath } from '@babel/core'
import { invariant } from '@gqless/utils'
import { findModule, evaluate, evalAsString, evalProperty } from '../utils'
import { Analysis } from './Analysis'
import { FunctionAnalysis } from './FunctionAnalysis'
import { PropAnalysis } from './PropAnalysis'
import { ParamAnalysis } from './ParamAnalysis'

const shouldAnalyze = (
  filter: NodePath<t.Node>,
  test: NodePath<t.Node>
): boolean => {
  if (filter.isObjectExpression()) {
    const propToTest = evalAsString(test)
    if (!propToTest) return true

    for (const prop of filter.get('properties')) {
      if (prop.isObjectProperty()) {
        if (evalAsString(prop) === propToTest) return true
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

  return true
}

const analyzeImport = (
  { file, cache }: Analysis,
  path: NodePath<
    t.ImportDefaultSpecifier | t.ImportSpecifier | t.ImportNamespaceSpecifier
  >,
  args: NodePath<t.Expression>[]
) => {
  const getExportName = (): string | void => {
    if (path.isImportSpecifier()) {
      return path.node.imported.name
    }
    if (path.isImportDefaultSpecifier()) {
      return 'default'
    }
    if (path.isImportNamespaceSpecifier()) {
      const [preloadPath] = args
      invariant(preloadPath.isMemberExpression())
      invariant(t.isIdentifier(preloadPath.node.property))
      return preloadPath.node.property.name
    }
  }
  const exportName = getExportName()
  if (!exportName) return

  const modulePath = findModule(
    dirname(file.path),
    (<t.ImportDeclaration>path.parent).source.value
  )

  const moduleAnalysis = cache.getPath(modulePath)
  moduleAnalysis.getExport(exportName)
}

const analyzeVariable = (
  analysis: Analysis,
  path: NodePath<t.VariableDeclarator>,
  args: NodePath<t.Expression>[]
): Analysis | void => {
  const init = path.get('init')

  if (init.isFunctionExpression() || init.isArrowFunctionExpression()) {
    return analyzeFunction(analysis, init, args)
  }
}

const analyzeMemberExpression = (
  analysis: PropAnalysis | ParamAnalysis,
  path: NodePath<t.MemberExpression>,
  arg: NodePath<t.Expression>
) => {
  const property = evalAsString(path, evalProperty)
  if (property === undefined) return

  let variables: any

  if (path.parentPath.isCallExpression()) {
    const [varsPath] = path.parentPath.get('arguments')
    variables = evaluate(varsPath)
  }

  const propAnalysis = analysis.getProperty(property, variables)
  analyzeProp(propAnalysis, path, arg)
}

const analyzeParam = (
  analysis: PropAnalysis | ParamAnalysis,
  path: NodePath<
    t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty
  >,
  arg: NodePath<t.Expression>
) => {
  invariant(path.isIdentifier())
  const binding = path.scope.getBinding(path.node.name)!

  for (const refPath of binding.referencePaths) {
    if (refPath.parentPath.isMemberExpression()) {
      analyzeMemberExpression(analysis, refPath.parentPath, arg)
    }
  }
}

const analyzeProp = (
  analysis: PropAnalysis | ParamAnalysis,
  path: NodePath<t.MemberExpression>,
  arg: NodePath<t.Expression>
) => {
  if (path.parentPath.isMemberExpression()) {
    return analyzeMemberExpression(analysis, path.parentPath, arg)
  }
}

const analyzeFunction = (
  analysis: Analysis,
  path: NodePath<
    t.FunctionDeclaration | t.FunctionExpression | t.ArrowFunctionExpression
  >,
  args: NodePath<t.Expression>[]
) => {
  const funcAnalysis = analysis.getFunction(path)
  const params = path.get('params')

  args.slice(1).forEach((arg, i) => {
    const param = params[i]
    if (!param || !shouldAnalyze(arg, param)) return

    analyzeParam(funcAnalysis.getParam(param), param, arg)
  })

  const funcBody = path.get('body')

  if (funcBody.isBlockStatement()) {
    const blockBody = funcBody.get('body')

    console.log({ analysis, blockBody, args, params })
  }
  return funcAnalysis
}

export const analyze = (
  analysis: Analysis,
  path: NodePath<t.Node>,
  /**
   * Arguments specified to preload call
   * [funcToPreload, ...argsForFunc]
   */
  args: NodePath<t.Expression>[] = []
) => {
  if (path.parentPath.isImportDeclaration()) {
    return analyzeImport(analysis, path as any, args)
  }

  if (path.isVariableDeclarator()) {
    return analyzeVariable(analysis, path, args)
  }

  if (path.isFunctionDeclaration()) {
    return analyzeFunction(analysis, path, args)
  }
}
