import { Command, flags } from '@oclif/command'
import { get, post } from 'got'
import { QueryFetcher } from 'gqless'
import * as path from 'path'
import { generateSchema } from '../utils/generateSchema'
import { getConfig, Config } from '../utils/config';

export interface Flags {
  config?: string;
  header?: string[];
  url?: string;
  usePost: boolean;
  noComments: boolean;
  noPrettier: boolean;
  typescript: boolean;
}

const headersArrayToObject = (
  arr?: string[]
): Record<string, string> | undefined => {
  if (!arr) return;
  return arr
    .map(val => JSON.parse(val))
    .reduce((pre, next) => ({ ...pre, ...next }), {});
};

export default class Generate extends Command {
  static description = 'Generate a client from a GraphQL endpoint'

  static examples = [
    `$ gqless generate ./src/gqless -u https://example.com/graphql`,
    `$ gqless generate -c ./src/gqless.config.ts`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),

    config: flags.string({
      char: 'c',
      description: 'Path to your gqless config file'
    }),

    header: flags.string({
      multiple: true,
      parse: header => {
        const separatorIndex = header.indexOf(':');
        const key = header.substring(0, separatorIndex).trim();
        const value = header.substring(separatorIndex + 1).trim();
        return JSON.stringify({ [key]: value });
      },
      description: 'Additional header to send to server for introspectionQuery. May be used multiple times to add multiple headers.'
    }),

    noComments: flags.boolean({
      description: `don't output comments (only useful for IDE intellisense)`,
    }),
    noPrettier: flags.boolean({
      description: `don't run prettier on the resulting code`,
    }),

    url: flags.string({
      char: 'u',
      description: 'url to the GraphQL endpoint',
    }),

    typescript: flags.boolean({
      char: 't',
      description: 'output typescript (instead of javascript)',
    }),

    usePost: flags.boolean({
      description: 'use a POST request to retrieve the schema'
    })

  }

  static args = [{ name: 'output_dir' }]

  async run() {
    const { args, flags } = this.parse(Generate as any)

    const config = await this.createConfig(args, flags);

    if (!config.url) {
      this.error('The url to the graphql endpoints is missing. You can use the -u flag or provide it in the config file.');
    }

    if (!config.outputDir) {
      this.error('The output directory is missing. You can pass it to the command or include it in the config file.');
    }

    const fetchQuery: QueryFetcher = async (query, variables) => {
      const response = await (config.usePost ? post : get)(config.url as string, {
        headers: {
          'Content-Type': 'application/json',
          ...(config.headers || {})
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })
      return JSON.parse(response.body)
    }

    await generateSchema(fetchQuery, config as Config & {outputDir: string});
  }

  async createConfig(args: {output_dir?: string}, flags: Flags): Promise<Config> {
    let config: Config | null = null;
    try {
      config = await getConfig({
        configFileName: flags.config
      });
    } catch (error) {
      this.error(error.message);
    }

    const {header, ...rest} = flags;

    config = {
      ...(config || {}),
      ...rest
    };

    if (header) {
      config.headers = headersArrayToObject(header);
    }

    if (args.output_dir) {
      config.outputDir = args.output_dir;
    }

    if (config.outputDir) {
      config.outputDir = path.join(process.cwd(), config.outputDir);
    }

    return config;
  }
}
