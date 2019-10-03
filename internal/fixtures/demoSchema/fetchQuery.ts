// @ts-ignore
import { seed } from 'faker'
import { parse, buildASTSchema, execute } from 'graphql'
import * as fs from 'fs'
import * as path from 'path'
// @ts-ignore
import { mergeWithFakeDefinitions } from 'graphql-faker/dist/fake_definition'
import {
  fakeTypeResolver,
  fakeFieldResolver,
  // @ts-ignore
} from 'graphql-faker/dist/fake_schema'
import { QueryFetcher } from 'gqless'

const SEED = 123

const idl = fs.readFileSync(
  path.join(__dirname, './demoSchema.graphql'),
  'utf-8'
)
const schema = buildASTSchema(mergeWithFakeDefinitions(parse(idl)))

export const fetchQuery: QueryFetcher = async (
  query: string,
  variables?: any
): Promise<any> => {
  seed(SEED)
  const response = await execute(
    schema,
    parse(query),
    undefined,
    undefined,
    variables,
    undefined,
    fakeFieldResolver,
    fakeTypeResolver
  )

  // Fix null prototype
  return JSON.parse(JSON.stringify(response))
}
