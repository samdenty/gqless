import { types as t, NodePath } from '@babel/core'
import { FunctionAnalysis } from './FunctionAnalysis'
import { Fields, Referable } from './mixins'
import { Analysis } from './Analysis'
import { Mix, Generic as g } from 'mix-classes'
import { objectPropValue, evalProperty } from '../utils'

type Param = t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty

export interface ParamAnalysis extends Referable<Param> {}

export class ParamAnalysis extends Mix(Analysis, g(Referable), Fields) {
  constructor(parent: FunctionAnalysis, path: NodePath<Param>) {
    super([parent], [path])
  }

  public scan() {
    this.scanPath(this.path)
  }
}
