import { cosmiconfig, defaultLoaders } from 'cosmiconfig'
import TypeScriptLoader from '@endemolshinegroup/cosmiconfig-typescript-loader'
import { resolve, parse } from 'path'
import { invariant } from '@gqless/utils'
import { Loaders } from 'cosmiconfig/dist/types'

export interface Config {
  config?: string
  headers?: Record<string, string>
  url?: string
  outputDir?: string
  comments?: boolean
  typescript?: boolean
}

const MODULE_NAME = 'gqless'
const defaultFileNames = [
  'package.json',
  `${MODULE_NAME}.config.json`,
  `${MODULE_NAME}.config.yaml`,
  `${MODULE_NAME}.config.yml`,
  `${MODULE_NAME}.config.js`,
  `${MODULE_NAME}.config.ts`,
  // TODO deprecate
  `.${MODULE_NAME}rc.json`,
  `.${MODULE_NAME}rc.yaml`,
  `.${MODULE_NAME}rc.yml`,
]

const loaders: Loaders = {
  ...defaultLoaders,
  '.ts': TypeScriptLoader,
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
