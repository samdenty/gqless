import { types as t, NodePath } from '@babel/core'
import { Analysis } from '../Analysis'
import { ParamAnalysis } from '../ParamAnalysis'

export class FunctionAnalysis extends Analysis {
  public params = new Map<number, ParamAnalysis>()

  constructor(
    parent: Analysis,
    public func: NodePath<
      t.ArrowFunctionExpression | t.FunctionExpression | t.FunctionDeclaration
    >
  ) {
    super(parent)
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
}
