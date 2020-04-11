import { NodePath } from '@babel/core'
import { V } from '../V'
import { createClass } from '../utils'
import { FunctionV } from './Function'
import { GlobalContext } from '../../GlobalContext'

export const createStringPrototype = (ctx: GlobalContext) =>
  createClass(ctx, function String(): any {}, {
    toString: {
      configurable: true,
      writable: true,
      enumerable: false,
      value: new FunctionV(ctx, null),
    },
  })

export class StringV extends V<string> {
  constructor(ctx: GlobalContext, path: NodePath | null, value: string) {
    super(path, value)
    this.proto = ctx.StringPrototype
  }
}
