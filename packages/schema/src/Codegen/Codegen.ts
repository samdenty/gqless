import { Schema, SchemaType } from '../Schema'
import { File } from './File'
import * as graphql from './files'

interface CodegenOptions {
  url?: string
  typescript?: boolean
  headers?: Record<string, string>
}

export class Codegen {
  public options: CodegenOptions
  public files: File[]

  constructor(public schema: Schema, options?: CodegenOptions) {
    this.options = {
      typescript: true,
      ...options,
    }

    const typeFiles = this.getTypeFiles()

    this.files = [
      new graphql.ExtensionsFile(this),
      new graphql.IndexFile(),
      new graphql.generated.SchemaFile(this),
      new graphql.ClientFile(this),
      ...typeFiles,
      new graphql.generated.ExtensionsTypesFile(this),
      new graphql.generated.IndexFile(typeFiles),
    ]
  }

  public getTypeFiles(): File[] {
    const schemaTypes = Object.values(this.schema.types)
    const chunkedTypes: { [key: string]: SchemaType[] } = {}
    let curName = '-'
    const getChunkName = (type: SchemaType) => {
      if (!type.name || type.name[0] === '_' || type.name.indexOf('t_') == 0) {
        return 'base'
      }
      if (type.name.indexOf(curName) === 0) {
        return curName
      }
      return type.name
    }
    for (const type of schemaTypes) {
      const name = getChunkName(type)
      curName = name
      chunkedTypes[name] = chunkedTypes[name] || []
      chunkedTypes[name].push(type)
    }

    const files: File[] = []
    for (const typeName in chunkedTypes) {
      const types = chunkedTypes[typeName]
      files.push(
        new graphql.generated.TypesFile(this, typeName, types, chunkedTypes)
      )
    }
    return files
  }

  public getSchemaType(name: string) {
    return this.schema.types[name]
  }

  public generate() {
    return this.files.map((file) => ({
      path: `${file.path}.${this.options.typescript ? 'ts' : 'js'}`,
      overwrite: file.overwrite,
      contents: file.generate(),
    }))
  }
}
