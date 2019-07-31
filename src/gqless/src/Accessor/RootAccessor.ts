import { RootSelection } from '../Selection'
import { Accessor } from './Accessor'
import { Cache, Value } from '../Cache'
import { Scheduler } from '../Scheduler'
import { NodeDataType } from '../Node'

export class RootAccessor<
  TSelection extends RootSelection = RootSelection,
  TChildren extends Accessor = Accessor
> extends Accessor<TSelection, TChildren> {
  constructor(
    rootSelection: TSelection,
    public cache: Cache,
    public scheduler: Scheduler
  ) {
    super(undefined, rootSelection)
    this.value = new Value(rootSelection.node, {})

    cache.store.set(this.toString(), this.value)

    this.updateExtensions()
  }

  public data: TSelection extends RootSelection<infer TNode>
    ? NodeDataType<TNode>
    : never = this.selection.createProxy(this) as any

  public toString() {
    return this.selection.toString()
  }
}
