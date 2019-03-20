import { seed } from 'faker'
import {
  Source,
  parse,
  concatAST,
  buildASTSchema,
  execute,
} from 'graphql-faker/node_modules/graphql'
import * as fs from 'fs'
import * as path from 'path'
import { fakeSchema } from 'graphql-faker/dist/fake_schema'
import { DocumentNode, ExecutionResult } from 'graphql'
import gql from 'graphql-tag'

const readIDL = filepath =>
  new Source(fs.readFileSync(filepath, 'utf-8'), filepath)

const fakeDefinitionAST = parse(
  readIDL(
    path.join(
      __dirname,
      '../node_modules/graphql-faker/dist/fake_definition.graphql'
    )
  )
)

const idl = readIDL(path.join(__dirname, '../schema.faker.graphql'))
const schema = buildASTSchema(concatAST([parse(idl), fakeDefinitionAST]))
fakeSchema(schema)

export const executeQuery = <T extends ExecutionResult>(
  query: DocumentNode,
  randomnessSeed = 123
): Promise<T> => {
  seed(randomnessSeed)
  return execute(schema, query)
}
