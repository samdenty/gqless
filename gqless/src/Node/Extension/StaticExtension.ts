import { Extension } from './Extension'
import { Node } from '../abstract'
import { UNodeExtension } from './NodeExtension'
import { DataTrait } from '../traits'

export class StaticExtension extends Extension {
  constructor(
    parent: Extension | undefined,
    node: Node & DataTrait,
    public data: UNodeExtension,
    keyedBy?: any
  ) {
    super(parent, node, keyedBy)
  }
}
