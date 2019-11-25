import { dirname } from 'path'
import { types as t, NodePath } from '@babel/core'
import { invariant } from '@gqless/utils'
import { findModule } from '../utils'
import { FileAnalysis } from './Cache'

const analyzeImport = (
  analysis: FileAnalysis,
  path: NodePath<
    t.ImportDefaultSpecifier | t.ImportSpecifier | t.ImportNamespaceSpecifier
  >,
  args: NodePath<t.Expression>[]
) => {
  const getExportName = (): string | void => {
    if (t.isImportSpecifier(path.node)) {
      return path.node.imported.name
    }
    if (t.isImportDefaultSpecifier(path.node)) {
      return 'default'
    }
    if (t.isImportNamespaceSpecifier(path.node)) {
      const [preloadPath] = args
      invariant(t.isMemberExpression(preloadPath.node))
      invariant(t.isIdentifier(preloadPath.node.property))
      return preloadPath.node.property.name
    }
  }
  const exportName = getExportName()
  if (!exportName) return

  const modulePath = findModule(
    dirname(analysis.path),
    (<t.ImportDeclaration>path.parent).source.value
  )

  const moduleAnalysis = analysis.cache.getPath(modulePath)
  moduleAnalysis.getExport(exportName)
}

const analyzeVariable = (
  analysis: FileAnalysis,
  path: NodePath<t.VariableDeclarator>,
  args: NodePath<t.Expression>[]
) => {
  const init = path.get('init')

  const funcArgs = args.slice(1)
  if (funcArgs.length) {
  }
  if (
    t.isFunctionExpression(init.node) ||
    t.isArrowFunctionExpression(init.node)
  ) {
    const funcBody = (init as NodePath<
      t.FunctionExpression | t.ArrowFunctionExpression
    >).get('body')

    if (t.isBlockStatement(funcBody.node)) {
      const blockBody = (funcBody as NodePath<t.BlockStatement>).get('body')

      // console.log({ analysis, init, funcBody, blockBody, args })
      return
    }
  }
}

const analyzeFunction = (
  analysis: FileAnalysis,
  path: NodePath<t.FunctionDeclaration>,
  args: NodePath<t.Expression>[]
) => {
  console.log({ analysis, path, args })
}

export const analyze = (
  analysis: FileAnalysis,
  path: NodePath<t.Node>,
  /**
   * Arguments specified to preload call
   * [funcToPreload, ...argsForFunc]
   */
  args: NodePath<t.Expression>[] = []
) => {
  if (t.isImportDeclaration(path.parent)) {
    return analyzeImport(analysis, path as any, args)
  }

  if (t.isVariableDeclarator(path.node)) {
    return analyzeVariable(analysis, path as any, args)
  }

  if (t.isFunctionDeclaration(path.node)) {
    return analyzeFunction(analysis, path as any, args)
  }
}
