import { buildArguments, Formatter } from '../QueryBuilder'

import { FieldNode, DataTrait } from '../Node'
import { Selection } from './Selection'

const argsFormatter = new Formatter({ prettify: false, variables: false })

export class FieldSelection<
  TNode extends DataTrait = DataTrait
> extends Selection<TNode> {
  constructor(
    public field: FieldNode<TNode>,
    public readonly args?: Record<string, any>
  ) {
    super(field._ofNode)
  }

  public toString() {
    const args = this.args
      ? `(${buildArguments(argsFormatter, this.args, {
          _node: this.field._args!,
        })})`
      : ''

    return this.field._name + args
  }
}
