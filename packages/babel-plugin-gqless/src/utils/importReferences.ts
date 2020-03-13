import { types as t, NodePath } from '@babel/core'

export const importReferences = (
  path: NodePath<t.ImportDeclaration>,
  recurseRef: (importName: string, path: NodePath<t.Node>) => void
) => {
  for (const specifier of path.node.specifiers) {
    if (t.isImportDefaultSpecifier(specifier)) continue
    const binding = path.scope.getBinding(specifier.local.name)!

    const isNamespace = t.isImportNamespaceSpecifier(specifier)

    for (const { parentPath } of binding.referencePaths) {
      const path = isNamespace ? parentPath.parentPath : parentPath

      const importName = isNamespace
        ? (parentPath.node as t.MemberExpression).property.name
        : (specifier as t.ImportSpecifier).imported.name

      recurseRef(importName, path)
    }
  }
}
