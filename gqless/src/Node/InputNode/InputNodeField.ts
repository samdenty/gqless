import { NodeContainer } from '../abstract'
import { UInputNode } from './InputNode'

export class InputNodeField extends NodeContainer<UInputNode> {
  constructor(node: UInputNode, nullable?: boolean) {
    super(node, nullable)
  }
}
