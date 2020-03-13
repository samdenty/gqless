import * as path from 'path'
import * as fs from 'fs'

const statSync = (filename: string) => {
  try {
    return fs.statSync(filename)
  } catch (e) {
    return
  }
}

const isFile = (stats: fs.Stats | void) => {
  return stats ? stats.isFile() || stats.isFIFO() : false
}

const findFile = (dir: string, fileName: string): string | void => {
  const file = path.resolve(dir, fileName)
  const stats = statSync(file)

  if (isFile(stats)) {
    return file
  }
}

export const findTSconfig = (dir: string): string | void => {
  const tsconfig = findFile(dir, 'tsconfig.json')
  if (tsconfig) return tsconfig

  const jsconfig = findFile(dir, 'jsconfig.json')
  if (jsconfig) return jsconfig

  const parentDir = path.dirname(dir)
  if (dir === parentDir) return
  return findTSconfig(parentDir)
}
