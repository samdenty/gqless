import { Schema } from '../Schema'
import { SchemaFile } from './SchemaFile'
import { TypeOptionsFile } from './TypeOptionsFile'
import { IndexFile } from './IndexFile'
import { File } from './File'

interface CodegenOptions {
  typescript?: boolean
}

export class Codegen {
  public options: CodegenOptions
  public files: File[]

  constructor(public schema: Schema, options?: CodegenOptions) {
    this.options = {
      typescript: true,
      ...options,
    }

    this.files = [new SchemaFile(this), new TypeOptionsFile(), new IndexFile()]
  }

  public generate() {
    return this.files.map(file => [
      `${file.path}.${this.options.typescript ? 'ts' : 'js'}`,
      file.generate(),
    ])
  }
}
