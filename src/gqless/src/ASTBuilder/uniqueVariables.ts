import camelCase from 'lodash/camelCase'
import { Variable } from '../Variable'
import { createEvent } from '@gqless/utils'

export type VariableEntry = {
  onNamed: ReturnType<typeof createEvent>
  variable: Variable
  variablePath: string[]
}

export const uniqueVariables = (variableMap: Map<Variable, VariableEntry>) => {
  const variableEntries = Array.from(variableMap.values())

  let variablesObj = {} as Record<string, any>

  const variableNames = variableEntries.map(({ variablePath }) =>
    camelCase(variablePath as any)
  )

  variableNames.forEach((name, index) => {
    const variableEntry = variableEntries[index]

    // Rename variable if required
    const existingVariable = variableNames.find(
      (n, i) => i !== index && n === name
    )
    if (existingVariable) {
      const uniqueVar = (id = 1): string => {
        const varName = `${name}_${id}`

        return variableNames.includes(varName) ? uniqueVar(id + 1) : varName
      }

      name = uniqueVar()
      variableNames[index] = name
    }

    // Build JSON object of variable values
    const { value } = variableEntry.variable
    if (value !== undefined && value !== null) {
      variablesObj[name] = value
    }

    variableEntry.onNamed.emit(name)

    return name
  })

  const variables = variableNames.map((name, i) => ({
    name,
    variable: variableEntries[i].variable,
  }))

  return {
    variables,
    variablesObj: Object.keys(variablesObj).length ? variablesObj : undefined,
  }
}
