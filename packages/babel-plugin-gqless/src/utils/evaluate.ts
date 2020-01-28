import { types as t, NodePath } from '@babel/core'

export const evaluate = (path: NodePath) => {
  // Literals
  if (
    path.isNumericLiteral() ||
    path.isStringLiteral() ||
    path.isBooleanLiteral()
  ) {
    return path.node.value
  }

  // Objects
  if (path.isObjectExpression()) {
    const obj = {}

    for (const prop of path.get('properties')) {
      if (prop.isObjectProperty()) {
        const propName = evalAsString(prop, evalProperty)
        if (propName === undefined) continue

        console.log(propName, prop.get('value'))
        obj[propName] = evaluate(prop.get('value'))
      }

      if (prop.isSpreadElement()) {
        Object.assign(obj, evaluate(prop.get('argument')))
      }
    }

    return obj
  }

  // Expressions
  if (path.isBinaryExpression()) {
    const left = evaluate(path.get('left'))
    const right = evaluate(path.get('right'))

    switch (path.node.operator) {
      case '-':
        return left - right
      case '+':
        return left + right
      case '/':
        return left / right
      case '*':
        return left * right
      case '%':
        return left % right
      case '**':
        return left ** right
      case '<':
        return left < right
      case '>':
        return left > right
      case '<=':
        return left <= right
      case '>=':
        return left >= right
      case '==':
        return left == right
      case '!=':
        return left != right
      case '===':
        return left === right
      case '!==':
        return left !== right
      case '|':
        return left | right
      case '&':
        return left & right
      case '^':
        return left ^ right
      case '<<':
        return left << right
      case '>>':
        return left >> right
      case '>>>':
        return left >>> right
    }
  }

  // References to variables
  if (path.isIdentifier()) {
    const varName = path.node.name
    const binding = path.scope.getBinding(varName)
    // TODO globals
    if (!binding) return

    if (binding.path.isVariableDeclarator()) {
      const id = binding.path.get('id')
      const init = binding.path.get('init')
      if (init.node === null) return

      const data = evaluate(init as NodePath)

      // var { } =
      if (id.isObjectPattern()) {
        for (const prop of id.get('properties')) {
          // var { ...rest } =
          if (prop.isRestElement()) {
            const obj = { ...data }

            id.get('properties').forEach(prop => {
              if (!prop.isObjectProperty()) return
              const propName = evalAsString(prop)
              if (propName === undefined) return

              delete obj[propName]
            })

            return obj
          }

          // var { prop } =
          if (prop.isObjectProperty()) {
            if ((prop.node.value as t.Identifier).name === varName) {
              const propName = evalAsString(prop)
              return propName !== undefined && data?.[propName]
            }
          }
        }
      }

      return data
    }
  }
}

export const evalProperty = (path: NodePath) => {
  // obj[prop]
  if (path.isMemberExpression()) {
    if (path.node.computed) {
      return evaluate(path.get('property') as NodePath)
    }

    return (path.node.property as t.Identifier).name
  }

  // prop: value
  if (path.isObjectProperty()) {
    if (path.node.computed) {
      return evaluate(path.get('key') as NodePath)
    }

    return (path.node.key as t.Identifier).name
  }

  return evaluate
}

export const evalAsString = (
  path: NodePath,
  _evaluate = evaluate
): string | void => {
  const str = _evaluate(path)
  if (str !== undefined) return String(str)
}

export const evalAsNumber = (
  path: NodePath,
  _evaluate = evaluate
): number | void => {
  const str = _evaluate(path)
  if (str !== undefined) return Number(str)
}
