import { types as t } from '@babel/core'

export const reactTransform = (
  importName: string,
  callExpression: t.Node,
  variableDeclarator: t.Node
) => {
  if (
    !t.isCallExpression(callExpression) ||
    !t.isVariableDeclarator(variableDeclarator) ||
    !t.isIdentifier(variableDeclarator.id)
  )
    return

  switch (importName) {
    case 'graphql': {
      addComponentName(callExpression, variableDeclarator.id.name)
      break
    }

    case 'useVariable': {
      addVariableName(callExpression, variableDeclarator.id.name)
      break
    }

    case 'useFragment': {
      addFragmentName(callExpression, variableDeclarator.id.name)
      break
    }
  }
}

const addVariableName = (callExpression: t.CallExpression, name: string) => {
  const args = callExpression.arguments
  if (!args.length) return
  if (args.length === 3) return

  const nameLiteral = t.stringLiteral(name)
  const nullableOrName = args[1]

  if (!nullableOrName || !t.isStringLiteral(nullableOrName)) {
    args.push(nameLiteral)
  }
}

export const addFragmentName = (
  callExpression: t.CallExpression,
  name: string
) => {
  const args = callExpression.arguments
  if (!args.length) return

  if (!args[1]) args[1] = t.identifier('undefined')
  if (!args[2]) args[2] = t.stringLiteral(name)
}

const addComponentName = (callExpression: t.CallExpression, name: string) => {
  const args = callExpression.arguments
  if (!args.length) return

  const nameProperty = t.objectProperty(
    t.identifier('name'),
    t.stringLiteral(name)
  )

  if (args.length > 1) {
    const options = args[1]
    if (!t.isObjectExpression(options)) return

    for (const prop of options.properties) {
      if (!t.isObjectProperty(prop)) continue
      if (prop.key.name === 'name') return
    }

    options.properties.unshift(nameProperty)
    return
  }

  args.push(t.objectExpression([nameProperty]))
}
