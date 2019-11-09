import { Fragment } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'
import { DataContext } from '../Node'

export class FragmentAccessor<
  TFragment extends Fragment = Fragment,
  TChildren extends Accessor = Accessor
> extends Accessor<TFragment, TChildren> {
  protected __resolved =
    this._parent!._resolved &&
    (!this._parent!._value ||
      this._parent!._value.node === this._selection._node)

  constructor(public _parent: Accessor, fragment: TFragment) {
    super(_parent, fragment)

    if (fragment._node !== _parent._node) {
      this._parent._onValueChange(value => {
        this._resolved =
          this._parent._resolved && (!value || value.node === fragment._node)
      })
    }

    // Sync value with parent
    // (only if the node is the same)
    syncValue(this, value =>
      value.node === fragment._node ? value : undefined
    )
    this._loadExtensions()
  }

  /**
   * Makes the parent temporarily return
   * this accessor's data
   */
  public startResolving() {
    const originalAccessor = this._parent._fragmentToResolve
    this._parent._fragmentToResolve = this
    const resetAccessor = () => {
      this._parent._fragmentToResolve = originalAccessor
      removeDisposer()
    }
    const removeDisposer = this._addDisposer(resetAccessor)
    return resetAccessor
  }

  protected _initializeExtensions() {
    // Copy extensions from parent
    for (let i = this._parent._extensions.length - 1; i >= 0; --i) {
      const extension = this._parent._extensions[i]
      if (extension._node !== this._selection._node) continue

      this._extensions.unshift(extension)
    }
  }
  public _getData(ctx?: DataContext): any {
    return this._selection._node.getData({
      accessor: this,
      ...ctx,
    })
  }
  public toString() {
    return this._selection.toString()
  }
}
