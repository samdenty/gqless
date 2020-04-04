import { types as t, NodePath } from '@babel/core'
import { scanParentPath, scanPath } from './scanPath'
import { evalAsString } from '../evaluate'

export type ImportCallback = (importName: string, path: NodePath) => void
export type ImportHandler = (source: string) => ImportCallback | void

export function scanImports(path: NodePath, importHandler: ImportHandler) {
  path.traverse({
    // @ts-ignore
    ReferencedIdentifier(path: NodePath<t.Identifier>) {
      if (path.node.name !== 'require') return

      for (const result of scanParentPath(path)) {
        if (result.kind !== 'CALL') continue
        const { callPath } = result

        const [modPath] = callPath.get('arguments')
        if (!modPath) continue
        const source = evalAsString(modPath)
        if (!source) continue

        const importCallback = importHandler(source)
        if (!importCallback) continue

        for (const result of scanParentPath(callPath)) {
          if (result.kind !== 'PROPERTY_ACCESS') continue
          importCallback(result.name, result.path)
        }
      }
    },
    ImportDeclaration(path) {
      const importCallback = importHandler(path.node.source.value)
      if (!importCallback) return

      for (const specifier of path.get('specifiers')) {
        const binding = path.scope.getBinding(specifier.node.local.name)!

        for (const { parentPath } of binding.referencePaths) {
          if (specifier.isImportNamespaceSpecifier()) {
            for (const result of scanPath(parentPath)) {
              if (result.kind === 'PROPERTY_ACCESS') {
                importCallback(result.name, result.path)
              }
            }
          } else {
            importCallback(
              specifier.isImportSpecifier()
                ? specifier.node.imported.name
                : 'default',
              parentPath
            )
          }
        }
      }
    },
  })
}
