import { Selection } from './Selection'
import { ObjectNode, InterfaceNode } from '../Node'
import { Type } from '../Type'

export type UFragment = ObjectNode | InterfaceNode

export class Fragment extends Selection {
  constructor(type: Type, public name?: string) {
    super(type)
  }

  public toString() {
    return this.name || `${this.type.name || ''}Fragment`
  }
}
