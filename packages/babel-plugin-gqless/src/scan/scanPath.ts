import { types as t, NodePath } from '@babel/core'
import { evalProperty } from '../evaluate'
import { invariant } from '@gqless/utils'

export interface Iterate {
  kind: 'ITERATE'
  path: NodePath<t.ForOfStatement>
  pathCtx: PathCtx
}

export interface Call {
  kind: 'CALL'
  callPath: NodePath<t.CallExpression>
  path: NodePath
  pathCtx: PathCtx
}

export interface PropertyAccess {
  kind: 'PROPERTY_ACCESS'
  name: string
  path: NodePath
  pathCtx: PathCtx
}

export type ScanResult = PropertyAccess | Iterate | Call

export type PathCtx = NodePath<t.ObjectProperty>[]

export function* scanParentPath(
  path: NodePath,
  ...pathCtx: PathCtx
): Generator<ScanResult, void> {
  if (path.parentPath.isCallExpression()) {
    yield { kind: 'CALL', path, callPath: path.parentPath, pathCtx }
  }

  //
  else if (path.parentPath.isObjectProperty()) {
    const propPath = path.parentPath

    // x: TRACKED
    if (path.key === 'value') {
      yield* scanParentPath(propPath, propPath, ...pathCtx)
    }

    // [TRACKED]: x
    else {
      // TODO
    }
  } else {
    yield* scanPath(path.parentPath, ...pathCtx)
  }
}

export function* scanPath(
  path: NodePath,
  ...pathCtx: PathCtx
): Generator<ScanResult, void> {
  // {TRACKED}
  if (path.isJSXExpressionContainer()) {
    yield* scanParentPath(path)
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
    yield* scanPath(path.get('id'), ...pathCtx)
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

      yield* scanParentPath(path, ...ctx)
    }

    // TRACKED.x
    else {
      yield { kind: 'PROPERTY_ACCESS', name: fieldName, path, pathCtx }
    }
  }

  // Object / array literals
  else if (path.isObjectExpression() || path.isArrayExpression()) {
    yield* scanParentPath(path, ...pathCtx)
  }

  // var { }
  else if (path.isObjectPattern()) {
    for (const prop of path.get('properties')) {
      // var { ...rest }
      if (prop.isRestElement()) {
        yield* scanPath(prop.get('argument'), ...pathCtx)
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
          yield* scanPath(value, ...ctx)
        }

        // var { x } = TRACKED
        else {
          yield {
            kind: 'PROPERTY_ACCESS',
            name: fieldName,
            path: value,
            pathCtx,
          }
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

      yield* scanParentPath(refPath, ...pathCtx)
    }
  }

  // For loops
  else if (path.isForOfStatement()) {
    yield { kind: 'ITERATE', path, pathCtx }
  }
}
