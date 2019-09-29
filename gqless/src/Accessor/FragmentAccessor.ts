import { Fragment } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'

export class FragmentAccessor<
  TFragment extends Fragment = Fragment,
  TChildren extends Accessor = Accessor
> extends Accessor<TFragment, TChildren> {
  constructor(public parent: Accessor, fragment: TFragment) {
    super(parent, fragment)

    // Sync value with parent
    // (only if the node is the same)
    syncValue(this, value => (value.node === fragment.node ? value : undefined))

    this.loadExtensions()
  }

  protected initializeExtensions() {
    // Copy extensions from parent
    this.extensions.unshift(...this.parent.extensions)
  }

  public get data(): any {
    return this.selection.node.getData(this)
  }

  public toString() {
    return this.selection.toString()
  }
}
