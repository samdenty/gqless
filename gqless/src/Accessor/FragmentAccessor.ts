import { Fragment } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'
import { DataContext } from '../Node'

export class FragmentAccessor<
  TFragment extends Fragment = Fragment,
  TChildren extends Accessor = Accessor
> extends Accessor<TFragment, TChildren> {
  protected __resolved =
    this.parent!._resolved &&
    (!this.parent!.value || this.parent!.value.node === this.selection.node)

  constructor(public parent: Accessor, fragment: TFragment) {
    super(parent, fragment)

    if (fragment.node !== parent.node) {
      this.parent._onValueChange(value => {
        this._resolved =
          this.parent._resolved && (!value || value.node === fragment.node)
      })
    }

    // Sync value with parent
    // (only if the node is the same)
    syncValue(this, value => (value.node === fragment.node ? value : undefined))
    this._loadExtensions()
  }

  /**
   * Makes the parent temporarily return
   * this accessor's data
   */
  public startResolving() {
    const originalAccessor = this.parent._fragmentToResolve
    this.parent._fragmentToResolve = this
    const resetAccessor = () => {
      this.parent._fragmentToResolve = originalAccessor
      removeDisposer()
    }
    const removeDisposer = this.addDisposer(resetAccessor)
    return resetAccessor
  }

  protected _initializeExtensions() {
    // Copy extensions from parent
    for (let i = this.parent.extensions.length - 1; i >= 0; --i) {
      const extension = this.parent.extensions[i]
      if (extension._node !== this.selection.node) continue

      this.extensions.unshift(extension)
    }
  }

  public getData(ctx?: DataContext): any {
    return this.selection.node.getData({
      accessor: this,
      ...ctx,
    })
  }

  public toString() {
    return this.selection.toString()
  }
}
