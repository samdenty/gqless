import { Extension } from './Extension'
import { Node } from '../abstract'
import { UNodeExtension } from './NodeExtension'

export class ComputedExtension extends Extension {
  constructor(
    parent: Extension | undefined,
    node: Node,
    getData: (data: any) => UNodeExtension
  ) {
    super(parent, node)
  }
}
