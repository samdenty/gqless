export const CORE = 'graphql-builder'
export const UTILS = '@graphql-builder/utils'

export abstract class File {
  static path: string
  public path = (this.constructor as typeof File).path

  private imports = new Map<string, Set<string>>()

  protected addImports(path: string, ...imports: string[]) {
    if (!this.imports.has(path)) this.imports.set(path, new Set())
    const importsSet = this.imports.get(path)!
    imports.forEach(imp => importsSet.add(imp))
  }

  public generate() {
    return Array.from(this.imports.entries())
      .map(
        ([path, imports]) =>
          imports.size
            ? `import { ${Array.from(imports).join(',')} } from '${path}'`
            : ''
      )
      .join('\n')
  }
}
