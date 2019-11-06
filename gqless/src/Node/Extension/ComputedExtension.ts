import { Extension } from './Extension'
import { Accessor } from '../../Accessor'
import { ComputableExtension } from './ComputableExtension'
import { computed } from '../../utils'

export class ComputedExtension extends Extension {
  constructor(parent: ComputableExtension, public accessor: Accessor) {
    super(parent, parent.node)
  }

  @computed()
  public get data() {
    return (this.parent as ComputableExtension).getData(this.accessor.data)
  }
}
