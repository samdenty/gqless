import equal from 'fast-deep-equal'
import { types as t, NodePath } from '@babel/core'
import { Cache, FileAnalysis, PropAnalysis, FunctionAnalysis } from '..'

export class Analysis {
  public properties = new Set<PropAnalysis>()
  public functions = new Set<FunctionAnalysis>()

  public file!: FileAnalysis
  public cache!: Cache

  constructor(public parent?: Analysis) {
    if (parent) {
      this.file = parent.file
      this.cache = parent.cache
    }
  }

  public getFunction(
    path: NodePath<
      t.ArrowFunctionExpression | t.FunctionExpression | t.FunctionDeclaration
    >
  ) {
    for (const funcAnalysis of this.functions) {
      if (funcAnalysis.func === path) return funcAnalysis
    }
    const funcAnalysis = new FunctionAnalysis(this, path)
    this.functions.add(funcAnalysis)
    return funcAnalysis
  }

  public getProperty(property: string, variables?: object) {
    for (const propAnalysis of this.properties) {
      if (
        propAnalysis.name === property &&
        equal(propAnalysis.variables, variables)
      ) {
        return propAnalysis
      }
    }

    const propAnalysis = new PropAnalysis(this, property, variables)
    this.properties.add(propAnalysis)
    return propAnalysis
  }
}
