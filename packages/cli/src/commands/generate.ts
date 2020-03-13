import { Command, flags } from '@oclif/command'
import got from 'got'
import { QueryFetcher } from 'gqless'
import * as path from 'path'
import { generateSchema } from '../utils/generateSchema'
import { getConfig, Config } from '../utils/config'
import { invariant } from '@gqless/utils'

const headersArrayToObject = (
  arr?: string[]
): Record<string, string> | undefined => {
  if (!arr) return
  return arr
    .map(val => JSON.parse(val))
    .reduce((pre, next) => ({ ...pre, ...next }), {})
}

export default class Generate extends Command {
  static description = 'Generate a client from a GraphQL endpoint'

  static examples = [
    `$ gqless generate ./src/gqless -u https://example.com/graphql`,
    `$ gqless generate -c gqless.config.ts`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),

    config: flags.string({
      char: 'c',
      description: 'Path to your gqless config file',
    }),

    header: flags.string({
      multiple: true,
      parse: header => {
        const separatorIndex = header.indexOf(':')
        const key = header.substring(0, separatorIndex).trim()
        const value = header.substring(separatorIndex + 1).trim()
        return JSON.stringify({ [key]: value })
      },
      description:
        'Additional header to send to server for introspectionQuery. May be used multiple times to add multiple headers.',
    }),

    comments: flags.boolean({
      description: `output comments to type definitions (useful for IDE intellisense)`,
      default: true,
    }),

    url: flags.string({
      char: 'u',
      description: 'url to the GraphQL endpoint',
    }),

    typescript: flags.boolean({
      char: 't',
      description: 'output typescript (instead of javascript)',
      default: true,
    }),

    usePost: flags.boolean({
      description: 'use a POST request to retrieve the schema',
    }),
  }

  static args = [{ name: 'output_dir' }]

  async run() {
    const config = await this.createConfig()

    const fetchQuery: QueryFetcher = async (query, variables) => {
      const response = await (config.usePost ? got.post : got.get)(
        config.url as string,
        {
          headers: {
            'Content-Type': 'application/json',
            ...config.headers,
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        }
      )
      return JSON.parse(response.body)
    }

    await generateSchema(fetchQuery, config as Config & { outputDir: string })
  }

  async createConfig(): Promise<Config> {
    const { args, flags } = this.parse(Generate)

    const { header, ...rest } = flags
    let config: Config
    try {
      config = (await getConfig(flags.config)) || ({} as any)
    } catch (error) {
      this.error(error.message)
    }

    Object.assign(config, rest)

    if (header) {
      config.headers = headersArrayToObject(header as any)
    }

    if (args.output_dir) {
      config.outputDir = args.output_dir
    }

    invariant(
      config.outputDir,
      'The output directory is missing. You can pass it to the command or include it in the config file.'
    )

    config.outputDir = path.join(process.cwd(), config.outputDir)

    invariant(
      config.url,
      'The url to the graphql endpoints is missing. You can use the -u flag or provide it in the config file.'
    )

    return config
  }
}
