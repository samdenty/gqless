export const CORE = 'graphql-builder'
export const UTILS = '@graphql-builder/utils'

export abstract class File {
  constructor(public path: string, public overwrite: boolean = true) {}

  private imports = new Map<string, Set<string>>()
  private importAlls = new Map<string, string>()

  protected import(from: string, ...imports: string[]) {
    if (!this.imports.has(from)) this.imports.set(from, new Set())
    const importsSet = this.imports.get(from)!
    imports.forEach(imp => importsSet.add(imp))
  }

  protected importAll(from: string, as: string) {
    if (this.importAlls.has(from)) {
      const existingName = this.importAlls.get(from)
      if (existingName !== as)
        throw new Error(
          `Already imported all from ${from}, use ${existingName} instead of ${as}`
        )

      return
    }

    this.importAlls.set(from, as)
  }

  public generate() {
    return [
      ...Array.from(this.importAlls.entries()).map(
        ([from, as]) => `import * as ${as} from '${from}'`
      ),
      ...Array.from(this.imports.entries()).map(([from, imports]) =>
        imports.size
          ? `import { ${Array.from(imports).join(',')} } from '${from}'`
          : ''
      ),
    ].join('\n')
  }
}
