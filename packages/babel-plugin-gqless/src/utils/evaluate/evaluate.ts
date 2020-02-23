import { types as t, NodePath } from '@babel/core'
import { DynGlobal, DynImport } from './Dyn'
import { Record } from './Record'
import { resolveRefInPattern } from '../resolveRefInPattern'

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
    let rec = new Record(false)

    for (const prop of path.get('properties')) {
      if (prop.isObjectProperty()) {
        const key = evalProperty(prop)
        rec.set(key, prop.get('value'))
      }

      if (prop.isSpreadElement()) {
        const result = evaluate(prop.get('argument'))
        if (!(result instanceof Record)) continue
        result.keys.forEach(k => {
          rec.set(k.key, k.valuePath)
        })
      }
    }

    return rec
  }

  // Arrays
  if (path.isArrayExpression()) {
    let rec = new Record(true)

    for (const elem of path.get('elements')) {
      if (elem.isSpreadElement()) {
        const result = evaluate(elem.get('argument'))
        if (!(result instanceof Record)) continue
        result.keys.forEach(k => {
          rec.set(k.key, k.valuePath)
        })
      } else {
        rec.set(elem.key, elem)
      }
    }

    return rec
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

    if (binding.path.isVariableDeclarator()) {
      const id = binding.path.get('id')
      const init = binding.path.get('init')
      if (init.node === null) return

      const data = evaluate(init as NodePath) as unknown

      // var { } =
      if (id.isObjectPattern()) {
        for (const prop of id.get('properties')) {
          // var { ...rest } =
          if (prop.isRestElement()) {
            if (data instanceof Record) {
              const map = new Record(data.isArray, data.keys)

              id.get('properties').forEach(prop => {
                if (!prop.isObjectProperty()) return
                const propName = evalProperty(prop)
                if (propName === undefined) return

                for (const { key } of map.keys) {
                  if (key === propName) {
                    map.delete(key)
                    break
                  }
                }
              })

              return map
            }
            return data
          }

          // var { prop } =
          if (prop.isObjectProperty()) {
            if (objectPropValue(prop) === varName) {
              if (!(data instanceof Record)) return
              const key = evalProperty(prop)
              if (key === undefined) return

              return data.get(key)?.value
            }
          }
        }
      }

      if (id.isIdentifier()) {
        return data
      }
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
      return evalAsString(path.get('property') as NodePath)
    }

    return (path.node.property as t.Identifier).name
  }

  // prop: value
  if (path.isObjectProperty()) {
    if (path.node.computed) {
      return evalAsString(path.get('key') as NodePath)
    }

    return (path.node.key as t.Identifier).name
  }

  return evalAsString(path)
}

export const evalAsString = (path: NodePath): string | undefined => {
  const str = evaluate(path)
  if (str !== undefined) return String(str)
  return
}

export const objectPropValue = (property: NodePath<t.ObjectProperty>) => {
  const value = property.get('value')
  if (value.isAssignmentPattern()) {
    return (value.node.left as t.Identifier).name
  }
  return (value.node as t.Identifier).name
}
