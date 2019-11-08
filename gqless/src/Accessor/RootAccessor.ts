import { Cache, Value } from '../Cache'
import { ObjectNode, DataContext } from '../Node'
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
    this.value = cache._rootValue

    this.addDisposer(
      cache._onRootValueChange(() => (this.value = cache._rootValue))
    )

    this._loadExtensions()
  }

  // TODO: This should be replace with a Generic inside accessor

  public getData(ctx?: DataContext): any {
    return this.selection.node.getData({
      accessor: this,
      ...ctx,
    })
  }

  public _updateValue(value: Value) {
    this.cache._rootValue = value
  }

  public toString() {
    return this.selection.toString()
  }
}
