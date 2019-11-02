import { Node } from '../abstract'
import { UNodeExtension, ProxyExtension, GET_KEY } from './NodeExtension'
import { computed, PathArray } from '../../utils'

export class Extension {
  constructor(
    public parent: Extension | undefined,
    public node: Node,
    public data?: UNodeExtension
  ) {
    if (!parent) {
      // Initialize keyFragment
    }
  }

  public get isKeyable() {
    // GET_KEY should be defined across all extension instances
    return !!(this.data as ProxyExtension)?.[GET_KEY]
  }

  // private get extensionKey() {
  //   return this.path
  //     .map(ref => {
  //       if (!ref.parent) return ref.node

  //       if (ref.accessor instanceof FieldAccessor) {
  //         return ref.accessor.selection.field
  //       }
  //     })
  //     .filter(Boolean)
  // }

  // public get keyFragment() {
  //   if (!this.isKeyable) return

  //   let node = this.extensionKey[this.extensionKey.length - 1]
  //   if (node instanceof NodeContainer) {
  //     node = node.innerNode
  //   }

  //   // Fragments only work with InterfaceNode / ObjectNode
  //   if (!(node instanceof FieldsNode)) return

  //   return memoized.keyFragment(
  //     () =>
  //       new Fragment(node as UFragment, `Keyed${this.extensionKey.join('_')}`),
  //     this.extensionKey
  //   )
  // }

  @computed()
  public get path(): Extension[] {
    const basePath = this.parent ? this.parent.path : []
    const path = new PathArray(...basePath, this)

    return path
  }
}
