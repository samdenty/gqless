import { NodePath } from '@babel/core'
import { V } from '../V'
import { FunctionV } from './Function'
import { createClass } from '../utils'
import { GlobalContext } from '../../GlobalContext'

export const createBooleanPrototype = (ctx: GlobalContext) =>
  createClass(ctx, function Boolean(): any {}, {
    toString: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: new FunctionV(ctx, null),
    },
  })

export class BooleanV extends V<boolean> {
  constructor(ctx: GlobalContext, path: NodePath | null, value: boolean) {
    super(path, value)
    this.proto = ctx.BooleanPrototype
  }
}
