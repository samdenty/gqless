import equal from 'fast-deep-equal'
import { FieldAnalysis } from '..'
import { Analysis } from '..'
import { types as t, NodePath } from '@babel/core'
import { objectPropValue, evalProperty, evaluate } from '../../utils'

export class Fields {
  public fields = new Set<FieldAnalysis>()

  public getField(
    this: Analysis & Fields,
    field: string | 0,
    variables?: object
  ) {
    for (const fieldAnalysis of this.fields) {
      if (
        fieldAnalysis.name === field &&
        // TODO: This doesn't work with the new Map,
        // re-implement it
        equal(fieldAnalysis.variables, variables)
      ) {
        return fieldAnalysis
      }
    }

    const fieldAnalysis = new FieldAnalysis(this, field, variables)
    this.fields.add(fieldAnalysis)
    return fieldAnalysis
  }

  public scanField(this: Analysis & Fields, path: NodePath) {
    if (path.parentPath.isCallExpression()) {
      const callPath = path.parentPath
      const callee = callPath.get('callee')

      const propAnalysis = this.file.get(callee)
      if (!propAnalysis) return

      console.log({ propAnalysis })
    }

    if (path.parentPath.isVariableDeclarator()) {
      const id = path.parentPath.get('id')
      const init = path.parentPath.get('init')
      if (init.node === null) return

      // var { }
      if (id.isObjectPattern()) {
        for (const prop of id.get('properties')) {
          // var { ...rest }
          if (prop.isRestElement()) {
            const binding = path.scope.getBinding(
              (prop.node.argument as t.Identifier).name
            )!

            for (const refPath of binding.referencePaths) {
              this.scanField(refPath)
            }
          }

          // var { prop }
          if (prop.isObjectProperty()) {
            // TODO: This is assumes an identifier, isn't true for
            // var { prop: { asd }}
            const fieldName = objectPropValue(prop)
            const binding = path.scope.getBinding(fieldName)!

            for (const refPath of binding.referencePaths) {
              this.getField(isNaN(+fieldName) ? fieldName : 0).scanField(
                refPath
              )
            }
          }
        }
      }

      // var x
      if (id.isIdentifier()) {
        const binding = id.scope.getBinding(id.node.name)
        if (!binding) return

        for (const refPath of binding.referencePaths) {
          this.scanField(refPath)
        }
      }
    }

    if (path.parentPath.isMemberExpression()) {
      const memberPath = path.parentPath
      const fieldName = evalProperty(memberPath)
      if (fieldName === undefined) return

      let variables: any

      if (memberPath.parentPath.isCallExpression()) {
        const [varsPath] = memberPath.parentPath.get('arguments')
        variables = evaluate(varsPath)
        console.log(variables)
      }

      this.getField(isNaN(+fieldName) ? fieldName : 0, variables).scanField(
        memberPath
      )
    }
  }
}
