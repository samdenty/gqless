import { Selection, FieldSelection, Fragment } from '../../Selection'
import { getAlias } from './getAlias'
import { computed, uniquify } from '../../utils'
import { resolveAliases } from './resolveAliases'

export class SelectionTree<TSelection extends Selection = Selection> {
  public _duplicatedFragments: Map<string, SelectionTree<Fragment>> = this
    ._parent
    ? (this._parent as any).duplicatedFragments
    : new Map()

  public _allFragments: WeakMap<Fragment, string | undefined> = this._parent
    ? (this._parent as any).allFragments
    : new WeakMap()

  public _children: SelectionTree[] = []

  constructor(public _selection: TSelection, public _parent?: SelectionTree) {
    const fragmentTree = this._getExistingTree()

    if (fragmentTree) return fragmentTree as any
  }

  private _getExistingTree(): SelectionTree<Fragment> | void {
    if (!(this._selection instanceof Fragment)) return
    const fragment: Fragment = this._selection as any

    // If it already exists, convert from inline->named
    if (this._allFragments.has(fragment)) {
      // only if not already named,
      const existingName = this._allFragments.get(fragment)
      if (existingName) return this._duplicatedFragments.get(existingName)

      const name = uniquify(fragment.toString(), name =>
        this._duplicatedFragments.has(name)
      )

      this._duplicatedFragments.set(name, this as any)
      this._allFragments.set(fragment, name)
      return
    }

    // Add as inline first
    this._allFragments.set(fragment, undefined)
  }

  public _resolveAliases = resolveAliases

  @computed()
  public get _path(): SelectionTree<any>[] {
    return this._parent ? [...this._parent._path, this] : [this]
  }

  @computed()
  public get _alias(): string | undefined {
    if (!(this._selection instanceof FieldSelection)) return
    return getAlias(this as any)
  }

  @computed()
  public get _key() {
    if (!(this._selection instanceof FieldSelection)) return
    return this._alias || this._selection.field._name
  }

  public toString() {
    return this._path.map(t => t._selection.toString()).join('.')
  }
}
