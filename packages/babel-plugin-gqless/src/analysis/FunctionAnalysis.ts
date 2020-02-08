import { types as t, NodePath } from '@babel/core'
import { Analysis } from './Analysis'
import { ParamAnalysis } from './ParamAnalysis'
import { Referable } from './mixins'
import { Mix, Generic as g } from 'mix-classes'

export interface FunctionAnalysis extends Referable<t.Function> {}

export class FunctionAnalysis extends Mix(Analysis, g(Referable)) {
  public params = new Map<number, ParamAnalysis>()

  constructor(parent: Analysis, path: NodePath<t.Function>) {
    super([parent], [path])
  }

  public getParam(
    path: NodePath<
      t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty
    >
  ) {
    for (const [i, paramAnalysis] of this.params) {
      if (i === path.key) return paramAnalysis
    }

    const paramAnalysis = new ParamAnalysis(this, path)
    this.params.set(path.key as number, paramAnalysis)
    return paramAnalysis
  }

  public scan(...args: NodePath<t.Expression>[]) {
    const params = this.path.get('params')

    args.forEach((arg, i) => {
      const param = params[i]
      if (!param) return

      this.getParam(param).scan()
    })

    if (this.parent !== this.parent!.file) {
      console.log('add analysis to prev analysis')
    }
  }
}
