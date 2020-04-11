import { ObjectV } from './Object'
import { NodePath, types as t } from '@babel/core'
import { V } from '../V'
import { serialize } from '../../serialize'
import { invariant } from '@gqless/utils'
import { evaluate } from '../../evaluate'
import { Context } from '../../Context'
import { UndefinedV } from './undefined'
import { createClass } from '../utils'
import { GlobalContext } from '../../GlobalContext'

export type FunctionCallback = (thisArg: V, ...args: V[]) => V

export const createFunctionPrototype = (ctx: GlobalContext) =>
  createClass(ctx, function Function(): any {}, {
    toString: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: new FunctionV(ctx, null),
    },
  })

export class FunctionV extends ObjectV<FunctionV['call']> {
  private callback?: FunctionCallback

  constructor(
    private context: Context = new GlobalContext(),
    path: NodePath | null,
    callback?: FunctionCallback
  ) {
    super(context.globalContext, path, (...args) => this.call(args))
    if (callback) this.callback = callback

    this.proto = context.globalContext.FunctionPrototype

    this.defineProperties({
      name: {
        configurable: true,
        enumerable: false,
        writable: false,
        value: serialize(context.globalContext, callback?.name),
      },
      prototype: {
        configurable: false,
        enumerable: false,
        writable: true,
        value: ObjectV.from(context.globalContext, null, {
          constructor: {
            configurable: true,
            enumerable: false,
            value: this,
            writable: true,
          },
        }),
      },
    })
  }

  public call(thisArg: any, ...args: any[]) {
    const context = new Context(this.context)

    const thisValue =
      thisArg instanceof V ? thisArg : serialize(context, thisArg)

    const argValues = args.map((value, i) => {
      if (value instanceof V) return value
      return serialize(context, value)
    })

    if (this.callback) {
      return this.callback(thisValue, ...argValues)
    }

    invariant(this.path?.isFunction())

    this.path.get('params').forEach((param, i) => {
      const value = argValues[i]

      if (param.isIdentifier()) {
        context.define(param.node.name, value || new UndefinedV(param))
      }
    })

    const body = this.path.get('body')
    if (!body.isBlockStatement()) {
      return evaluate(body, context)
    }

    for (const statement of body.get('body')) {
      statement
    }
  }
}
