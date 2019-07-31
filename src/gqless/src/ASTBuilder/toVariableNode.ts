import { Variable } from '../Variable'
import { UArguments } from '../Node'
import { createEvent } from '@gqless/utils'
import { VariableEntry } from './uniqueVariables'
import { VariableNode } from 'graphql'

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

  variables.get(variable)!.onNamed(name => {
    variableNode.name.value = name
  })

  return variableNode as VariableNode
}
