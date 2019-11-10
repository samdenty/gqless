import { Extension } from './Extension'
import { Accessor } from '../../Accessor'
import { ComputableExtension } from './ComputableExtension'
import { computed } from '../../utils'
import { ScalarNode } from '../ScalarNode'

export class ComputedExtension extends Extension {
  constructor(parent: ComputableExtension, public accessor: Accessor) {
    super(parent, parent.node$)
  }

  @computed()
  public get data$(): any {
    const data =
      this.accessor.node$ instanceof ScalarNode
        ? this.accessor.getData$({
            // Remove extensions, to prevent an infinite loop
            extensions$: [],
          })
        : this.accessor.data$

    return (this.parent$ as ComputableExtension).getData(data)
  }
}
