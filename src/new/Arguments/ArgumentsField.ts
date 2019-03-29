import { NodeContainer } from '../NodeContainer'
import { UArguments } from './Arguments'

export class ArgumentsField<
  T extends UArguments,
  TNullable extends boolean = false
> extends NodeContainer<T, TNullable> {
  public accessed = false

  constructor(node: T, nullable?: TNullable) {
    super(node, nullable)
  }
}
