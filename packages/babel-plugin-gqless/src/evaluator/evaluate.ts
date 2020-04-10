import { NodePath } from '@babel/core'
import * as v from './values'
import { evalProperty } from './evalUtils'
import { Context } from './Context'

export const evaluate = (path: NodePath, context?: Context): v.V<any> => {
  if (path.isNullLiteral()) {
    return new v.NullV(path)
  }

  if (path.isNumericLiteral()) {
    return new v.NumberV(path, path.node.value)
  }
  if (path.isStringLiteral()) {
    return new v.StringV(path, path.node.value)
  }
  if (path.isBooleanLiteral()) {
    return new v.BooleanV(path, path.node.value)
  }

  if (path.isFunction()) {
    return new v.FunctionV(context, path)
  }

  if (path.isObjectExpression()) {
    const obj = new v.ObjectV(path)

    for (const prop of path.get('properties')) {
      if (prop.isObjectProperty()) {
        const key = evalProperty(prop, context)
        obj.defineProperty(key, {
          value: evaluate(prop.get('value'), context),
          configurable: true,
          enumerable: true,
        })
      }

      //
      else if (prop.isObjectMethod()) {
      }

      //
      else if (prop.isSpreadElement()) {
        const spreadObj = evaluate(prop.get('argument'), context)
        if (spreadObj instanceof v.ObjectV) {
          obj.assign(spreadObj)
        }
      }
    }

    return obj
  }

  if (path.isBinaryExpression()) {
    const op = path.node.operator
    const left = evaluate(path.get('left'), context)
    const right = evaluate(path.get('right'), context)

    if (left.runtime || right.runtime) {
      return new v.BinaryExpression(path, path.node.operator, left, right)
    }

    switch (path.node.operator) {
      case '+': {
        if (left.isAddible() && right.isAddible()) {
          return new v.NumberV(path, Number(left) + Number(right))
        }

        return new v.StringV(path, String(left) + String(right))
      }

      case '===':
      case '!==': {
        return new v.BooleanV(
          path,
          eval(`left ${op} right || left.value ${op} right.value`)
        )
      }

      case '<':
      case '>':
      case '<=':
      case '>=':
      case '==': {
        return new v.BooleanV(path, eval(`left.value ${op} right.value`))
      }

      case '-':
      case '/':
      case '*':
      case '%':
      case '**':
      case '|':
      case '&':
      case '^':
      case '<<':
      case '>>':
      case '>>>':
      case '-': {
        return new v.NumberV(path, eval(`Number(left) ${op} Number(right)`))
      }
    }
  }

  console.log(path.node, context)
  return new v.RuntimeV(path)
}
