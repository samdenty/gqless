import { Cache, Value } from '../Cache'
import { NodeDataType, ObjectNode, resolveData } from '../Node'
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

    this.loadExtensions()
  }

  // TODO: This should be replace with a Generic inside accessor
  public data = resolveData(this.selection.node, this)

  public toString() {
    return this.selection.toString()
  }
}
