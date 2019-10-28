import { File } from '../File'
import { Codegen } from '../Codegen'

export class ExtensionsFile extends File {
  constructor(private codegen: Codegen) {
    super('extensions/index', false)
  }

  public generate() {
    return `
      ${super.generate()}

      ${Object.values(this.codegen.schema.types).forEach(type => {
        // type.
        // TODO
      })}
      export const Query = {}

      /**
       * Add a key to a type
       */
      // export const User = {
      //   [GET_KEY]: (user) => user.id
      // }

      /**
       * Add custom data to a type
       * @example
       * query.users[0].follow()
       */
      // export const User = (user) => ({
      //   follow() {
      //     console.log('follow', user.id)
      //   }
      // })
    `
  }
}
