import { File } from '../../File'
import { Codegen } from '../../Codegen'
import {
  SchemaType,
  SchemaField,
  Type,
  SchemaInterfaceType,
  SchemaFieldArgs,
} from '../../../Schema'

const extensions = 'gql_extensions'
const Scalar = 'gql_Scalar'
const ExtensionData = 'gql_ExtensionData'
const FieldsExtension = 'gql_FieldsExtension'
const MergeExtension = 'gql_MergeExtension'
const BothObject = 'gql_BothObject'

export class TypesFile extends File {
  constructor(private codegen: Codegen) {
    super('generated/types')
  }

  public generate() {
    this.importAll('../extensions', extensions)

    const body = Object.values(this.codegen.schema.types)
      .map(type => {
        const definition = this.generateSchemaType(type)

        return definition ? `export ${definition}` : ''
      })
      .join('\n\n')

    return `
      ${super.generate()}

      type ${ExtensionData}<TExtension> = TExtension extends (...args: any[]) => infer U ? U : TExtension

      type ${Scalar}<
        TName extends string,
        TDefaultType
      > = TName extends keyof typeof ${extensions}
        ? ${ExtensionData}<typeof ${extensions}[TName]>
        : TDefaultType

      type ${BothObject}<A, B, Y, N> = A extends object
        ? B extends object
          ? Y
          : N
        : N

      type ${MergeExtension}<TExtension, TType> = ${BothObject}<
        TExtension,
        TType,
        Omit<TType, keyof TExtension> &
          {
            [K in keyof TExtension]: K extends keyof TType
              ? ${MergeExtension}<${ExtensionData}<TExtension[K]>, TType[K]>
              : ${ExtensionData}<TExtension[K]>
          },
        TExtension
      >

      type ${FieldsExtension}<
        TName extends string,
        TType
      > = TName extends keyof typeof ${extensions}
        ? ${MergeExtension}<gql_ExtensionData<typeof ${extensions}[TName]>, TType>
        : TType

      ${body}
    `
  }

  private generateFieldComment(field: SchemaField) {
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

    if (comments.length) {
      return (
        `\n` +
        `/**\n` +
        ` * ${comments.join('\n* ').replace(/\*\//gm, '*\u200B/')}\n` +
        ` */\n`
      )
    }

    return ''
  }

  public generateSchemaType(type: SchemaType): string | undefined {
    switch (type.kind) {
      case 'SCALAR':
        return this.generateScalarType(type)

      case 'UNION':
        return `type ${type.name} = ${type.possibleTypes.join(' | ')}`

      case 'INTERFACE':
      case 'OBJECT':
        return `type ${type.name} = ${FieldsExtension}<'${
          type.name
        }', {\n${Object.values(type.fields)
          .map(field => this.generateField(field))
          .join('\n')}\n}>`

      case 'INPUT_OBJECT':
        return `interface ${type.name} {${Object.values(type.inputFields)
          .map(field => this.generateField(field))
          .join('\n')}}`

      default:
        return
    }
  }

  public generateArgs(args: SchemaFieldArgs) {
    return `{${Object.entries(args)
      .map(([name, type]) => {
        const NULLABLE = type.nullable ? '?' : ''

        return `${name}${NULLABLE}: ${this.generateType(type, false)}`
      })
      .join(',')}}`
  }

  public generateField(field: SchemaField) {
    const dataWithoutFnCall =
      field.type.kind !== 'SCALAR' &&
      field.args &&
      !Object.values(field.args).find(field => field.nullable === false)

    const couldBeNull = !field.args

    const NULLABLE = field.type.nullable && couldBeNull ? '?' : ''
    const ARGS = field.args
      ? `(args: ${this.generateArgs(field.args)}) => `
      : ''

    const FN_TYPE = `${ARGS}${this.generateType(field.type, !couldBeNull)}`

    return `${this.generateFieldComment(field)}${field.name}${NULLABLE}: ${
      dataWithoutFnCall
        ? `(${FN_TYPE}) & ${this.generateType(field.type, false)}`
        : FN_TYPE
    }`
  }

  public generateType(type: Type, includeNullType = true): string {
    const nullType = type.nullable && includeNullType ? ' | null' : ''

    switch (type.kind) {
      case 'OBJECT':
      case 'ENUM':
      case 'INPUT_OBJECT':
      case 'UNION':
      case 'SCALAR':
        return `${type.name}${nullType}`

      case 'INTERFACE':
        return `${(this.codegen.getSchemaType(
          type.name
        ) as SchemaInterfaceType).possibleTypes.join(' | ')}${nullType}`

      case 'LIST':
        return `(${this.generateType(type.ofType)})[]${nullType}`

      default:
        return 'any'
    }
  }

  public generateScalarType(scalar: SchemaType) {
    const type = (() => {
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
          return `{ [K: string]: ${scalar.name} }`
      }
      return 'any'
    })()

    return `type ${scalar.name} = ${Scalar}<'${scalar.name}', ${type}>`
  }
}
