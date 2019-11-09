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
    public _scheduler: Scheduler,
    public _cache: Cache = new Cache(selection._node)
  ) {
    super(undefined, selection)
    this._value = _cache._rootValue

    this._addDisposer(
      _cache._onRootValueChange(() => (this._value = _cache._rootValue))
    )

    this._loadExtensions()
  }

  // TODO: This should be replace with a Generic inside accessor

  public _getData(ctx?: DataContext): any {
    return this._selection._node.getData({
      accessor: this,
      ...ctx,
    })
  }

  public _updateValue(value: Value) {
    this._cache._rootValue = value
  }

  public toString() {
    return this._selection.toString()
  }
}
