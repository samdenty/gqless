import { File } from '../../File'

export class IndexFile extends File {
  constructor() {
    super('generated/index')
  }

  public generate() {
    return `
      ${super.generate()}

      export * from './schema'
      export * from './types'
    `
  }
}

export * from './schema'
export * from './types'
