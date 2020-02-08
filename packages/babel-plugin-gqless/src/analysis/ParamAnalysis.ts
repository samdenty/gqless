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
    // function ({ })
    if (this.path.isObjectPattern()) {
      for (const prop of this.path.get('properties')) {
        // function ({ arg })
        if (prop.isObjectProperty()) {
          const binding = this.path.scope.getBinding(objectPropValue(prop))!

          const fieldName = evalProperty(prop)
          if (fieldName === undefined) return

          const fieldAnalysis = this.getField(fieldName)
          for (const refPath of binding.referencePaths) {
            fieldAnalysis.scanField(refPath)
          }
        }

        // function ({ ...rest })
        if (prop.isRestElement()) {
          const binding = this.path.scope.getBinding(
            (prop.node.argument as t.Identifier).name
          )!

          for (const refPath of binding.referencePaths) {
            this.scanField(refPath)
          }
        }
      }
    }

    // function (arg)
    if (this.path.isIdentifier()) {
      const binding = this.path.scope.getBinding(this.path.node.name)!

      for (const refPath of binding.referencePaths) {
        this.scanField(refPath)
      }
    }
  }
}
