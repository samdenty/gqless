import { invariant } from '@gqless/utils'
import { dirname } from 'path'
import { Scope } from '@babel/traverse'
import { types as t } from '@babel/core'
import { findModule } from './utils'

export const gqlessTransform = (
  fileName: string,
  importName: string,
  node: t.Node,
  scope: Scope
) => {
  console.log(node, scope)
  switch (importName) {
    case 'preload': {
      recursePreload(node, fileName, scope)
      break
    }
  }
}

const recursePreload = (node: t.Node, fileName: string, scope: Scope) => {
  // node = preload(FUNC)
  if (!t.isCallExpression(node)) return

  // Get the function to preload
  const funcToPreload = node.arguments[0]
  const getName = (node: t.Node) => {
    if (t.isIdentifier(node)) return node.name
    if (t.isMemberExpression(node)) return getName(node.object)
  }
  const funcName = getName(funcToPreload)
  if (!funcName) return

  // Get the definition of the function
  const bindingPath = scope.getBinding(funcName)?.path
  if (!bindingPath) return

  const declaration = bindingPath.parent

  if (t.isImportDeclaration(declaration)) {
    const specifier = bindingPath.node
    const getExportName = (): string | void => {
      if (t.isImportSpecifier(specifier)) {
        return specifier.imported.name
      }
      if (t.isImportDefaultSpecifier(specifier)) {
        return 'default'
      }
      if (t.isImportNamespaceSpecifier(specifier)) {
        invariant(t.isMemberExpression(funcToPreload))
        invariant(t.isIdentifier(funcToPreload.property))
        return funcToPreload.property.name
      }
    }
    const exportName = getExportName()
    if (!exportName) return

    const modulePath = findModule(dirname(fileName), declaration.source.value)
    console.log(modulePath, exportName)
    return
  }
}
