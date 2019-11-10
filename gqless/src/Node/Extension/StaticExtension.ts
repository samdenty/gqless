import { Extension } from './Extension'
import { UNodeExtension } from './NodeExtension'
import { DataTrait } from '../traits'

export class StaticExtension extends Extension {
  constructor(
    parent: Extension | undefined,
    node: DataTrait,
    public data$: UNodeExtension,
    keyedBy?: any
  ) {
    super(parent, node, keyedBy)
  }
}
