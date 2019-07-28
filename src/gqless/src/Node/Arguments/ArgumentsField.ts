import { NodeContainer } from '../abstract'
import { UArguments } from './Arguments'

export class ArgumentsField extends NodeContainer<UArguments> {
  public accessed = false

  constructor(node: UArguments, nullable?: boolean) {
    super(node, nullable)
  }
}
