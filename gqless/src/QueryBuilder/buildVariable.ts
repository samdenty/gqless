import { camelCase } from 'lodash'
import { Variable } from '../Variable'
import { UArguments } from '../Node'
import { uniquify } from '../utils'

export type Variables = Map<string, Variable>

export interface ConnectedVariable {
  node: UArguments
  nullable: boolean
  variables?: Map<string, Variable>
  path?: string[]
}

export const buildVariable = (
  variable: Variable,
  connected?: ConnectedVariable
) => {
  let name =
    variable.name! ||
    (connected && connected.path ? camelCase(connected.path as any) : 'var')

  if (connected) {
    variable.validateNode(connected.node, connected.nullable)

    if (connected.variables) {
      const existingVariable = connected.variables.has(name)

      if (existingVariable) {
        name = uniquify(name, name => connected.variables!.has(name))
      }

      connected.variables.set(name, variable)
    }
  }

  return `$${name}`
}
