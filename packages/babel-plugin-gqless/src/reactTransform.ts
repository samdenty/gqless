import { types as t, NodePath } from '@babel/core'

export const reactTransform = (importName: string, callPath: NodePath) => {
  const varPath = callPath.parentPath

  if (!callPath.isCallExpression() || !varPath.isVariableDeclarator()) return

  const varId = varPath.get('id')
  if (!varId.isIdentifier()) return
  const varName = varId.node.name

  switch (importName) {
    case 'graphql': {
      addComponentName(callPath, varName)
      break
    }

    case 'useVariable': {
      addVariableName(callPath, varName)
      break
    }

    case 'useFragment': {
      addFragmentName(callPath, varName)
      break
    }
  }
}

const addVariableName = (path: NodePath<t.CallExpression>, name: string) => {
  const argsPath = path.get('arguments')
  if (!argsPath.length) return
  if (argsPath.length === 3) return

  const nameLiteral = t.stringLiteral(name)
  const nullableOrName = argsPath[1]

  if (!nullableOrName || !nullableOrName.isStringLiteral()) {
    path.pushContainer('arguments', nameLiteral)
  }
}

export const addFragmentName = (
  path: NodePath<t.CallExpression>,
  name: string
) => {
  const argsPath = path.get('arguments')
  if (!argsPath.length) return

  if (!argsPath[1]) {
    path.pushContainer('arguments', t.identifier('undefined'))
  }
  if (!argsPath[2]) {
    path.pushContainer('arguments', t.stringLiteral(name))
  }
}

const addComponentName = (path: NodePath<t.CallExpression>, name: string) => {
  const argsPath = path.get('arguments')
  if (!argsPath.length) return

  const nameProperty = t.objectProperty(
    t.identifier('name'),
    t.stringLiteral(name)
  )

  if (argsPath.length > 1) {
    const optionsPath = argsPath[1]
    if (!optionsPath.isObjectExpression()) return

    for (const prop of optionsPath.node.properties) {
      if (!t.isObjectProperty(prop)) continue
      if (prop.key.name === 'name') return
    }

    optionsPath.unshiftContainer('properties', nameProperty)
    return
  }

  path.pushContainer('arguments', t.objectExpression([nameProperty]))
}
