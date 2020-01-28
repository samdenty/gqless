import { dirname } from 'path'
import { types as t, NodePath } from '@babel/core'
import { invariant } from '@gqless/utils'
import {
  findModule,
  evaluate,
  evalAsString,
  evalProperty,
  objectPropValue,
} from '../utils'
import { Analysis } from './Analysis'
import { PropAnalysis } from './PropAnalysis'
import { ParamAnalysis } from './ParamAnalysis'

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

const analyzeParam = (
  analysis: PropAnalysis | ParamAnalysis,
  path: NodePath<
    t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty
  >
) => {
  // function ({ })
  if (path.isObjectPattern()) {
    for (const prop of path.get('properties')) {
      // function ({ arg })
      if (prop.isObjectProperty()) {
        const binding = path.scope.getBinding(objectPropValue(prop))!

        const propName = evalAsString(prop, evalProperty)
        if (propName === undefined) return

        for (const refPath of binding.referencePaths) {
          analyzeProp(analysis.getProperty(propName), refPath)
        }
      }

      // function ({ ...rest })
      if (prop.isRestElement()) {
        const binding = path.scope.getBinding(
          (prop.node.argument as t.Identifier).name
        )!

        for (const refPath of binding.referencePaths) {
          analyzeProp(analysis, refPath)
        }
      }
    }
  }

  // function (arg)
  if (path.isIdentifier()) {
    const binding = path.scope.getBinding(path.node.name)!

    for (const refPath of binding.referencePaths) {
      analyzeProp(analysis, refPath)
    }
  }
}

const analyzeProp = (
  analysis: PropAnalysis | ParamAnalysis,
  path: NodePath
) => {
  if (path.parentPath.isCallExpression()) {
    const callPath = path.parentPath
  }

  if (path.parentPath.isVariableDeclarator()) {
    const id = path.parentPath.get('id')
    const init = path.parentPath.get('init')
    if (init.node === null) return

    // var { }
    if (id.isObjectPattern()) {
      for (const prop of id.get('properties')) {
        // var { ...rest }
        if (prop.isRestElement()) {
          const binding = path.scope.getBinding(
            (prop.node.argument as t.Identifier).name
          )!

          for (const refPath of binding.referencePaths) {
            analyzeProp(analysis, refPath)
          }
        }

        // var { prop }
        if (prop.isObjectProperty()) {
          const propName = objectPropValue(prop)
          const binding = path.scope.getBinding(propName)!

          for (const refPath of binding.referencePaths) {
            analyzeProp(
              analysis.getProperty(isNaN(+propName) ? propName : 0),
              refPath
            )
          }
        }
      }
    }

    // var x
    if (id.isIdentifier()) {
      const binding = id.scope.getBinding(id.node.name)
      if (!binding) return

      for (const refPath of binding.referencePaths) {
        analyzeProp(analysis, refPath)
      }
    }
  }

  if (path.parentPath.isMemberExpression()) {
    const memberPath = path.parentPath
    const propName = evalAsString(memberPath, evalProperty)
    if (propName === undefined) return

    let variables: any

    if (memberPath.parentPath.isCallExpression()) {
      const [varsPath] = memberPath.parentPath.get('arguments')
      variables = evaluate(varsPath)
      console.log(variables)
    }

    const propAnalysis = analysis.getProperty(
      isNaN(+propName) ? propName : 0,
      variables
    )
    analyzeProp(propAnalysis, memberPath)
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
    if (!param) return

    analyzeParam(funcAnalysis.getParam(param), param)
  })

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
