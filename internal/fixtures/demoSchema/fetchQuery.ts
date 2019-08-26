// @ts-ignore
import { seed } from 'faker'
import {
  Source,
  parse,
  concatAST,
  buildASTSchema,
  execute,
  // @ts-ignore
} from 'graphql-faker/node_modules/graphql'
import * as fs from 'fs'
import * as path from 'path'
// @ts-ignore
import { fakeSchema } from 'graphql-faker/dist/fake_schema'
import { DocumentNode } from 'graphql'

const SEED = 123

const readIDL = (filepath: string) =>
  new Source(fs.readFileSync(filepath, 'utf-8'), filepath)

const fakeDefinitionAST = parse(
  readIDL(require.resolve('graphql-faker/dist/fake_definition.graphql'))
)

const idl = readIDL(path.join(__dirname, './demoSchema.graphql'))
const schema = buildASTSchema(concatAST([parse(idl), fakeDefinitionAST]))
fakeSchema(schema)

export const fetchQuery = (query: DocumentNode, variables: any): any => {
  seed(SEED)
  return execute(schema, query, undefined, undefined, variables)
}
