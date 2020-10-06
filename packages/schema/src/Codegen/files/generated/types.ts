import { File } from '../../File'
import { Codegen } from '../../Codegen'
import _ from 'lodash'
import { SCHEMA_VAR } from './schema'

export class TypesFile extends File {
  constructor(private codegen: Codegen) {
    super('generated/types.d')
  }

  public generate() {
    this.import(`gqless`, 'TypeData')
    this.import(`./schema`, SCHEMA_VAR)
    const types = Object.values(this.codegen.schema.types)

    const body = `
      /**
       * Utility type to convert a GraphQL type string into a Typescript type
       * @example
       *
       *   _<'User'>     ->  User | null
       *   _<'User!'>    ->  User
       *   _<'[User]!'>  ->  (User | null)[]
       */
      type _<Name extends string> = TypeData<typeof ${SCHEMA_VAR}, Name, TypeCache>;

      interface TypeCache {${types
        .map(
          type =>
            `${type.name}: ${
              type.kind === 'ENUM'
                ? `_<${this.generateRef(type)}, false, false>`
                : type.name
            }`
        )
        .join(',')}}

      ${types
        .map(type => {
          if (type.kind === 'ENUM') {
            return
          }

          const TypeData =
            type.kind === 'INPUT_OBJECT' ? 'NamedInputData' : 'NamedTypeData'

          this.import('gqless', TypeData)

          const body = `${TypeData}<typeof ${SCHEMA_VAR}, ${JSON.stringify(
            type.name
          )}, TypeCache, false>`

          return `${this.generateTypeComments(type)}${
            type.kind === 'UNION' || type.kind === 'SCALAR'
              ? `type ${type.name} = ${body}`
              : `interface ${type.name} extends ${body} {}`
          }`
        })
        .filter(Boolean)
        .join('\n')}
    `

    return `${super.generate()}\n${body}`
  }
}
