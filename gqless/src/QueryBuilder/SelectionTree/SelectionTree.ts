import { Selection, FieldSelection, Fragment } from '../../Selection'
import { getAlias } from './getAlias'
import { computed } from '@gqless/utils'
import { uniquify } from '../../utils'
import { resolveAliases } from './resolveAliases'

export class SelectionTree<TSelection extends Selection = Selection> {
  public duplicatedFragments: Map<string, SelectionTree<Fragment>> = this.parent
    ? (this.parent as any).duplicatedFragments
    : new Map()

  public allFragments: WeakMap<Fragment, string | undefined> = this.parent
    ? (this.parent as any).allFragments
    : new WeakMap()

  public children: SelectionTree[] = []

  constructor(public selection: TSelection, public parent?: SelectionTree) {
    const fragmentTree = this.getExistingTree()

    if (fragmentTree) return fragmentTree as any
  }

  private getExistingTree(): SelectionTree<Fragment> | void {
    if (!(this.selection instanceof Fragment)) return
    const fragment: Fragment = this.selection as any

    // If it already exists, convert from inline->named
    if (this.allFragments.has(fragment)) {
      // only if not already named,
      const existingName = this.allFragments.get(fragment)
      if (existingName) return this.duplicatedFragments.get(existingName)

      const name = uniquify(fragment.toString(), name =>
        this.duplicatedFragments.has(name)
      )

      this.duplicatedFragments.set(name, this as any)
      this.allFragments.set(fragment, name)
      return
    }

    // Add as inline first
    this.allFragments.set(fragment, undefined)
  }

  public resolveAliases = resolveAliases

  @computed
  public get path(): SelectionTree<any>[] {
    return this.parent ? [...this.parent.path, this] : [this]
  }

  @computed
  public get alias(): string | undefined {
    if (!(this.selection instanceof FieldSelection)) return
    return getAlias(this as any)
  }

  @computed
  public get key() {
    if (!(this.selection instanceof FieldSelection)) return
    return this.alias || this.selection.field.name
  }

  public toString() {
    return this.path.map(t => t.selection.toString()).join('.')
  }
}
