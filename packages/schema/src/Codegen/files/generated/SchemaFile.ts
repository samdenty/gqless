import { SchemaType, Type, SchemaFieldArgs, SchemaField } from '../../../Schema'
import {
  ObjectNode,
  ArrayNode,
  ScalarNode,
  InputNode,
  InputNodeField,
  InterfaceNode,
  UnionNode,
  Arguments,
  ArgumentsField,
  FieldNode,
} from 'gqless'
import { File, UTILS, CORE } from '../../File'
import { Codegen } from '../../Codegen'

export const SCHEMA_VAR = 'schema'

export class SchemaFile extends File {
  constructor(private codegen: Codegen) {
    super('generated/schema')
  }

  public generate() {
    this.importAll(`./types`, 'types')
    this.importAll(`../extensions`, 'extensions')
    this.import(UTILS, 'lazyGetters')

    const body = `
      export const ${SCHEMA_VAR} = ${this.generateSchema()}

      lazyGetters(${SCHEMA_VAR})
    `

    return `
      ${super.generate()}

      ${body}
    `
  }

  private resolveType(name: string) {
    return `types.${name}`
  }

  private generateSchema() {
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
    return `${SCHEMA_VAR}.${name}`
  }

  private getExtension(name: string) {
    if (this.codegen.options.typescript) {
      return `(extensions as any).${name}`
    }

    return `extensions.${name}`
  }

  private generateFieldGetter(field: SchemaField) {
    this.import(CORE, FieldNode.name)

    return `get ${field.name}() {
      return new ${FieldNode.name}(${this.generateType(
      field.type
    )}, ${this.generateArguments(field.args)}, ${field.type.nullable})
    }`
  }

  private generateNode(type: SchemaType) {
    if (type.kind === 'OBJECT') {
      this.import(CORE, ObjectNode.name)

      return `new ${ObjectNode.name}<${this.resolveType(type.name)}>({
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
      this.import(CORE, ScalarNode.name)

      return `new ${ScalarNode.name}<${this.resolveType(
        type.name
      )}>({ name: ${JSON.stringify(type.name)}, extension: ${this.getExtension(
        type.name
      )} })`
    }

    if (type.kind === 'INPUT_OBJECT') {
      this.import(CORE, InputNode.name)

      return `new ${InputNode.name}<${this.resolveType(type.name)}>({
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
