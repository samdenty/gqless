import { SchemaType, SchemaField } from '../../../Schema'
import { File } from '../../File'
import { Codegen } from '../../Codegen'
import _ from 'lodash'

export const SCHEMA_VAR = 'schema'

export class SchemaFile extends File {
  constructor(private codegen: Codegen) {
    super('generated/schema')
  }

  public generate() {
    this.import(`gqless`, 'createSchema')
    const types = Object.values(this.codegen.schema.types)

    return `
      ${super.generate()}

      ${types
        .map(type => {
          if (type.kind !== 'ENUM') return
          return `\nexport enum ${type.name} {${type.enumValues.join(',\n')}}`
        })
        .filter(Boolean)
        .join('\n')}

      export const ${SCHEMA_VAR} = createSchema({
        ${['query', 'mutation']
          .map(name => {
            const value = (this.codegen.schema as any)[name + 'Type']
            if (!value) return

            return (
              `/** The root ${name} type **/\n` +
              `$${name}: ${JSON.stringify(value)},`
            )
          })
          .filter(Boolean)
          .join('\n')}

        ${types
          .map(type => {
            if (type.kind === 'ENUM') {
              return `\n${type.name}`
            }

            const definition = this.generateType(type)
            if (!definition) return

            return `${this.generateTypeComments(type, true)}${
              type.name
            }: ${definition}`
          })
          .filter(Boolean)
          .join(',\n')}
      } as const)
    `
  }

  private generateFieldComments(field: SchemaField) {
    const comments: string[] = []
    if (field.isDeprecated) {
      comments.push(
        `@deprecated${
          field.deprecationReason
            ? ` ${field.deprecationReason.replace(/\n/gm, ' ')}`
            : ''
        }`
      )
    }

    if (field.description) {
      comments.push(...field.description.split('\n'))
    }

    return this.generateComments(comments)
  }

  private generateField(field: SchemaField): string {
    const data = this.generateRef(field.type)

    return `${this.generateFieldComments(field)}${field.name}: ${
      field.args
        ? `[${data}, {${Object.entries(field.args)
            .map(([name, type]) => this.generateField({ name, type }))
            .join(',')}}]`
        : data
    }`
  }

  private generateType(type: SchemaType): string | void {
    switch (type.kind) {
      case 'OBJECT':
      case 'INPUT_OBJECT':
      case 'INTERFACE': {
        const fields = `{
          ${Object.values(type.fields)
            .map(field => this.generateField(field))
            .join(',')}
        }`
        if (type.kind === 'INTERFACE') {
          return `[${fields}, ${type.possibleTypes
            .map(type => JSON.stringify(type))
            .join(',')}]`
        }
        return fields
      }

      case 'UNION': {
        return `[${type.possibleTypes.map(type => JSON.stringify(type))}]`
      }
    }
  }
}
