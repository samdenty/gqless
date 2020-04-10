import { dirname } from 'path'
import { types as t, NodePath, BabelFileResult, traverse } from '@babel/core'
import { Cache } from './Cache'
import { FunctionAnalysis } from './FunctionAnalysis'
import { Analysis } from './Analysis'
import { findModule } from '../utils'
import { evalAsString, evalProperty, resolveRefInPattern } from '../evaluate'
import { invariant } from '@gqless/utils'

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
      if (funcAnalysis.path === path) return funcAnalysis
    }
    const funcAnalysis = new FunctionAnalysis(this, path)
    this.functions.add(funcAnalysis)
    return funcAnalysis
  }

  public get(
    path: NodePath<t.Node | null>,
    opts: { varName?: string; namespaceImport?: () => string } = {}
  ) {
    if (path.isFunction()) {
      return this.getFunction(path)
    }

    if (path.isIdentifier() || path.isMemberExpression()) {
      return this.getRef(path)
    }

    if (path.parentPath.isImportDeclaration()) {
      return this.getImport(
        path as NodePath<ImportSpecifier>,
        opts.namespaceImport
      )
    }

    if (path.isVariableDeclaration() || path.isVariableDeclarator()) {
      if (opts.varName === undefined) return
      return this.getVariable(path, opts.varName)
    }

    return
  }

  public getImport(
    path: NodePath<ImportSpecifier>,
    namespaceImport?: () => string
  ) {
    const moduleAnalysis = this.getModule(
      (<t.ImportDeclaration>path.parent).source.value
    )

    if (path.isImportNamespaceSpecifier()) {
      const imp = namespaceImport?.()
      return imp ? moduleAnalysis.getExport(imp) : moduleAnalysis
    }

    const exportAnalysis = moduleAnalysis.getExport(
      (path.node as t.ImportSpecifier)?.imported?.name ?? 'default'
    )

    return exportAnalysis
  }

  public getVariable(
    path: NodePath<t.VariableDeclaration | t.VariableDeclarator>,
    name: string
  ): Analysis | void {
    if (path.isVariableDeclarator()) {
      const id = path.get('id')
      const init = path.get('init')
      if (init.node === null) return

      // console.log(this.get(init))
      const value = resolveRefInPattern(id, init as NodePath, name)
      if (!value) return

      return this.get(value)
    }

    for (const declarator of (path as NodePath<t.VariableDeclaration>).get(
      'declarations'
    )) {
      const analysis = this.getVariable(declarator, name)
      if (analysis) return analysis
    }
  }

  public getRef(
    path: NodePath<t.Identifier | t.MemberExpression>,
    ...ctx: NodePath<t.MemberExpression>[]
  ): Analysis | void {
    if (path.isIdentifier()) {
      const binding = path.scope.getBinding(path.node.name)
      if (!binding) return

      return this.get(binding.path, {
        varName: path.node.name,
        namespaceImport() {
          return evalProperty(ctx[0])!
        },
      })
    }

    if (path.isMemberExpression()) {
      return this.getRef(path.get('object') as any, path, ...ctx)
    }
  }

  public getExport(name: string): Analysis | void {
    if (this.exports.has(name)) {
      return this.exports.get(name)
    }

    // Iterate over all top-level paths
    const findExport = (path: NodePath) => {
      if (path.isExportDefaultDeclaration()) {
        if (name !== 'default') return

        return this.get(path.get('declaration'))
      }

      // export var / { x } / * as x
      if (path.isExportNamedDeclaration()) {
        if (path.node.exportKind && path.node.exportKind !== 'value') return

        // export var x
        if (path.node.declaration) {
          const declaration = path.get('declaration')

          if (declaration.isFunctionDeclaration()) {
            if (declaration.node.id!.name !== name) return
            return this.getFunction(declaration)
          }

          if (declaration.isVariableDeclaration()) {
            return this.getVariable(declaration, name)
          }

          if (declaration.isClassDeclaration()) {
            if (declaration.node.id!.name !== name) return
            // TODO
          }
        }

        for (const specifier of path.get('specifiers')) {
          const moduleAnalysis = path.node.source
            ? this.file.getModule(evalAsString(path.get('source') as NodePath)!)
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

            return this.get(binding.path, { varName: localName })
          }

          // export * as x from 'mod'
          else if (specifier.isExportNamespaceSpecifier()) {
            if (specifier.node.exported.name !== name) continue
            return moduleAnalysis!
          }

          // export default from 'mod'
          else if (specifier.isExportDefaultSpecifier()) {
            if (specifier.node.exported.name !== name) continue

            return moduleAnalysis!.getExport('default')
          }
        }
      }

      // export * from
      if (path.isExportAllDeclaration()) {
        const moduleAnalysis = this.file.getModule(
          evalAsString(path.get('source') as NodePath)!
        )

        return moduleAnalysis.getExport(name)
      }
    }

    for (const path of this.programPath.get('body')) {
      const exportAnalysis = findExport(path)
      if (!exportAnalysis) continue

      this.exports.set(name, exportAnalysis)
      return exportAnalysis
    }
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

  private _programPath: NodePath<t.Program> | undefined
  public get programPath() {
    if (!this._programPath) {
      traverse(this.ast, {
        Program: (path) => {
          this._programPath = path
        },
      })
    }

    return this._programPath!
  }

  public set ast(ast: t.File) {
    this._ast = ast
  }

  public get ast() {
    if (!this._ast) {
      this.ast = this.cache.transform(this.path)
    }

    return this._ast!
  }
}
