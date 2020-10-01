import { Config } from '@gqless/cli'

const config: Config = {
  url: `https://api.github.com/graphql?access_token=${process.env.GITHUB_TOKEN}`,
  outputDir: './src/graphql',
}

export default config
