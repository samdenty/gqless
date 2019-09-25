import { buildArguments, Formatter } from '../QueryBuilder'

import { FieldNode, Node } from '../Node'
import { Selection } from './Selection'

const argsFormatter = new Formatter({ prettify: false, variables: false })

export class FieldSelection<TNode extends Node = Node> extends Selection<
  TNode
> {
  constructor(
    public field: FieldNode<TNode>,
    public args?: Record<string, any>
  ) {
    super(field.ofNode)
  }

  public toString() {
    const args = this.args
      ? `(${buildArguments(argsFormatter, this.args)})`
      : ''

    return this.field.name + args
  }
}
