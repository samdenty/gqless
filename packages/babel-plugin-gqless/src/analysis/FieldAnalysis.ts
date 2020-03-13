import { types as t, NodePath } from '@babel/core'
import { Analysis } from './Analysis'
import { Fields } from './mixins'
import { Mix } from 'mix-classes'

export class FieldAnalysis extends Mix(Analysis, Fields) {
  constructor(
    parent: Analysis & Fields,
    public name: string | 0,
    public variables?: object
  ) {
    super([parent])
  }
}
