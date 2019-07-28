import * as generated from './generated'
import { File } from '../File'

export class IndexFile extends File {
  constructor() {
    super('index')
  }

  public generate() {
    return `
      ${super.generate()}

      export * from './generated'
    `
  }
}

export * from './extensions'
export * from './graphql'

export { generated }
