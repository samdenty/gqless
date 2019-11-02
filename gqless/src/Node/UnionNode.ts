import { Node } from './abstract'
import { Abstract } from './abstract'
import { ObjectNode } from './ObjectNode'
import { Generic, Mix } from 'mix-classes'

export interface UnionNode<TNode extends ObjectNode = ObjectNode>
  extends Node {}

export class UnionNode<TNode> extends Mix(Abstract, Generic(Node)) {
  constructor(ofNodes: TNode[]) {
    super([ofNodes])
  }
}
