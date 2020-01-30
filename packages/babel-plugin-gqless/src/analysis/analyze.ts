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
import { ImportSpecifier } from './FileAnalysis'

const analyzeImport = (
  { file }: Analysis,
  path: NodePath<ImportSpecifier>,
  args: NodePath<t.Expression>[]
) => {
  let analysis = file.getImport(path)
  if (path.isImportNamespaceSpecifier()) {
    const [memberPath] = args
    invariant(memberPath.isMemberExpression())
    const name = evalProperty(memberPath)
    invariant(name)
    analysis = analysis?.file.getExport(name)
  }

  return analysis
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

        const propName = evalProperty(prop)
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
    const callee = callPath.get('callee')

    const propAnalysis = analysis.file.get(path)

    // callPath.scope.binding
    // analyzeFunction(analysis,)
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
          // TODO: This is assumes an identifier, isn't true for
          // var { prop: { asd }}
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
    const propName = evalProperty(memberPath)
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
  const funcAnalysis = analysis.file.getFunction(path)
  const params = path.get('params')

  args.slice(1).forEach((arg, i) => {
    const param = params[i]
    if (!param) return

    analyzeParam(funcAnalysis.getParam(param), param)
  })

  if (analysis !== analysis.file) {
    console.log('add analysis to prev analysis')
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
