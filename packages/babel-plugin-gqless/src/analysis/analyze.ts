import { dirname } from 'path'
import { types as t, NodePath } from '@babel/core'
import { invariant } from '@gqless/utils'
import { findModule, filterPath } from '../utils'
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

  console.group(path)
  if (
    t.isFunctionExpression(init.node) ||
    t.isArrowFunctionExpression(init.node)
  ) {
    const func = init as NodePath<
      t.FunctionExpression | t.ArrowFunctionExpression
    >
    const funcParams = func.get('params')
    const funcStatement = func.get('body')
    const preloadArgs = args.slice(1)

    preloadArgs.forEach((preloadArg, i) => {
      console.group('param', i)
      const param = funcParams[i]

      if (t.isIdentifier(param.node)) {
        const binding = param.scope.getBinding(param.node.name)!

        for (const path of binding.referencePaths) {
          if (t.isMemberExpression(path.parent)) {
            const memberExpression = path.parentPath as NodePath<
              t.MemberExpression
            >

            const property = memberExpression.get('property') as NodePath<
              t.Node
            >

            if (t.isIdentifier(property.node)) {
              const shouldRecurse = filterPath(preloadArg, property)

              console.log(
                'is',
                property.node.name,
                'in',
                preloadArg.node,
                shouldRecurse
              )
            }
          }
        }
      }
      console.groupEnd()
    })

    if (t.isBlockStatement(funcStatement.node)) {
      const blockStatement = funcStatement as NodePath<t.BlockStatement>
      const blockBody = funcStatement.get('body')

      console.log({
        analysis,
        init,
        funcParams,
        funcStatement,
        blockBody,
        preloadArgs,
      })
      console.groupEnd()
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
