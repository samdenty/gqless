import { SchemaType, Type, SchemaFieldArgs, SchemaField } from '../../../Schema'
import {
  ObjectNode,
  ArrayNode,
  ScalarNode,
  BooleanNode,
  StringNode,
  NumberNode,
  InputNode,
  InputNodeField,
  InterfaceNode,
  UnionNode,
  Arguments,
  ArgumentsField,
  FieldNode,
} from 'graphql-builder'
import { File, UTILS, CORE } from '../../File'
import { Codegen } from '../../Codegen'

export const TYPES_VAR = 'types'

export class SchemaFile extends File {
  constructor(private codegen: Codegen) {
    super('generated/schema')
  }

  public generate() {
    this.importAll(`../extensions`, 'extensions')
    this.import(UTILS, 'lazyGetters')

    const body = `
      export const ${TYPES_VAR} = ${this.generateTypes()}

      lazyGetters(${TYPES_VAR})

      ${this.codegen.options.typescript ? this.generateTypescriptExports() : ''}
    `

    return `
      ${super.generate()}

      ${body}
    `
  }

  private generateTypescriptExports() {
    this.import(
      CORE,
      'DataProxy',
      'ScalarNode',
      'Node',
      'ObjectNode',
      'InterfaceNode'
    )

    return `
    ${Object.values(this.codegen.schema.types)
      .map(
        type =>
          `export type ${type.name} = DataProxy<typeof ${this.getNode(
            type.name
          )}>`
      )
      .join('\n')}
    `
  }

  private generateTypes() {
    return `{
      ${Object.values(this.codegen.schema.types)
        .map(
          type => `get ${type.name}() {
            return ${this.generateNode(type)}
          }`
        )
        .join(',')}
    }`
  }

  private getNode(name: string) {
    return `${TYPES_VAR}.${name}`
  }

  private getExtension(name: string) {
    if (this.codegen.options.typescript) {
      // Typescript has a circular type problem, resulting in `any` for nodes
      // this fixes that.
      return `((extensions as any).${name} as any)`
    }

    return `extensions.${name}`
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

  private generateFieldGetter(field: SchemaField) {
    this.import(CORE, FieldNode.name)

    return (
      this.generateFieldComment(field) +
      `get ${field.name}() {
      return new ${FieldNode.name}(${this.generateType(
        field.type
      )}, ${this.generateArguments(field.args)}, ${field.type.nullable})
    }`
    )
  }

  private generateNode(type: SchemaType) {
    if (type.kind === 'OBJECT') {
      this.import(CORE, ObjectNode.name)

      return `new ${ObjectNode.name}({
        ${Object.values(type.fields)
          .map(field => this.generateFieldGetter(field))
          .join(',')}
      }, { name: ${JSON.stringify(type.name)}, extension: ${this.getExtension(
        type.name
      )} })`
    }

    if (type.kind === 'INTERFACE') {
      this.import(CORE, InterfaceNode.name)

      return `new ${InterfaceNode.name}({
        ${Object.values(type.fields)
          .map(field => this.generateFieldGetter(field))
          .join(',')}
      },
      [${type.possibleTypes.map(type => this.getNode(type)).join(',')}],
      { name: ${JSON.stringify(type.name)}, extension: ${this.getExtension(
        type.name
      )} })`
    }

    if (type.kind === 'UNION') {
      this.import(CORE, UnionNode.name)

      return `new ${UnionNode.name}([${type.possibleTypes.map(type =>
        this.getNode(type)
      )}])`
    }

    if (type.kind === 'SCALAR') {
      const className =
        type.name === 'Int' || type.name === 'Float'
          ? NumberNode.name
          : type.name === 'ID' || type.name === 'String'
          ? StringNode.name
          : type.name === 'Boolean'
          ? BooleanNode.name
          : ScalarNode.name

      this.import(CORE, className)

      return `new ${className}({ name: ${JSON.stringify(
        type.name
      )}, extension: ${this.getExtension(type.name)} })`
    }

    if (type.kind === 'INPUT_OBJECT') {
      this.import(CORE, InputNode.name)

      return `new ${InputNode.name}({
        ${Object.values(type.inputFields)
          .map(field => {
            this.import(CORE, InputNodeField.name)

            return `get ${field.name}() {
              return new ${InputNodeField.name}(${this.generateType(
              field.type
            )}, ${field.type.nullable})
            }`
          })
          .join(',')}
      }, ${JSON.stringify({ name: type.name })})`
    }

    return undefined
  }

  private generateType(type: Type): string {
    this.import(CORE, ArrayNode.name)

    if (type.kind === 'LIST') {
      return `new ${ArrayNode.name}(${this.generateType(type.ofType)}, ${
        type.nullable
      })`
    }

    return this.getNode(type.name)
  }

  public generateArguments(args?: SchemaFieldArgs) {
    if (!args) return undefined

    this.import(CORE, Arguments.name)

    return `new ${Arguments.name}({
      ${Object.entries(args)
        .map(([name, type]) => {
          this.import(CORE, ArgumentsField.name)

          return `get ${name}() {
            return new ${ArgumentsField.name}(${this.generateType(type)}, ${
            type.nullable
          })}`
        })
        .join(',')}
    })`
  }
}
