import equal from 'fast-deep-equal'
import { Analysis, FunctionAnalysis, FieldAnalysis } from '..'
import { types as t, NodePath } from '@babel/core'
import { objectPropValue, evalProperty, evaluate } from '../../utils'
import { invariant } from '@gqless/utils'

export class Fields {
  public fields = new Set<FieldAnalysis>()

  private lookup(
    this: Analysis & Fields,
    [path, ...paths]: NodePath<t.ObjectProperty>[]
  ): Analysis & Fields {
    if (!path) return this

    const fieldName = evalProperty(path)
    invariant(fieldName !== undefined)

    return this.getField(fieldName).lookup(paths)
  }

  public merge(this: Analysis & Fields, other: Fields) {
    other.fields.forEach(otherField => {
      this.getField(otherField.name, otherField.variables).merge(otherField)
    })
  }

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

  public scanField(
    this: Analysis & Fields,
    path: NodePath,
    ...pathCtx: NodePath<t.ObjectProperty>[]
  ) {
    // console.log(
    //   `${this.file.path
    //     .split('/')
    //     .slice(9)
    //     .join('/')}:${path.parentPath.node.loc?.start.line}:${path.parentPath
    //     .node.loc?.start.column + 1}`,
    //   path.parentPath.node,
    //   this
    // )

    if (path.parentPath.isCallExpression()) {
      invariant(path.listKey === 'arguments')

      const callPath = path.parentPath
      const args = callPath.get('arguments') as NodePath<
        t.Expression | t.SpreadElement
      >[]
      const callee = callPath.get('callee')

      // Get the referenced function that's being called
      const funcAnalysis = this.file.get(callee)
      if (!funcAnalysis) return
      invariant(funcAnalysis instanceof FunctionAnalysis)
      // Perform a scan over it's params
      funcAnalysis.scan(...args)

      // Find the analysis associated with arg, and merge
      // into this analysis
      const analysis = funcAnalysis.getParam(path.key as number).lookup(pathCtx)
      this.merge(analysis)

      return this.scanField(callPath)
    }

    //
    else if (path.parentPath.isVariableDeclarator()) {
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
              this.scanField(refPath, ...pathCtx)
            }
          }

          // var { prop }
          if (prop.isObjectProperty()) {
            // TODO: This is assumes an identifier, isn't true for
            // var { prop: { asd }}
            const fieldName = objectPropValue(prop)
            const binding = path.scope.getBinding(fieldName)!

            for (const refPath of binding.referencePaths) {
              this.getField(fieldName).scanField(refPath, ...pathCtx)
            }
          }
        }
      }

      // var x
      if (id.isIdentifier()) {
        const binding = id.scope.getBinding(id.node.name)
        if (!binding) return

        for (const refPath of binding.referencePaths) {
          this.scanField(refPath, ...pathCtx)
        }
      }
    }

    //
    else if (path.parentPath.isMemberExpression()) {
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

    //
    else if (path.parentPath.isObjectProperty()) {
      const propPath = path.parentPath

      // { x: TRACKED }
      if (path.key === 'value') {
        // We know the value of the Analysis is being used here - this

        return this.scanField(propPath, propPath, ...pathCtx)
      }

      // { [TRACKED]: x }
      else {
        // todo
      }
    }

    // Object / array literals
    else if (
      path.parentPath.isObjectExpression() ||
      path.parentPath.isArrayExpression()
    ) {
      const dataExp = path.parentPath

      return this.scanField(dataExp, ...pathCtx)
    }
  }
}
