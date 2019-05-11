import { File } from './File'
import { SchemaFile } from './SchemaFile'

export class IndexFile extends File {
  static path = 'index'

  public generate() {
    return `
      ${super.generate()}

      export * from './${SchemaFile.path}'
    `
  }
}
