import { types as t, NodePath } from '@babel/core'
import { DynGlobal, DynImport } from './Dyn'

/**
 * Evaluate an expression
 *
 * Differences to babel's path.evaluate:
 * - Supports dynamic runtime-only data
 *     Output's objects containing information on how
 *     to get the value at runtime. For example importing a
 *     module, looking up global variable etc.
 *
 * - Supports spread operator on objects
 * - Supports variable destructuring
 * - Silently fails with undefined, instead of outright failure
 */
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

    if (!binding) {
      return new DynGlobal(varName)
    }

    console.log(binding.path)
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
            if (objectPropValue(prop) === varName) {
              const propName = evalAsString(prop)
              return propName !== undefined && data?.[propName]
            }
          }
        }
      }

      return data
    }

    if (binding.path.parentPath.isImportDeclaration()) {
      const source = binding.path.parentPath.node.source.value

      if (binding.path.isImportDefaultSpecifier()) {
        return new DynImport(source, 'default')
      }

      if (binding.path.isImportSpecifier()) {
        return new DynImport(source, binding.path.node.imported.name)
      }

      if (binding.path.isImportNamespaceSpecifier()) {
        return new DynImport(source, null)
      }
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

export const objectPropValue = (property: NodePath<t.ObjectProperty>) => {
  const value = property.get('value')
  if (value.isAssignmentPattern()) {
    return (value.node.left as t.Identifier).name
  }
  return (value.node as t.Identifier).name
}
