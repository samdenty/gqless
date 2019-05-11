import { RootSelection } from '../Selection'
import { Accessor } from './Accessor'
import { Cache } from '../Cache'

export class RootAccessor<
  TSelection extends RootSelection<any> = RootSelection<any>,
  TChildren extends Accessor = Accessor
> extends Accessor<TSelection, TChildren> {
  constructor(rootSelection: TSelection, private cache: Cache) {
    super(undefined, rootSelection)
    // console.log(this.cache.entries)
  }

  public data: TSelection extends RootSelection<infer TNode>
    ? ReturnType<TNode['getData']>
    : never = this.selection.createProxy(this)

  public toString() {
    return this.selection.toString()
  }

  // public onDataAccessed = onEvent<Middleware['onDataAccessed']>()
  // public dataAccessed = this.onDataAccessed.emit

  // public onSelectUpdate = onEvent<Middleware['onSelectUpdate']>()
  // public selectUpdate = this.onSelectUpdate.emit

  // public onGetScalarData = onEvent<Middleware['getScalarData']>()
  // public getScalarData = this.onGetScalarData.first(
  //   value => value !== undefined
  // )
}
