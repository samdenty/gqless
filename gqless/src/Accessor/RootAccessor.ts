import { Cache, Value } from '../Cache'
import { ObjectNode, DataContext } from '../Node'
import { Scheduler } from '../Scheduler'
import { Selection } from '../Selection'
import { Accessor } from './Accessor'

export class RootAccessor extends Accessor {
  constructor(
    selection: Selection,
    public scheduler: Scheduler,
    public cache: Cache = new Cache(selection.node)
  ) {
    super(undefined, selection)
    this.value = cache.rootValue

    this.addDisposer(
      cache.onRootValueChange(() => (this.value = cache.rootValue))
    )

    this.loadExtensions()
  }

  // TODO: This should be replace with a Generic inside accessor

  public getData(ctx?: DataContext): any {
    return this.selection.node.getData({
      accessor: this,
      ...ctx,
    })
  }

  public updateValue(value: Value) {
    this.cache.rootValue = value
  }

  public toString() {
    return this.selection.toString()
  }
}
