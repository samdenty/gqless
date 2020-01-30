import { dirname } from 'path'
import { types as t, NodePath, BabelFileResult, traverse } from '@babel/core'
import { Cache } from '../Cache'
import { FunctionAnalysis } from '../FunctionAnalysis'
import { Analysis } from '../Analysis'
import {
  findModule,
  evalAsString,
  evalProperty,
  evaluate,
  Record,
  resolveRefInPattern,
} from '../../utils'
import { invariant } from '@gqless/utils/src'

export type ImportSpecifier =
  | t.ImportSpecifier
  | t.ImportDefaultSpecifier
  | t.ImportNamespaceSpecifier

export class FileAnalysis extends Analysis {
  public exports = new Map<string, Analysis>()
  public functions = new Set<FunctionAnalysis>()

  private _ast?: t.File

  constructor(cache: Cache, public path: string) {
    super()
    this.file = this
    this.cache = cache
  }

  public getFunction(path: NodePath<t.Function>) {
    for (const funcAnalysis of this.functions) {
      if (funcAnalysis.func === path) return funcAnalysis
    }
    const funcAnalysis = new FunctionAnalysis(this, path)
    this.functions.add(funcAnalysis)
    return funcAnalysis
  }

  public get(path: NodePath) {
    if (path.isFunction()) {
      return this.getFunction(path)
    }

    if (path.isIdentifier() || path.isMemberExpression()) {
      return this.getRef(path)
    }

    if (path.parentPath.isImportDeclaration()) {
      return this.getImport(path as NodePath<ImportSpecifier>)
    }

    return
  }

  public getImport(path: NodePath<ImportSpecifier>) {
    const moduleAnalysis = this.getModule(
      (<t.ImportDeclaration>path.parent).source.value
    )

    if (path.isImportNamespaceSpecifier()) {
      return moduleAnalysis
    }

    const exportAnalysis = moduleAnalysis.getExport(
      (path.node as t.ImportSpecifier)?.imported.name ?? 'default'
    )

    return exportAnalysis
  }

  public getRef(path: NodePath<t.Identifier | t.MemberExpression>) {
    const recurse = (
      path: NodePath,
      ...ctx: NodePath<t.MemberExpression>[]
    ) => {
      if (path.isIdentifier()) {
        const binding = path.scope.getBinding(path.node.name)
        if (!binding) return

        if (binding.path.parentPath.isImportDeclaration()) {
          // lookup import ctx
          let analysis = this.getImport(
            binding.path as NodePath<ImportSpecifier>
          )
          if (!analysis) return

          if (binding.path.isImportNamespaceSpecifier()) {
            const exportName = evalProperty(ctx[0])
            if (exportName === undefined) return
            analysis = analysis.file.getExport(exportName)
          }
          console.warn(this, binding, ctx)
        }
      }

      if (path.isMemberExpression()) {
        recurse(path.get('object'), path, ...ctx)
      }
    }

    return recurse(path)
  }

  public getExport(name: string) {
    if (this.exports.has(name)) {
      return this.exports.get(name)
    }

    console.log('analyze export', name)

    let exportAnalysis: Analysis | undefined

    // Find the export declaration in the AST, and resolve it
    // to an Analysis obj
    traverse(this.file.ast!, {
      Program: (programPath: NodePath<t.Program>) => {
        const analyzeExport = (path: NodePath) => {
          if (path.isExportDefaultDeclaration()) {
            if (name !== 'default') return

            return this.get(path)
          } else if (path.isExportNamedDeclaration()) {
            if (path.node.exportKind && path.node.exportKind !== 'value') return

            // export var x
            if (path.node.declaration) {
              const declaration = path.get('declaration')

              if (declaration.isFunctionDeclaration()) {
                if (declaration.node.id!.name !== name) return

                return this.getFunction(declaration)
              }

              if (declaration.isVariableDeclaration()) {
                for (const declarator of declaration.get('declarations')) {
                  const id = declarator.get('id')
                  const init = declarator.get('init')
                  if (init.node === null) return

                  const value = resolveRefInPattern(id, init as NodePath, name)

                  if (value) {
                    console.warn('found for', name, value)
                  }
                }
              }

              if (declaration.isClassDeclaration()) {
                if (declaration.node.id!.name !== name) return
              }
            }

            for (const specifier of path.get('specifiers')) {
              const moduleAnalysis = path.node.source
                ? this.file.getModule(
                    evalAsString(path.get('source') as NodePath)!
                  )
                : undefined

              // export { x }
              if (specifier.isExportSpecifier()) {
                if (specifier.node.exported.name !== name) continue
                const localName = specifier.node.local.name

                // export { x } from 'mod'
                if (moduleAnalysis) {
                  return moduleAnalysis.getExport(localName)
                }

                const binding = specifier.scope.getBinding(localName)
                // exporting unknown variable
                if (!binding) return

                // check what this is
                binding.path
              }

              // export * as x from 'mod'
              else if (specifier.isExportNamespaceSpecifier()) {
                if (specifier.node.exported.name !== name) continue
                return moduleAnalysis!
              }

              // export default from 'mod'
              else if (specifier.isExportDefaultSpecifier()) {
                if (name !== 'default') continue
                return moduleAnalysis!.getExport('default')
              }
            }
          } else if (path.isExportAllDeclaration()) {
          }
        }

        for (const path of programPath.get('body')) {
          const result = analyzeExport(path)
          if (result) exportAnalysis = result
        }
      },
    })

    console.log('export', { exportAnalysis })
    return exportAnalysis
  }

  public getModule(id: string) {
    try {
      const modulePath = findModule(dirname(this.path), id)
      return this.cache.getPath(modulePath)
    } catch (e) {
      throw new Error(
        `Failed resolving module relative to ${this.file.path}. \n${e.message}`
      )
    }
  }

  public set ast(ast: t.File) {
    this._ast = ast
  }

  public get ast() {
    if (!this._ast) {
      this._ast = this.cache.api.transformFileSync(this.path, {
        ast: true,
      })!.ast!
    }

    return this._ast
  }
}
