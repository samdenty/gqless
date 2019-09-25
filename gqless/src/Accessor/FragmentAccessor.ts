import { Fragment } from '../Selection'
import { Accessor } from './Accessor'

export class FragmentAccessor<
  TFragment extends Fragment = Fragment,
  TChildren extends Accessor = Accessor
> extends Accessor<TFragment, TChildren> {
  constructor(public parent: Accessor, fragment: TFragment) {
    super(parent, fragment)

    // Sync value with parent
    // (only if the node is the same)
    this.syncValue(value => (value.node === fragment.node ? value : undefined))
    this.loadExtensions()
    this.stageIfRequired()
  }

  protected initializeExtensions() {
    // Copy extensions from parent
    this.extensions.unshift(...this.parent.extensions)
  }

  // public get data() {
  //   return this.selection.field.ofNode.getData(this)
  // }

  public toString() {
    return this.selection.toString()
  }
}
