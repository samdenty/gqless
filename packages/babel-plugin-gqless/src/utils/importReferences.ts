import { types as t, NodePath } from '@babel/core'

export const importReferences = (
  path: NodePath<t.ImportDeclaration>,
  recurseRef: (data: {
    importName: string
    node: t.Node
    path: NodePath<t.Node>
    isNamespace: boolean
  }) => void
) => {
  for (const specifier of path.node.specifiers) {
    if (t.isImportDefaultSpecifier(specifier)) continue
    const binding = path.scope.getBinding(specifier.local.name)!

    const isNamespace = t.isImportNamespaceSpecifier(specifier)

    for (const { parent, parentPath: path } of binding.referencePaths) {
      const node = isNamespace ? path.parent : path.node
      const importName = isNamespace
        ? (parent as t.MemberExpression).property.name
        : (specifier as t.ImportSpecifier).imported.name

      recurseRef({ importName, node, isNamespace, path })
    }
  }
}
