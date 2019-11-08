import { Variable } from '../Variable'
import { UArguments } from '../Node'
import { uniquify, camelCase } from '../utils'
import { Formatter } from './Formatter'

export type Variables = Map<string, Variable>

export interface ConnectedVariable {
  _node?: UArguments
  _nullable?: boolean
  _variables?: Map<string, Variable>
  _path?: string[]
}

export const buildVariable = ({ _options }:  Formatter, variable: Variable, info?: ConnectedVariable) => {
  let name =
    variable.name! || (_options.prettify && info?._path ? camelCase(info._path) : 'v')

  if (info) {
    if (info._node) variable._validateNode(info._node, info._nullable)

    if (info._variables) {
      const existingVariable = info._variables.has(name)

      if (existingVariable) {
        name = uniquify(name, name => info._variables!.has(name))
      }

      info._variables.set(name, variable)
    }
  }

  return `$${name}`
}
