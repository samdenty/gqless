import { join, dirname } from 'path'
import { createMatchPath, MatchPath } from 'tsconfig-paths'
import { getCompilerOptionsFromTsConfig } from 'ts-morph'
import { findTSconfig } from './findTSconfig'

const matchers = new Map<string, MatchPath>()
const getTSConfigMatch = (dir: string) => {
  const configPath = findTSconfig(dir)
  if (!configPath) return
  if (matchers.has(configPath)) {
    return matchers.get(configPath)
  }

  const { options } = getCompilerOptionsFromTsConfig(configPath)
  if (!options.paths) return
  const configDir = dirname(configPath)
  const match = createMatchPath(
    options.baseUrl ? join(configDir, options.baseUrl) : configDir,
    options.paths
  )

  matchers.set(configPath, match)

  return match
}

/**
 * Find a module by it's relative path
 * Will use tsconfig.json to resolve custom module paths
 */
export const findModule = (dir: string, relativePath: string) => {
  try {
    const match = getTSConfigMatch(dir)

    return (
      match?.(relativePath) ?? require.resolve(relativePath, { paths: [dir] })
    )
  } catch (e) {
    throw new Error(
      `${e?.message?.split('\n')[0]}\n\n` +
        `If using custom module names, use a 'paths' field in a {ts,js}config.json`
    )
  }
}
