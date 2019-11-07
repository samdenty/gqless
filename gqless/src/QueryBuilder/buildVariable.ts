import { Variable } from '../Variable'
import { UArguments } from '../Node'
import { uniquify, camelCase } from '../utils'
import { Formatter } from './Formatter'

export type Variables = Map<string, Variable>

export interface ConnectedVariable {
  node?: UArguments
  nullable?: boolean
  variables?: Map<string, Variable>
  path?: string[]
}

export const buildVariable = ({ options }:  Formatter, variable: Variable, info?: ConnectedVariable) => {
  let name =
    variable.name! || (options.prettify && info?.path ? camelCase(info.path) : 'v')

  if (info) {
    if (info.node) variable.validateNode(info.node, info.nullable)

    if (info.variables) {
      const existingVariable = info.variables.has(name)

      if (existingVariable) {
        name = uniquify(name, name => info.variables!.has(name))
      }

      info.variables.set(name, variable)
    }
  }

  return `$${name}`
}
