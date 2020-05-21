import { Codegen } from '../../Codegen'
import { File } from '../../File'
import { TypesFile } from './types'

export class IndexFile extends File {
  constructor(private exportFiles: File[]) {
    super('generated/index')
  }

  public generate() {
    return `
      ${super.generate()}

      ${this.exportFiles
        .map(file => {
          return `export * from './${file.path.replace('generated/', '')}'\n`
        })
        .join(' ')}

      export * from './schema'
    `
  }
}

export class ExtensionsTypesFile extends File {
  constructor(private codegen: Codegen) {
    super('generated/extensionsTypes')
  }

  public generate() {
    const { names } = new TypesFile(this.codegen, '', [], {})
    this.importAll('../extensions', names.extensions)

    return `
      ${super.generate()}

      export type ${
        names.Extension
      }<TName extends string> = TName extends keyof typeof ${names.extensions}
        ? typeof ${names.extensions}[TName]
        : any
    `
  }
}

export * from './schema'
export * from './types'
