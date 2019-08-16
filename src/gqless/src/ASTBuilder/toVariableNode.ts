import { createEvent } from '@gqless/utils'
import { VariableNode } from 'graphql'

import { UArguments } from '../Node'
import { Variable } from '../Variable'
import { VariableEntry } from './uniqueVariables'

export const toVariableNode = (
  variables: Map<Variable, VariableEntry>,
  variable: Variable,
  node: UArguments,
  nullable: boolean,
  variablePath: string[]
) => {
  variable.validateNode(node, nullable)

  const variableNode = {
    kind: 'Variable',
    name: {
      kind: 'Name',
      value: '',
    },
  }

  if (variable.name) {
    variablePath = [variable.name]
  }

  if (!variables.has(variable))
    variables.set(variable, {
      variable,
      onNamed: createEvent(),
      variablePath,
    })

  variables.get(variable)!.onNamed((name: string) => {
    variableNode.name.value = name
  })

  return variableNode as VariableNode
}
