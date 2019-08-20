import { Command, flags } from '@oclif/command'
import { Codegen, fetchSchema } from '@gqless/schema'
import { get } from 'got'
import { print } from 'graphql'
import { QueryFetcher } from 'gqless'
import * as fs from 'fs'
import * as prettier from 'prettier'
import * as mkdirp from 'mkdirp'
import * as path from 'path'
import { generateSchema } from '../generateSchema'

export default class Generate extends Command {
  static description = 'generate a client from a GraphQL endpoint'

  static examples = [
    `$ gqless generate https://example.com/graphql
`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),

    noComments: flags.boolean({
      description: `don't output comments (only useful for IDE intellisense)`,
    }),
    noPrettier: flags.boolean({
      description: `don't run prettier on the resulting code`,
    }),

    url: flags.string({
      char: 'u',
      description: 'url to the GraphQL endpoint',
      required: true,
    }),

    typescript: flags.boolean({
      char: 't',
      description: 'output typescript (instead of javascript)',
    }),
  }

  static args = [{ name: 'output_dir', required: true }]

  async run() {
    const { args, flags } = this.parse(Generate)

    const fetchQuery: QueryFetcher = async query => {
      const response = await get(flags.url, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: print(query),
        }),
      })
      return JSON.parse(response.body)
    }

    await generateSchema(fetchQuery, {
      ...flags,
      outputDir: path.join(process.cwd(), args.output_dir),
    })
  }
}
