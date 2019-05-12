import { SchemaType, Type, SchemaFieldArgs } from '../Schema'
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
import { File, UTILS, CORE } from './File'
import { Codegen } from './Codegen'
import { TypeOptionsFile, TYPE_OPTIONS_VAR } from './TypeOptionsFile'

export const TYPES_VAR = 'types'
export const TYPE_OPTIONS = 'ITypeOptions'

export class SchemaFile extends File {
  static path = 'schema'

  constructor(private codegen: Codegen) {
    super()
  }

  public generate() {
    this.addImports(`./${TypeOptionsFile.path}`, TYPE_OPTIONS_VAR)
    this.addImports(UTILS, 'lazyGetters')

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
    this.addImports(
      CORE,
      'DataProxy',
      'ScalarNode',
      'IScalarNodeOptions',
      'Node',
      'ObjectNode',
      'IObjectNodeOptions',
      'IInterfaceNodeOptions',
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

    type NodeOptions<T extends Node<any>> = T extends ScalarNode<any>
      ? IScalarNodeOptions
      : T extends ObjectNode<any, any, any>
      ? IObjectNodeOptions<T>
      : T extends InterfaceNode<any, any, any, infer Typename>
      ? IInterfaceNodeOptions<Typename>
      : never

    export type ${TYPE_OPTIONS} = {
      [K in keyof typeof ${TYPES_VAR}]?: NodeOptions<typeof ${TYPES_VAR}[K]>
    }`
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

  private getSchemaOption(name: string) {
    if (this.codegen.options.typescript) {
      // Typescript has a circular type problem, resulting in `any` for nodes
      // this fixes that.
      return `((${TYPE_OPTIONS_VAR} as any).${name} as {})`
    }

    return `${TYPE_OPTIONS_VAR}.${name}`
  }

  private generateNode(type: SchemaType) {
    if (type.kind === 'OBJECT') {
      this.addImports(CORE, ObjectNode.name)

      return `new ${ObjectNode.name}({
        ${Object.values(type.fields)
          .map(field => {
            this.addImports(CORE, FieldNode.name)

            return `get ${field.name}() {
              return new ${FieldNode.name}(${this.generateType(
              field.type
            )}, ${this.generateArguments(field.args)}, ${field.type.nullable})
            }`
          })
          .join(',')}
      }, { name: ${JSON.stringify(type.name)}, ...${this.getSchemaOption(
        type.name
      )} })`
    }

    if (type.kind === 'INTERFACE') {
      this.addImports(CORE, InterfaceNode.name)

      return `new ${InterfaceNode.name}({
        ${Object.values(type.fields)
          .map(field => {
            this.addImports(CORE, FieldNode.name)

            return `get ${field.name}() {
                return new ${FieldNode.name}(${this.generateType(
              field.type
            )}, ${this.generateArguments(field.args)}, ${field.type.nullable})
              }`
          })
          .join(',')}
      },
      [${type.possibleTypes.map(type => this.getNode(type)).join(',')}],
      { name: ${JSON.stringify(type.name)}, ...${this.getSchemaOption(
        type.name
      )} })`
    }

    if (type.kind === 'UNION') {
      this.addImports(CORE, UnionNode.name)

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

      this.addImports(CORE, className)

      return `new ${className}({ name: ${JSON.stringify(
        type.name
      )}, ...${this.getSchemaOption(type.name)} })`
    }

    if (type.kind === 'INPUT_OBJECT') {
      this.addImports(CORE, InputNode.name)

      return `new ${InputNode.name}({
        ${Object.values(type.inputFields)
          .map(field => {
            this.addImports(CORE, InputNodeField.name)

            return `get ${field.name}() {
              return new ${InputNodeField.name}(${this.generateType(
              field.type
            )}, ${field.type.nullable})
            }`
          })
          .join(',')}
      }, ${JSON.stringify({ name: type.name })})`
    }

    return null
  }

  private generateType(type: Type): string {
    this.addImports(CORE, ArrayNode.name)

    if (type.kind === 'LIST') {
      return `new ${ArrayNode.name}(${this.generateType(type.ofType)}, ${
        type.nullable
      })`
    }

    return this.getNode(type.name)
  }

  public generateArguments(args?: SchemaFieldArgs) {
    if (!args) return null

    this.addImports(CORE, Arguments.name)

    return `new ${Arguments.name}({
      ${Object.entries(args)
        .map(([name, type]) => {
          this.addImports(CORE, ArgumentsField.name)

          return `get ${name}() {
            return new ${ArgumentsField.name}(${this.generateType(type)}, ${
            type.nullable
          })}`
        })
        .join(',')}
    })`
  }
}
