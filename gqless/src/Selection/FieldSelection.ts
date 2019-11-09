import { buildArguments, Formatter } from '../QueryBuilder'

import { FieldNode, DataTrait } from '../Node'
import { Selection } from './Selection'

const argsFormatter = new Formatter({ prettify: false, variables: false })

export class FieldSelection<
  TNode extends DataTrait = DataTrait
> extends Selection<TNode> {
  constructor(
    public _field: FieldNode<TNode>,
    public readonly _args?: Record<string, any>
  ) {
    super(_field._ofNode)
  }

  public toString() {
    const args = this._args
      ? `(${buildArguments(argsFormatter, this._args, {
          _node: this._field._args!,
        })})`
      : ''

    return this._field._name + args
  }
}
