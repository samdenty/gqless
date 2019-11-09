import { Extension } from './Extension'
import { Accessor } from '../../Accessor'
import { ComputableExtension } from './ComputableExtension'
import { computed } from '../../utils'
import { ScalarNode } from '../ScalarNode'

export class ComputedExtension extends Extension {
  constructor(parent: ComputableExtension, public accessor: Accessor) {
    super(parent, parent._node)
  }

  @computed()
  public get _data(): any {
    const data =
      this.accessor._node instanceof ScalarNode
        ? this.accessor._getData({
            // Remove extensions, to prevent an infinite loop
            extensions: [],
          })
        : this.accessor._data

    return (this._parent as ComputableExtension).getData(data)
  }
}
