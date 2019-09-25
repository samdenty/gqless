import { Cache, Value } from '../Cache'
import { NodeDataType, ObjectNode } from '../Node'
import { Scheduler } from '../Scheduler'
import { Selection } from '../Selection'
import { Accessor } from './Accessor'

export class RootAccessor<
  TSelection extends Selection<ObjectNode> = Selection<ObjectNode>,
  TChildren extends Accessor = Accessor
> extends Accessor<TSelection, TChildren> {
  constructor(
    selection: TSelection,
    public scheduler: Scheduler,
    public cache: Cache = new Cache(selection.node)
  ) {
    super(undefined, selection)
    this.value = cache.rootValue

    cache.store.set(this.toString(), this.value)

    this.loadExtensions()
  }

  // TODO: This should be replace with a Generic inside accessor
  public data = this.selection.node.getData(this)

  public toString() {
    return this.selection.toString()
  }
}
