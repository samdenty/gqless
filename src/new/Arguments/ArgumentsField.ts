import { NodeContainer } from '../NodeContainer'
import { Query } from '../../Query'
import { UArguments } from './Arguments'

export class ArgumentsField<
  T extends UArguments = UArguments,
  TNullable extends boolean = false
> extends NodeContainer<T, TNullable> {
  public accessed = false

  constructor(query: Query, node: T, nullable?: TNullable) {
    super(query, node, nullable)
  }
}
