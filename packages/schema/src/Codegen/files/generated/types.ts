import {
  SchemaEnumType,
  SchemaField,
  SchemaFieldArgs,
  SchemaType,
  Type,
} from '../../../Schema'
import { Codegen } from '../../Codegen'
import { CORE, File } from '../../File'

const TYPE_PREFIX = 't_'

type TypeResolver = (name: string) => string

export class TypesFile extends File {
  constructor(
    private codegen: Codegen,
    private typeName: string,
    private types: SchemaType[],
    private otherTypes: { [key: string]: SchemaType[] }
  ) {
    super(`generated/${typeName}`)
  }

  private createUniqueNames<TName extends string>(
    reservedNames: string[],
    names: TName[],
    makeUnique: (name: string) => string
  ) {
    const namesObj = {} as Record<TName, string>

    const uniqueName = (desiredName: string): string => {
      if (reservedNames.includes(desiredName)) {
        return uniqueName(makeUnique(desiredName))
      }
      return desiredName
    }

    for (const name of names) {
      const chosenName = uniqueName(name)
      reservedNames.push(chosenName)
      namesObj[name] = chosenName
    }

    return namesObj
  }

  private didImportStringType = false

  private typeNames = this.createUniqueNames(
    Object.keys(this.codegen.schema.types),
    Object.keys(this.codegen.schema.types),
    (name) => `${TYPE_PREFIX}${name}`
  )

  public names = this.createUniqueNames(
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
    (name) => `gqless_${name}`
  )

  private typeReference = (name: string): string => {
    const schemaType = this.codegen.getSchemaType(name)
    if (schemaType.kind === 'INPUT_OBJECT') {
      return name
    }
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

    // import extensionsTypes
    this.import('./extensionsTypes', this.names.Extension)

    const body = Object.values(this.types)
      .map((type) => {
        const definition = this.generateSchemaType(type)
        if (!definition) return
        return this.generateComments(this.schemaTypeComments(type)) + definition
      })
      .filter(Boolean)
      .join('\n\n')

    this.addAllUsedImports()

    return `
      ${super.generate()}

      ${body}

      ${Object.values(this.types)
        .filter((type) => type.kind !== 'INPUT_OBJECT')
        .map((type) =>
          type.kind === 'ENUM'
            ? `${this.generateComments(
                this.schemaTypeComments(type)
              )}export enum ${type.name} { \n
          ${(type as SchemaEnumType).enumValues.map((k) => `${k} = '${k}' \n`)}
          }`
            : `${this.generateComments(
                this.schemaTypeComments(type)
              )}export type ${type.name} = ${
                this.names.TypeData
              }<${this.typeReference(type.name)}>`
        )
        .join('\n')}
    `
  }

  private addAllUsedImports() {
    const getAllValidImportedNames = (type: SchemaType) => {
      let names: string[] = []
      for (const key in type) {
        if (key === 'kind') continue
        if (key === 'name') {
          if (!('kind' in type)) continue
          try {
            const otherName = this.typeReference(type.name)
            const isDefinedInThisFile = this.types.find(
              (x) => this.typeReference(x.name) === otherName
            )
            if (isDefinedInThisFile) {
              continue
            }
            const outType = this.typeValue(type.name)
            // this is broken, but i'm confused on behavior and this fixes it
            const final =
              type.kind === 'ENUM'
                ? type.name
                : type.name == outType
                ? otherName
                : type.kind === 'SCALAR'
                ? otherName
                : type.name
            if (final) {
              // this.log('adding', final)
              names.push(final)
            }
            continue
          } catch (err) {
            continue
          }
        }
        const val = (type as any)[key]
        if (Array.isArray(val)) {
          continue
        }
        names = [...names, ...getAllValidImportedNames((type as any)[key])]
      }
      return names
    }

    const foundImports = this.types
      .map((type) => getAllValidImportedNames(type))
      .flat()
    if (this.didImportStringType) {
      foundImports.push(this.typeReference('String'))
    }
    const validImports = [...new Set(foundImports)]

    const importsByFile = validImports.reduce((acc, importName) => {
      for (const key in this.otherTypes) {
        if (
          this.otherTypes[key].some(
            (x) =>
              this.typeNames[x.name] === importName || x.name === importName
          )
        ) {
          acc[key] = acc[key] || []
          acc[key].push(importName)
        }
      }
      return acc
    }, {} as any)

    // add imports
    for (const filename in importsByFile) {
      this.import(`./${filename}`, importsByFile[filename])
    }
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
        return `export type ${this.typeReference(
          type.name
        )} = ${type.possibleTypes
          .map((name) => this.typeReference(name))
          .join(' | ')}`

      case 'OBJECT': {
        this.import(CORE, this.names.FieldsType)
        this.didImportStringType = true
        return `export type ${this.typeReference(type.name)} = ${
          this.names.FieldsType
        }<{\n${[
          `__typename: ${this.typeReference('String')}<'${type.name}'>`,
          ...Object.values(type.fields).map((field) =>
            this.generateField(field)
          ),
        ].join('\n')}\n}, ${this.names.Extension}<'${type.name}'>>`
      }

      case 'INPUT_OBJECT':
        return `export type ${this.typeReference(type.name)} = {${Object.values(
          type.inputFields
        )
          .map((field) => this.generateField(field, this.typeValue))
          .join('\n')}}`

      case 'ENUM': {
        this.import(CORE, this.names.EnumType)

        return `export type ${this.typeReference(type.name)} = ${
          this.names.EnumType
        }<${type.enumValues.map((value) => `'${value}'`).join(' | ')}>`
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

    if (field.args) {
      this.import(CORE, this.names.FieldsTypeArg)
    }

    return `${this.generateFieldComments(field)}${field.name}${NULLABLE}: ${
      field.args
        ? `${this.names.FieldsTypeArg}<${this.generateArgs(
            field.args
          )}, ${fieldType}>`
        : fieldType
    }`
  }

  public generateType(type: Type, resolveType = this.typeReference): string {
    const nullType = type.nullable ? '| null' : ''

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

    return `export type ${this.typeReference(
      scalar.name
    )}<T extends ${type} = ${type}> = ${this.names.ScalarType}<T, ${
      this.names.Extension
    }<'${scalar.name}'>>`
  }
}
