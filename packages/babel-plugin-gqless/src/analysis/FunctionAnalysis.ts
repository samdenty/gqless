import { types as t, NodePath } from '@babel/core'
import { Analysis } from './Analysis'
import { ParamAnalysis } from './ParamAnalysis'
import { Referable } from './mixins'
import { Mix, Generic as g } from 'mix-classes'

export interface FunctionAnalysis extends Referable<t.Function> {}

export class FunctionAnalysis extends Mix(Analysis, g(Referable)) {
  public params = new Map<number | null, ParamAnalysis>()

  constructor(parent: Analysis, path: NodePath<t.Function>) {
    super([parent], [path])
  }

  public getParam(index: number) {
    const params = this.path.get('params')

    if (index >= params.length) {
      const lastParam = params[params.length - 1]
      if (!lastParam?.isSpreadElement()) return

      if (this.params.has(null)) {
        return this.params.get(null)!
      }

      const paramAnalysis = new ParamAnalysis(this, lastParam)
      this.params.set(null, paramAnalysis)
      return paramAnalysis
    }

    const param = params[index]

    for (const [i, paramAnalysis] of this.params) {
      if (i === index) return paramAnalysis
    }

    const paramAnalysis = new ParamAnalysis(this, param)
    this.params.set(index, paramAnalysis)
    return paramAnalysis
  }

  public scan(...args: NodePath<t.Expression | t.SpreadElement>[]) {
    const params = this.path.get('params')

    // Iterate over all params
    for (let i = 0; i < params.length; i++) {
      const param = params[i]

      if (param.isSpreadElement()) {
        const spreadArgs = args.slice(-i)
        if (!spreadArgs.length) break
      } else {
        const arg = args[i]
        if (!arg) break
      }

      this.getParam(i)?.scan()
    }

    if (this.parent !== this.parent!.file) {
      console.log('add analysis to prev analysis')
    }
  }
}
