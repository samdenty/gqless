import { File } from '../File'
import { TYPE_OPTIONS } from './generated'

export const TYPE_OPTIONS_VAR = 'typeOptions'

export class TypeOptionsFile extends File {
  constructor() {
    super('typeOptions', false)
  }

  public generate() {
    this.addImports(`./generated`, TYPE_OPTIONS)

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
