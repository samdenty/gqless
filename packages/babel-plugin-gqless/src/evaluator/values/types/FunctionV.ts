import { ObjectV } from './ObjectV'
import { NodePath, types as t } from '@babel/core'
import { V } from '../V'
import { serialize } from '../../serialize'
import { invariant } from '@gqless/utils'
import { evaluate } from '../../evaluate'
import { Context } from '../../Context'
import { UndefinedV } from '../primitives'

export type FunctionCallback = (thisArg: V, ...args: V[]) => V

export class FunctionV extends ObjectV<FunctionV['call']> {
  private callback?: FunctionCallback

  constructor(
    private context: Context | undefined,
    path: NodePath,
    callback?: FunctionCallback
  ) {
    super(path, () => {
      const func = this.call.bind(this)

      this.descriptors.forEach((descriptor, key) => {
        func[key] = descriptor.value?.value
      })

      return func
    })
    if (callback) this.callback = callback
  }

  public call(thisArg: any, ...args: any[]) {
    const context = new Context(this.context)

    const thisValue =
      thisArg instanceof V ? thisArg : serialize(this.path, thisArg, context)

    const argValues = args.map((value, i) => {
      if (value instanceof V) return value

      const path =
        (this.path.isFunction() && this.path.get('params')[i]) || this.path

      return serialize(path, value, context)
    })

    if (this.callback) {
      return this.callback(thisValue, ...argValues)
    }

    invariant(this.path.isFunction())

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
