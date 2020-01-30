import equal from 'fast-deep-equal'
import { types as t, NodePath } from '@babel/core'
import { Cache, FileAnalysis, PropAnalysis, FunctionAnalysis } from '..'

export class Analysis {
  public properties = new Set<PropAnalysis>()

  public file!: FileAnalysis
  public cache!: Cache

  constructor(public parent?: Analysis) {
    if (parent) {
      this.file = parent.file
      this.cache = parent.cache
    }
  }

  public getProperty(property: string | 0, variables?: object) {
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
