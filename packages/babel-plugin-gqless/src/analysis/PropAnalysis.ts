import { types as t, NodePath } from '@babel/core'
import { Analysis } from './Analysis'
import { evalProperty } from '../utils'
import { computed } from '@gqless/utils'
import { Referable } from './mixins'
import { Mix } from 'mix-classes'

export class PropAnalysis extends Mix(Analysis, Referable) {
  constructor(parent: Analysis, path: NodePath<t.ObjectProperty>) {
    super([parent], [path])
  }

  @computed
  public get name() {
    return evalProperty(this.path)
  }
}
