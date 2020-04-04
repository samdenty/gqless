import * as scan from '../../src/scan'
import { getProgram } from '../setup'

export const scanImports = (source: string) => {
  const imports: Record<string, string[]> = {}

  scan.scanImports(getProgram(source), (source) => {
    if (!imports[source]) imports[source] = []
    return (name) => {
      imports[source].push(name)
    }
  })
  return imports
}
