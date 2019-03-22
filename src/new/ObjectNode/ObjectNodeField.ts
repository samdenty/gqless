import { NodeContainer } from '../NodeContainer'
import { Query } from '../../Query'
import { UObjectNode, UObjectNodeDataType } from './ObjectNode'
import { Arguments } from '../Arguments'

export class ObjectNodeField<
  T extends UObjectNode,
  TNullable extends boolean = false
> extends NodeContainer<T, TNullable> {
  public data: UObjectNodeDataType<T>

  constructor(
    query: Query,
    node: T,
    public args?: Arguments<any>,
    nullable?: TNullable
  ) {
    super(query, node, nullable)
  }
}
