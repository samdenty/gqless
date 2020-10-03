import { Fragment } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'
import { DataContext } from '../Node'

export class FragmentAccessor extends Accessor<Fragment> {
  protected _resolved =
    this.parent!.resolved &&
    (!this.parent!.value || this.parent!.value.node === this.selection.node)

  constructor(public parent: Accessor, fragment: Fragment) {
    super(parent, fragment)

    if (fragment.node !== parent.node) {
      this.parent.onValueChange(value => {
        this.resolved =
          this.parent.resolved && (!value || value.node === fragment.node)
      })
    }

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
    for (let i = this.parent.extensions.length - 1; i >= 0; --i) {
      const extension = this.parent.extensions[i]
      if (extension.node !== this.selection.node) continue

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
