import { Schema, SchemaType, Type, SchemaFieldArgs } from '../../TypeEngine'
import {
  ObjectNode,
  ArrayNode,
  ScalarNode,
  BooleanNode,
  StringNode,
  NumberNode,
  InputNode,
  InputNodeField,
} from '../nodes'
import { Arguments, ArgumentsField } from '../Arguments'
import { FieldNode } from '../FieldsNode'

/*
const types = {
  get String() {
    return new StringNode(null)
  },
  get ID() {
    return new StringNode(null)
  },
  get Int() {
    return new NumberNode(null)
  },
  get Float() {
    return new NumberNode(null)
  },
  get User() {
    return new ObjectNode(null, {
      get name() {
        return new ObjectNodeField(null, types.String)
      },
      get id() {
        return new ObjectNodeField(null, types.ID)
      },
      get age() {
        return new ObjectNodeField(null, types.Int)
      },
    })
  },
  get Query() {
    return new ObjectNode(null, {
      get users() {
        return new ObjectNodeField(null, new ArrayNode(null, types.User))
      },
      get me() {
        return new ObjectNodeField(null, types.User)
      },
    })
  },
}
*/

interface CodegenOptions {}

export class Codegen {
  public options: CodegenOptions

  constructor(private schema: Schema, options?: CodegenOptions) {
    this.options = {
      ...options,
    }
  }

  public generate() {
    return `const types = ${this.generateTypes()}`
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

  private generateNode(type: SchemaType) {
    if (type.kind === 'OBJECT')
      return `new ${ObjectNode.name}({
        ${Object.values(type.fields)
          .map(field => {
            // prettier-ignore
            const newField = `new ${FieldNode.name}(${this.generateType(field.type)}, ${this.generateArguments(field.args)}, ${field.type.nullable})`

            return `get ${field.name}() {
              return ${newField}
            }`
          })
          .join(',')}
      }, ${JSON.stringify({ name: type.name })})`

    if (type.kind === 'SCALAR') {
      // prettier-ignore
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
          .map(field => {
            // prettier-ignore
            const newField = `new ${InputNodeField.name}(${this.generateType(field.type)}, ${field.type.nullable})`

            return `get ${field.name}() {
              return ${newField}
            }`
          })
          .join(',')}
      }, ${JSON.stringify({ name: type.name })})`
    }
  }

  private generateType(type: Type) {
    return type.kind === 'LIST'
      ? // prettier-ignore
        `new ${ArrayNode.name}(${this.generateType(type.ofType)}, ${type.nullable})`
      : `types.${type.name}`
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
