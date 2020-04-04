import equal from 'fast-deep-equal'
import { Analysis, FunctionAnalysis, FieldAnalysis } from '..'
import { types as t, NodePath } from '@babel/core'
import {
  ARRAY_ITERATOR,
  RETURNS_ARRAY_ELEMENT,
  RETURNS_SELF,
} from '../../utils'
import { evalProperty, evaluate, Record } from '../../evaluate'
import { scanPath, scanParentPath, ScanResult } from '../../scan'
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
    other.fields.forEach((otherField) => {
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

  private scanHandler(this: Analysis & Fields, result: ScanResult) {
    switch (result.kind) {
      case 'CALL': {
        const { callPath, path, pathCtx } = result

        if (path.listKey === 'arguments') {
          const args = callPath.get('arguments') as NodePath<
            t.Expression | t.SpreadElement
          >[]
          const callee = callPath.get('callee')
          // Get the referenced function that's being called
          const funcAnalysis = this.file.get(callee)
          if (!funcAnalysis) break
          invariant(funcAnalysis instanceof FunctionAnalysis)
          // Perform a scan over it's params
          funcAnalysis.scan(...args)
          // Find the analysis associated with arg, and merge
          // into this analysis
          const param = funcAnalysis.getParam(path.key as number)
          if (param) {
            const analysis = param.lookup(pathCtx)
            this.merge(analysis)
          }
        }

        this.scanParentPath(result.callPath)
        break
      }

      case 'ITERATE': {
        const { path, pathCtx } = result
        const left = path.get('left')
        const field = this.getField(0)

        if (left.isVariableDeclaration()) {
          const declarations = left.get('declarations')
          for (const declarator of declarations) {
            field.scanPath(declarator, ...pathCtx)
          }
        } else {
          field.scanPath(left, ...pathCtx)
        }
        break
      }

      case 'PROPERTY_ACCESS': {
        const { path, pathCtx, name } = result
        let variables: any

        if (path.parentPath.isCallExpression()) {
          const args = path.parentPath.get('arguments')

          let result: any

          // Check to see if this is a field Variable call
          if (
            args.length === 1 &&
            (result = evaluate(args[0])) instanceof Record &&
            !result.isArray
          ) {
            variables = result
          }

          // Else check to see if it's a JS method call
          // eg. array.map(), forEach etc.
          else {
            let validMethod = false

            if (ARRAY_ITERATOR.hasOwnProperty(name)) {
              const [argElementIdx, argSelfIdx] = ARRAY_ITERATOR[name]
              const callbackPath = args[0]
              invariant(callbackPath, `expected callback for '${name}()'`)

              const callbackAnalysis = this.file.get(callbackPath)
              invariant(
                callbackAnalysis instanceof FunctionAnalysis,
                `expected callback to be function for '${name}`
              )

              const indexAnalysis = this.getField(0)

              const elementAnalysis = callbackAnalysis.getParam(argElementIdx)
              if (elementAnalysis) {
                elementAnalysis.scan()
                indexAnalysis.merge(elementAnalysis)
              }

              const selfAnalysis = callbackAnalysis.getParam(argSelfIdx)
              if (selfAnalysis) {
                selfAnalysis.scan()
                this.merge(selfAnalysis)
              }

              validMethod = true
            }

            if (RETURNS_ARRAY_ELEMENT.includes(name)) {
              this.getField(0).scanParentPath(path.parentPath, ...pathCtx)
              validMethod = true
            } else if (RETURNS_SELF.includes(name)) {
              this.scanParentPath(path.parentPath, ...pathCtx)
              validMethod = true
            }

            if (validMethod) break
          }
        }

        this.getField(isNaN(+name) ? name : 0, variables).scanParentPath(path)

        break
      }
    }
  }

  public scanParentPath(
    this: Analysis & Fields,
    path: NodePath,
    ...pathCtx: NodePath<t.ObjectProperty>[]
  ) {
    for (const result of scanParentPath(path, ...pathCtx)) {
      this.scanHandler(result)
    }
  }

  public scanPath(
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
    // console.log(path.parent)

    for (const result of scanPath(path, ...pathCtx)) {
      this.scanHandler(result)
    }
  }
}
