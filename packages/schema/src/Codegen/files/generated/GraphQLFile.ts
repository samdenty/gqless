import { File } from '../../File'
import { Codegen } from '../../Codegen'

export class GraphQLFile extends File {
  constructor(private codegen: Codegen) {
    super('generated/GraphQL')
  }

  public generate() {
    return `
      ${super.generate()}

      // export class GraphQL extends GraphQL {
      //   // add react middleware, + typescript types
      // }
    `
  }
}
