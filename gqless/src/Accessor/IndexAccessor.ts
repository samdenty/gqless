import {
  ArrayNode,
  ComputableExtension,
  ComputedExtension,
  DataTrait,
  DataContext,
} from '../Node'
import { Selection } from '../Selection'
import { Accessor } from './Accessor'
import { syncValue } from './utils'

export class IndexAccessor extends Accessor {
  protected _resolved = this.parent.resolved

  constructor(public parent: Accessor, public index: number) {
    super(
      parent,
      parent.selection,
      (parent instanceof IndexAccessor
        ? (parent.node as ArrayNode<any>)
        : parent.selection.node
      ).ofNode
    )

    // Sync from parent status
    this.addDisposer(
      this.parent.onStatusChange(status => {
        this.status = status
      })
    )

    this.parent.onResolvedChange(resolved => (this.resolved = resolved))
    syncValue(this, this.toString())
    this.loadExtensions()
    this.scheduler.commit.stageUntilValue(this)
  }

  protected initializeExtensions() {
    super.initializeExtensions()

    for (let i = this.parent.extensions.length - 1; i >= 0; --i) {
      let extension = this.parent.extensions[i].childIndex()
      if (!extension) continue

      if (extension instanceof ComputableExtension) {
        extension = new ComputedExtension(extension, this)
      }

      this.extensions.unshift(extension)
    }
  }

  public getData(ctx?: DataContext): any {
    return (this.selection.node.ofNode as DataTrait).getData({
      accessor: this,
      ...ctx,
    })
  }

  public toString() {
    return `${this.index}`
  }
}
