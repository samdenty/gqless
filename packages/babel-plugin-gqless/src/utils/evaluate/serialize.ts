import { types as t, NodePath } from '@babel/core'
import { DynGlobal, DynImport } from './Dyn'

/**
 * Serialize a JS object into babel AST.
 *
 * Performs the inverse of evaluate.ts
 */
export const serialize = (path: NodePath, data: any) => {
  if (data === null) return t.nullLiteral()
  if (data === undefined) return t.identifier('undefined')

  if (typeof data === 'number') return t.numericLiteral(data)
  if (typeof data === 'string') return t.stringLiteral(data)

  if (data instanceof Array) return t.arrayExpression(data.map(serialize))

  if (data instanceof DynGlobal) {
    return t.identifier(data.name)
  }

  if (data instanceof DynImport) {
    const program = path.findParent(p => p.isProgram()) as NodePath<t.Program>

    return insertImport(program, data)
  }

  return t.objectExpression(
    Object.entries(data).map(([key, value]) =>
      t.objectProperty(t.identifier(key), serialize(path, value))
    )
  )
}

const insertImport = (program: NodePath<t.Program>, imp: DynImport) => {
  const isNamespace = imp.name === null
  const isDefault = imp.name === 'default'

  const body = program.get('body')

  let lastImport: NodePath | undefined
  for (let i = 0; i < body.length; i++) {
    const path = body[i]

    if (!path.isImportDeclaration()) continue
    lastImport = path

    if (
      (!path.node.importKind || path.node.importKind === 'value') &&
      path.node.source.value === imp.source
    ) {
      for (const specifier of path.get('specifiers')) {
        console.log(specifier.node)
        if (
          (isNamespace && specifier.isImportNamespaceSpecifier()) ||
          (isDefault && specifier.isImportDefaultSpecifier()) ||
          (specifier.isImportSpecifier() &&
            specifier.node.imported.name === imp.name)
        ) {
          return specifier.node.local
        }
      }
    }
  }

  const id = program.scope.generateUidIdentifier(
    isNamespace || isDefault ? 'import' : imp.name!
  )

  const node = t.importDeclaration(
    [
      isNamespace
        ? t.importNamespaceSpecifier(id)
        : isDefault
        ? t.importDefaultSpecifier(id)
        : t.importSpecifier(id, t.identifier(imp.name!)),
    ],
    t.stringLiteral(imp.source)
  )

  if (lastImport) {
    lastImport.insertAfter(node)
  } else {
    program.unshiftContainer('body', node)
  }

  return id
}
