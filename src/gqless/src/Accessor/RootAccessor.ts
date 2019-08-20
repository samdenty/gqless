import { Cache, Value } from '../Cache'
import { NodeDataType } from '../Node'
import { Scheduler } from '../Scheduler'
import { RootSelection } from '../Selection'
import { Accessor } from './Accessor'

export class RootAccessor<
  TSelection extends RootSelection = RootSelection,
  TChildren extends Accessor = Accessor
> extends Accessor<TSelection, TChildren> {
  constructor(
    rootSelection: TSelection,
    public scheduler: Scheduler,
    public cache: Cache = new Cache()
  ) {
    super(undefined, rootSelection)
    this.value = new Value(rootSelection.node, {})

    cache.store.set(this.toString(), this.value)

    this.updateExtensions()
  }

  // @TODO: This should be replace with a Generic
  public data: TSelection extends RootSelection<infer TNode>
    ? NodeDataType<TNode>
    : never = this.selection.createProxy(this) as any

  public toString() {
    return this.selection.toString()
  }
}
