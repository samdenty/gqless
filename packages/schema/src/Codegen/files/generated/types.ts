import { File, CORE } from '../../File'
import { Codegen } from '../../Codegen'
import {
  SchemaType,
  SchemaField,
  Type,
  SchemaInterfaceType,
  SchemaFieldArgs,
} from '../../../Schema'

const TYPE_PREFIX = 't_'

type TypeResolver = (name: string) => string

export class TypesFile extends File {
  constructor(private codegen: Codegen) {
    super('generated/types')
  }

  private createUniqueNames<TName extends string>(
    reservedNames: string[],
    names: TName[],
    makeUnique: (name: string) => string
  ) {
    const namesObj = {} as Record<TName, string>

    const uniqueName = (desiredName: string): string => {
      if (reservedNames.includes(desiredName))
        return uniqueName(makeUnique(desiredName))

      return desiredName
    }

    for (const name of names) {
      const chosenName = uniqueName(name)
      reservedNames.push(chosenName)

      namesObj[name] = chosenName
    }

    return namesObj
  }

  private typeNames = this.createUniqueNames(
    Object.keys(this.codegen.schema.types),
    Object.keys(this.codegen.schema.types),
    name => {
      return `${TYPE_PREFIX}${name}`
    }
  )

  private names = this.createUniqueNames(
    [
      ...Object.keys(this.codegen.schema.types),
      ...Object.values(this.typeNames),
    ],
    [
      'Extension',
      'EnumType',
      'FieldsType',
      'FieldsTypeArg',
      'ScalarType',
      'TypeData',
      'extensions',
    ],
    name => `gqless_${name}`
  )

  private typeReference = (name: string): string => {
    const schemaType = this.codegen.getSchemaType(name)

    if (schemaType.kind === 'INPUT_OBJECT') return name

    return this.typeNames[name]
  }

  private typeValue = (name: string) => {
    const type = this.codegen.getSchemaType(name)

    if (type.kind === 'SCALAR') {
      return this.defaultScalarType(type)
    }

    return type.name
  }

  public generate() {
    this.import(CORE, this.names.TypeData)
    this.importAll('../extensions', this.names.extensions)

    const body = Object.values(this.codegen.schema.types)
      .map(type => {
        const definition = this.generateSchemaType(type)
        if (!definition) return

        return this.generateComments(this.schemaTypeComments(type)) + definition
      })
      .filter(Boolean)
      .join('\n\n')

    return `
      ${super.generate()}

      type ${
        this.names.Extension
      }<TName extends string> = TName extends keyof typeof ${
      this.names.extensions
    }
        ? typeof ${this.names.extensions}[TName]
        : any

      ${body}

      ${Object.values(this.codegen.schema.types)
        .filter(type => type.kind !== 'INPUT_OBJECT')
        .map(
          type =>
            `${this.generateComments(
              this.schemaTypeComments(type)
            )}export type ${type.name} = ${
              this.names.TypeData
            }<${this.typeReference(type.name)}>`
        )
        .join('\n')}
    `
  }

  private schemaTypeComments(type: SchemaType) {
    const comments: string[] = [`@name ${type.name}`, `@type ${type.kind}`]

    if (type.kind === 'OBJECT' && type.interfaces.length) {
      comments.push(`@implements ${type.interfaces.join(', ')}`)
    }

    return comments
  }

  private generateComments(comments: string[]) {
    if (comments.length)
      return (
        `\n` +
        `/**\n` +
        ` * ${comments.join('\n* ').replace(/\*\//gm, '*\u200B/')}\n` +
        ` */\n`
      )

    return ''
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

  public generateSchemaType(type: SchemaType): string | undefined {
    switch (type.kind) {
      case 'SCALAR':
        return this.generateScalarType(type)

      case 'UNION':
      case 'INTERFACE':
        return `type ${this.typeReference(
          type.name
        )} = ${type.possibleTypes
          .map(name => this.typeReference(name))
          .join(' | ')}`

      case 'OBJECT': {
        this.import(CORE, this.names.FieldsType)

        return `type ${this.typeReference(type.name)} = ${
          this.names.FieldsType
        }<{\n${[
          `__typename: ${this.typeReference('String')}<'${type.name}'>`,
          ...Object.values(type.fields).map(field => this.generateField(field)),
        ].join('\n')}\n}, ${this.names.Extension}<'${type.name}'>>`
      }

      case 'INPUT_OBJECT':
        return `export type ${this.typeReference(type.name)} = {${Object.values(
          type.inputFields
        )
          .map(field => this.generateField(field, this.typeValue))
          .join('\n')}}`

      case 'ENUM': {
        this.import(CORE, this.names.EnumType)

        return `type ${this.typeReference(type.name)} = ${
          this.names.EnumType
        }<${type.enumValues.map(value => `'${value}'`).join(' | ')}>`
      }

      default:
        return
    }
  }

  public generateArgs(args: SchemaFieldArgs) {
    return `{${Object.entries(args)
      .map(([name, type]) => {
        const NULLABLE = type.nullable ? '?' : ''

        return `${name}${NULLABLE}: ${this.generateType(type, this.typeValue)}`
      })
      .join(',')}}`
  }

  public generateField(field: SchemaField, resolveType?: TypeResolver) {
    const NULLABLE = field.type.nullable ? '?' : ''
    const fieldType = this.generateType(field.type, resolveType)

    if (field.args) this.import(CORE, this.names.FieldsTypeArg)

    return `${this.generateFieldComments(field)}${field.name}${NULLABLE}: ${
      field.args
        ? `${this.names.FieldsTypeArg}<${this.generateArgs(
            field.args
          )}, ${fieldType}>`
        : fieldType
    }`
  }

  public generateType(type: Type, resolveType = this.typeReference): string {
    const nullType = type.nullable ? '| undefined | null' : ''

    switch (type.kind) {
      case 'OBJECT':
      case 'ENUM':
      case 'INPUT_OBJECT':
      case 'UNION':
      case 'INTERFACE':
      case 'SCALAR':
        return `${resolveType(type.name)}${nullType}`

      case 'LIST':
        return `(${this.generateType(type.ofType, resolveType)})[]${nullType}`

      default:
        return 'any'
    }
  }

  public defaultScalarType(scalar: SchemaType) {
    switch (scalar.name) {
      case 'ID':
      case 'String':
      case 'Date':
      case 'URI':
        return `string`

      case 'Int':
      case 'Float':
        return `number`

      case 'Boolean':
        return `boolean`

      case 'JSON':
        return `{ [K: string]: any }`
    }
    return 'any'
  }

  public generateScalarType(scalar: SchemaType) {
    this.import(CORE, this.names.ScalarType)

    const type = this.defaultScalarType(scalar)

    return `type ${this.typeReference(
      scalar.name
    )}<T extends ${type} = ${type}> = ${this.names.ScalarType}<T, ${
      this.names.Extension
    }<'${scalar.name}'>>`
  }
}
