import { Query } from '../Query'
import { Node } from './Node'
import { ArrayNode } from './ArrayNode'
import { ObjectNode } from './ObjectNode'
import { ScalarNode } from './ScalarNode'
import { InputNode } from './InputNode'
import { Arguments } from './Arguments'

export type NullableKeys<T> = ({
  [P in keyof T]: T[P] extends NodeContainer<any, true> ? P : never
})[keyof T]

export type NonNullableKeys<T> = ({
  [P in keyof T]: T[P] extends NodeContainer<any, false> ? P : never
})[keyof T]

export abstract class NodeContainer<
  T extends Node,
  TNullable extends boolean
> extends Node {
  constructor(
    query: Query,
    public node: T,
    public nullable = false as TNullable
  ) {
    super(query)
  }
}
