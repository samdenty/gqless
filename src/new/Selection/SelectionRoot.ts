import { Selection } from './Selection'
import { SelectionField } from './SelectionField'
import { ObjectNode, UScalarNode } from '../Node'
import { onEvent } from '../../utils'
import { ScalarProxyHandler, Middleware } from '../Middleware'

export class SelectionRoot<
  TNode extends ObjectNode<any, any, any>
> extends Selection<TNode, SelectionField<any>> {
  public root = this

  constructor(node: TNode) {
    super(null, node)
  }

  public onSelect = onEvent<Middleware['onSelect']>()
  public select = this.onSelect.emit

  public onSelectUpdate = onEvent<Middleware['onSelectUpdate']>()
  public selectUpdate = this.onSelectUpdate.emit

  public onGetScalarData = onEvent<Middleware['getScalarData']>()
  public getScalarData = this.onGetScalarData.first(
    value => value !== undefined
  )

  public createProxy() {
    return this.node.getData(this) as ReturnType<TNode['getData']>
  }

  public toString() {
    return this.node.name || 'Root'
  }
}
