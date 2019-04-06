import {
  Schema,
  SchemaType,
  Type,
  SchemaFieldArgs,
  SchemaField,
} from '../../TypeEngine'
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
} from '../Node'

interface CodegenOptions {
  variableName?: string
  typescript?: boolean
}

export class Codegen {
  public options: CodegenOptions

  constructor(private schema: Schema, options?: CodegenOptions) {
    this.options = {
      variableName: 'nodes',
      typescript: true,
      ...options,
    }
  }

  public generate() {
    return `
      export const ${this.options.variableName} = ${this.generateTypes()}

      lazyGetters(${this.options.variableName})

      ${this.options.typescript ? this.generateTypescriptExports() : ''}
    `
  }

  private generateTypescriptExports() {
    return Object.values(this.schema.types)
      .map(
        type =>
          `export type ${type.name} = DataProxy<typeof ${this.getNode(
            type.name
          )}>`
      )
      .join('\n')
  }

  private generateTypes() {
    return `{
      ${Object.values(this.schema.types)
        .map(
          type => `get ${type.name}() {
            return ${this.generateNode(type)}
          }`
        )
        .join(',')}
    }`
  }

  private getNode(name: string) {
    return `${this.options.variableName}.${name}`
  }

  private generateNode(type: SchemaType) {
    if (type.kind === 'OBJECT')
      return `new ${ObjectNode.name}({
        ${Object.values(type.fields)
          .map(field => {
            // prettier-ignore
            return `get ${field.name}() {
              return new ${FieldNode.name}(${this.generateType(field.type)}, ${this.generateArguments(field.args)}, ${field.type.nullable})
            }`
          })
          .join(',')}
      }, ${JSON.stringify({ name: type.name })})`

    if (type.kind === 'INTERFACE') {
      return `new ${InterfaceNode.name}({
        ${Object.values(type.fields)
          .map(
            // prettier-ignore
            field => `get ${field.name}() {
              return new ${FieldNode.name}(${this.generateType(field.type)}, ${this.generateArguments(field.args)}, ${field.type.nullable})
            }`
          )
          .join(',')}
      },
      [${type.possibleTypes.map(type => this.getNode(type)).join(',')}],
      ${JSON.stringify({ name: type.name })})`
    }

    if (type.kind === 'UNION') {
      return `new ${UnionNode.name}([${type.possibleTypes.map(type =>
        this.getNode(type)
      )}])`
    }

    if (type.kind === 'SCALAR') {
      return type.name === 'Int' || type.name === 'Float'
        ? `new ${NumberNode.name}(${JSON.stringify({ name: type.name })})`
        : type.name === 'ID' || type.name === 'String'
        ? `new ${StringNode.name}(${JSON.stringify({ name: type.name })})`
        : type.name === 'Boolean'
        ? `new ${BooleanNode.name}(${JSON.stringify({ name: type.name })})`
        : `new ${ScalarNode.name}(${JSON.stringify({ name: type.name })})`
    }

    if (type.kind === 'INPUT_OBJECT') {
      return `new ${InputNode.name}({
        ${Object.values(type.inputFields)
          .map(
            // prettier-ignore
            field => `get ${field.name}() {
              return new ${InputNodeField.name}(${this.generateType(field.type)}, ${field.type.nullable})
            }`
          )
          .join(',')}
      }, ${JSON.stringify({ name: type.name })})`
    }
  }

  private generateType(type: Type) {
    return type.kind === 'LIST'
      ? `new ${ArrayNode.name}(${this.generateType(type.ofType)}, ${
          type.nullable
        })`
      : this.getNode(type.name)
  }

  public generateArguments(args: SchemaFieldArgs) {
    if (!args) return null

    return `new ${Arguments.name}({
      ${Object.entries(args)
        .map(
          // prettier-ignore
          ([name, type]) => `get ${name}() {
            return new ${ArgumentsField.name}(${this.generateType(type)}, ${type.nullable})
          }`
        )
        .join(',')}
    })`
  }
}
