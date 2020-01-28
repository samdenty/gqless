import { types as t, NodePath } from '@babel/core'
import { Analysis } from '../Analysis'

export class PropAnalysis extends Analysis {
  constructor(
    parent: Analysis,
    public name: string,
    public variables?: object
  ) {
    super(parent)
  }
}
