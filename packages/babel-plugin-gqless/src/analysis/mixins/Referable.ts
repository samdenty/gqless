import { types as t, NodePath } from '@babel/core'
import { PropAnalysis } from '..'
import { Analysis } from '..'

export class Referable<TNode extends t.Node = t.Node> {
  constructor(public path: NodePath<TNode>) {}

  public properties = new Set<PropAnalysis>()

  public getProperty(
    this: Analysis & Referable,
    property: NodePath<t.ObjectProperty>
  ) {
    for (const propAnalysis of this.properties) {
      if (propAnalysis.path === property) {
        return propAnalysis
      }
    }

    const propAnalysis = new PropAnalysis(this, property)
    this.properties.add(propAnalysis)
    return propAnalysis
  }
}
