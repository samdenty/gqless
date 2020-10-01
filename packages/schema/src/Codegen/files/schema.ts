import { SchemaType, SchemaField, ListType, ObjectType } from '../../Schema'
import { File } from '../File'
import { Codegen } from '../Codegen'
import _ from 'lodash'

export const SCHEMA_VAR = 'schema'

export class SchemaFile extends File {
  constructor(private codegen: Codegen) {
    super('schema')
  }

  private generateComments(comments: string[]) {
    if (comments.length) {
      const text = comments.join('\n* ').replace(/\*\//gm, '*\u200B/')
      return (
        `\n` + `/**${comments.length > 1 ? `\n * ${text}\n` : ` ${text}`} */\n`
      )
    }

    return ''
  }

  public generate() {
    this.import(`gqless`, 'TypeData', 'createSchema')
    this.importAll(`./extensions`, 'extensions')

    const body = `
      ${Object.values(this.codegen.schema.types)
        .map(type => {
          if (type.kind === 'ENUM') {
            return `\nexport enum ${type.name} {${type.enumValues.join(',\n')}}`
          }

          return `${this.generateTypeComments(type)}export type ${
            type.name
          } = TypeData<typeof ${SCHEMA_VAR}, ${this.generateRef(type)}>`
        })
        .filter(Boolean)
        .join('\n')}

      export const ${SCHEMA_VAR} = createSchema({
        ${Object.values(this.codegen.schema.types)
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

    return `
      ${super.generate()}

      ${body}
    `
  }

  private generateTypeComments(type: SchemaType, includeName?: boolean) {
    const comments: string[] = [`@type ${_.upperFirst(_.camelCase(type.kind))}`]

    if (includeName) {
      comments.unshift(`@name ${type.name}`)
    }

    if (type.kind === 'OBJECT' && type.interfaces.length) {
      comments.push(`@implements ${type.interfaces.join(', ')}`)
    }

    return this.generateComments(comments)
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

  private generateRef(
    type: ListType | { name: string; nullable?: boolean },
    quote = true
  ): string {
    let value: string
    if ('kind' in type && type.kind === 'LIST') {
      value = `[${this.generateRef(type.ofType, false)}]${
        type.nullable ? '' : '!'
      }`
    } else {
      value = `${(type as ObjectType).name}${type.nullable ? '' : '!'}`
    }

    return quote ? JSON.stringify(value) : value
  }
}
