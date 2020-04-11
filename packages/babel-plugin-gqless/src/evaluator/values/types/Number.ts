import { NodePath } from '@babel/core'
import { V } from '../V'
import { FunctionV } from './Function'
import { createClass } from '../utils'
import { GlobalContext } from '../../GlobalContext'

export const createNumberPrototype = (ctx: GlobalContext) =>
  createClass(ctx, function Number(): any {}, {
    toString: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: new FunctionV(ctx, null),
    },
  })

export class NumberV extends V<number> {
  constructor(ctx: GlobalContext, path: NodePath | null, value: number) {
    super(path, value)
    this.proto = ctx.NumberPrototype
  }
}
