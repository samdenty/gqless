import { types as t, NodePath } from '@babel/core'
import { FunctionAnalysis } from '../FunctionAnalysis'
import { Analysis } from '../Analysis'

export class ParamAnalysis extends Analysis {
  constructor(
    parent: FunctionAnalysis,
    public param: NodePath<
      t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty
    >
  ) {
    super(parent)
  }
}
