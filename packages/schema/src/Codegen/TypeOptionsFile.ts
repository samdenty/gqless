import { File } from './File'
import { SchemaFile, TYPE_OPTIONS } from './SchemaFile'

export const TYPE_OPTIONS_VAR = 'typeOptions'

export class TypeOptionsFile extends File {
  static path = 'typeOptions'

  public generate() {
    this.addImports(`./${SchemaFile.path}`, TYPE_OPTIONS)

    return `
      ${super.generate()}

      export const ${TYPE_OPTIONS_VAR}: ${TYPE_OPTIONS} = {
        // Example:
        // User: {
        //   getKey(user) {
        //     return user.id
        //   },
        // },
      }
    `
  }
}
