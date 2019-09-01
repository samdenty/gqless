import { Schema } from '../Schema'
import * as graphql from './files'
import { File } from './File'

interface CodegenOptions {
  url?: string
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

    this.files = [
      new graphql.ExtensionsFile(),
      new graphql.IndexFile(),

      new graphql.generated.SchemaFile(this),
      new graphql.ClientFile(this),
      new graphql.generated.TypesFile(this),
      new graphql.generated.IndexFile(),
    ]
  }

  public getSchemaType(name: string) {
    return this.schema.types[name]
  }

  public generate() {
    return this.files.map(file => ({
      path: `${file.path}.${this.options.typescript ? 'ts' : 'js'}`,
      overwrite: file.overwrite,
      contents: file.generate(),
    }))
  }
}
