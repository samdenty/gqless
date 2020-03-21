import equal from 'fast-deep-equal'
import { Analysis, FunctionAnalysis, FieldAnalysis } from '..'
import { types as t, NodePath } from '@babel/core'
import {
  evalProperty,
  evaluate,
  Record,
  ARRAY_ITERATOR,
  RETURNS_ARRAY_ELEMENT,
  RETURNS_SELF,
} from '../../utils'
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

  public scanParentPath(
    this: Analysis & Fields,
    path: NodePath,
    ...pathCtx: NodePath<t.ObjectProperty>[]
  ) {
    if (path.parentPath.isCallExpression()) {
      const callPath = path.parentPath

      if (path.listKey === 'arguments') {
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
        const param = funcAnalysis.getParam(path.key as number)

        if (param) {
          const analysis = param.lookup(pathCtx)
          this.merge(analysis)
        }
      }

      return this.scanParentPath(callPath)
    }

    //
    else if (path.parentPath.isObjectProperty()) {
      const propPath = path.parentPath

      // x: TRACKED
      if (path.key === 'value') {
        return this.scanParentPath(propPath, propPath, ...pathCtx)
      }

      // [TRACKED]: x
      else {
        // TODO
      }
    } else {
      return this.scanPath(path.parentPath, ...pathCtx)
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

    // {TRACKED}
    if (path.isJSXExpressionContainer()) {
      this.scanParentPath(path)
    }

    // {...x}
    else if (path.isJSXSpreadAttribute()) {
    }

    // JSX children
    else if (path.isJSXElement()) {
      console.log(path)
    }

    // prop={TRACKED}
    else if (path.isJSXAttribute()) {
      const tag = path.parentPath
      invariant(tag.isJSXOpeningElement())

      const componentName = tag.node.name

      const namePath = path.get('name')
      invariant(namePath.isJSXIdentifier(), 'namespace not supported')
      const propName = namePath.node.name

      // this.file.get()
      console.log(componentName, propName)
    }

    // Variables
    else if (path.isVariableDeclarator()) {
      this.scanPath(path.get('id'), ...pathCtx)
    }

    //
    else if (path.isMemberExpression()) {
      const fieldName = evalProperty(path)

      if (fieldName === undefined) return

      // obj.x
      if (pathCtx.length) {
        const [propPath, ...ctx] = pathCtx
        const propName = evalProperty(propPath)
        if (propName === undefined || fieldName !== propName) return

        this.scanParentPath(path, ...ctx)
      }

      // TRACKED.x
      else {
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

            if (ARRAY_ITERATOR.hasOwnProperty(fieldName)) {
              const [argElementIdx, argSelfIdx] = ARRAY_ITERATOR[fieldName]
              const callbackPath = args[0]
              invariant(callbackPath, `expected callback for '${fieldName}()'`)

              const callbackAnalysis = this.file.get(callbackPath)
              invariant(
                callbackAnalysis instanceof FunctionAnalysis,
                `expected callback to be function for '${fieldName}`
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

            if (RETURNS_ARRAY_ELEMENT.includes(fieldName)) {
              this.getField(0).scanParentPath(path.parentPath, ...pathCtx)
              validMethod = true
            } else if (RETURNS_SELF.includes(fieldName)) {
              this.scanParentPath(path.parentPath, ...pathCtx)
              validMethod = true
            }

            if (validMethod) return
          }
        }

        this.getField(
          isNaN(+fieldName) ? fieldName : 0,
          variables
        ).scanParentPath(path)
      }
    }

    // Object / array literals
    else if (path.isObjectExpression() || path.isArrayExpression()) {
      this.scanParentPath(path, ...pathCtx)
    }

    // var { }
    else if (path.isObjectPattern()) {
      for (const prop of path.get('properties')) {
        // var { ...rest }
        if (prop.isRestElement()) {
          this.scanPath(prop.get('argument'), ...pathCtx)
        }

        // var { prop }
        else if (prop.isObjectProperty()) {
          const fieldName = evalProperty(prop)
          if (fieldName === undefined) return
          const value = prop.get('value') as NodePath<t.LVal>

          // var { x } = { x: TRACKED }
          if (pathCtx.length) {
            const [propPath, ...ctx] = pathCtx
            const propName = evalProperty(propPath)
            if (propName === undefined || fieldName !== propName) return
            this.scanPath(value, ...ctx)
          }

          // var { x } = TRACKED
          else {
            this.getField(fieldName).scanPath(value)
          }
        }
      }
    }

    // var x
    else if (path.isIdentifier()) {
      const binding = path.scope.getBinding(path.node.name)
      if (!binding) return

      for (const refPath of binding.referencePaths) {
        // Prevent circular loops
        if (refPath.key === 'left') continue

        this.scanParentPath(refPath, ...pathCtx)
      }
    }

    // For loops
    else if (path.isForOfStatement()) {
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
    }
  }
}
