import { NodePath } from '@babel/core'
import * as v from './values'
import { evalProperty } from './evalUtils'
import { Context } from './Context'
import { GlobalContext } from './GlobalContext'

export const evaluate = (
  path: NodePath,
  ctx: Context = new GlobalContext()
): v.V<any> => {
  if (path.isNullLiteral()) {
    return new v.NullV(path)
  }

  if (path.isNumericLiteral()) {
    return new v.NumberV(ctx.globalContext, path, path.node.value)
  }
  if (path.isStringLiteral()) {
    return new v.StringV(ctx.globalContext, path, path.node.value)
  }
  if (path.isBooleanLiteral()) {
    return new v.BooleanV(ctx.globalContext, path, path.node.value)
  }

  if (path.isFunction()) {
    return new v.FunctionV(ctx, path)
  }

  if (path.isObjectExpression()) {
    const obj = new v.ObjectV(ctx.globalContext, path)

    for (const prop of path.get('properties')) {
      if (prop.isObjectProperty()) {
        const key = evalProperty(prop, ctx)
        obj.defineProperty(key, {
          value: evaluate(prop.get('value'), ctx),
          configurable: true,
          enumerable: true,
        })
      }

      //
      else if (prop.isObjectMethod()) {
      }

      //
      else if (prop.isSpreadElement()) {
        const spreadObj = evaluate(prop.get('argument'), ctx)
        if (spreadObj instanceof v.ObjectV) {
          obj.assign(spreadObj)
        }
      }
    }

    return obj
  }

  if (path.isBinaryExpression()) {
    const op = path.node.operator
    const left = evaluate(path.get('left'), ctx)
    const right = evaluate(path.get('right'), ctx)

    if (left.runtime || right.runtime) {
      return new v.BinaryExpression(path, path.node.operator, left, right)
    }

    switch (path.node.operator) {
      case '+': {
        if (left.isAddible() && right.isAddible()) {
          return new v.NumberV(
            ctx.globalContext,
            path,
            Number(left) + Number(right)
          )
        }

        return new v.StringV(
          ctx.globalContext,
          path,
          String(left) + String(right)
        )
      }

      case '===':
      case '!==': {
        return new v.BooleanV(
          ctx.globalContext,
          path,
          eval(`left ${op} right || left.value ${op} right.value`)
        )
      }

      case '<':
      case '>':
      case '<=':
      case '>=':
      case '==': {
        return new v.BooleanV(
          ctx.globalContext,
          path,
          eval(`left.value ${op} right.value`)
        )
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
        return new v.NumberV(
          ctx.globalContext,
          path,
          eval(`Number(left) ${op} Number(right)`)
        )
      }
    }
  }

  if (path.isIdentifier()) {
    const value = ctx?.get(path.node.name)
    if (value) return value
  }

  console.log(path.node, ctx)
  return new v.RuntimeV(path)
}
