import { NodeContainer } from '../abstract'
import { UArguments } from './Arguments'

export class ArgumentsField extends NodeContainer<UArguments> {
  // This is set inside Arguments
  public _name: string = ''

  constructor(node: UArguments, nullable?: boolean) {
    super(node, nullable)
  }
}
