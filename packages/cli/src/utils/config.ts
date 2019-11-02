const cosmiconfig = require('cosmiconfig')
import TypeScriptLoader from '@endemolshinegroup/cosmiconfig-typescript-loader'
import { resolve, parse } from 'path'
import { invariant } from '@gqless/utils'

export interface Config {
  config?: string
  headers?: Record<string, string>
  url?: string
  outputDir?: string
  usePost?: boolean
  comments?: boolean
  typescript?: boolean
}

const MODULE_NAME = 'gqless'
const defaultFileNames = [
  'package.json',
  `.${MODULE_NAME}rc`,
  `.${MODULE_NAME}rc.json`,
  `.${MODULE_NAME}rc.yaml`,
  `.${MODULE_NAME}rc.yml`,
  `${MODULE_NAME}.config.js`,
  `${MODULE_NAME}.config.ts`,
]

const loaders = {
  '.json': cosmiconfig.loadJson,
  '.yaml': cosmiconfig.loadYaml,
  '.yml': cosmiconfig.loadYaml,
  '.js': cosmiconfig.loadJs,
  '.ts': {
    async: TypeScriptLoader,
  },
  noExt: cosmiconfig.loadYaml
}

export const getConfig = async (path?: string) => {
  const configPath = path && parse(resolve(path)).dir
  const explorer = cosmiconfig(MODULE_NAME, {
    searchPlaces: path ? [path] : defaultFileNames,
    loaders,
  })

  let loadedConfig
  try {
    loadedConfig = await explorer.search(configPath)
  } catch (error) {
    throw new Error(`A config file failed to load: ${error}`)
  }

  invariant(
    !(configPath && !loadedConfig),
    `A config file failed to load at ${configPath}. This is likely because this file is empty or malformed.`
  )

  return loadedConfig?.config as Config | null
}
