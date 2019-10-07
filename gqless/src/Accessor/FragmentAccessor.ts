import { Fragment } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'
import { resolveData } from '../Node'

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

  /**
   * Makes the parent temporarily return
   * this accessor's data
   */
  public startResolving() {
    const originalAccessor = this.parent.fragmentToResolve
    this.parent.fragmentToResolve = this
    const resetAccessor = () => {
      this.parent.fragmentToResolve = originalAccessor
      removeDisposer()
    }
    const removeDisposer = this.addDisposer(resetAccessor)
    return resetAccessor
  }

  protected initializeExtensions() {
    // Copy extensions from parent
    this.extensions.unshift(...(this.parent.extensions as any[]))
  }

  public get data(): any {
    return resolveData(this.selection.node, this)
  }

  public toString() {
    return this.selection.toString()
  }
}
