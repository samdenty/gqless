import { Node } from '../Node'
import { Query } from '../../Query'
import { StringNode, NumberNode, UScalarNode, ScalarNode } from '../ScalarNode'
import { DataNode } from '../IDataNode'
import { ObjectNodeField } from './ObjectNodeField'
import { ArrayNode } from '../ArrayNode'
import { memoizedGetters } from '../../utils'

export type IObjectNodeOptions<Typename> = {
  name?: Typename
}

export type UObjectNode =
  | ArrayNode<any, boolean>
  | ObjectNode<any, any>
  | UScalarNode

type UObjectNodeRecord<T extends keyof any> = Record<
  T,
  ObjectNodeField<UObjectNode>
>

export type UObjectNodeDataType<T extends Node<any>> = T extends ScalarNode<
  infer U
>
  ? U
  : T extends ObjectNode<any, any>
  ? T['$$dataType']
  : T extends ArrayNode<any, boolean>
  ? T['$$dataType']
  : never

type ObjectNodeDataType<T extends UObjectNodeRecord<keyof T>> = {
  [P in keyof T]: UObjectNodeDataType<T[P]['node']>
} /* @TODO: This type breaks for some reason (to a plain {}) if all fields are nullable (same with InputObject)
  {
  [P in Exclude<keyof T, NonNullableKeys<T>>]?: UObjectNodeDataType<
    T[P]['node']
  >
} &
  {
    [P in Exclude<keyof T, NullableKeys<T>>]: UObjectNodeDataType<T[P]['node']>
  }*/

export class ObjectNode<
  T extends ObjectNodeDataType<TNode>,
  TNode extends UObjectNodeRecord<keyof T> = UObjectNodeRecord<keyof T>,
  Typename extends string = string
> extends Node<T> {
  public name?: string
  public fields: TNode
  public data: DataNode<T & { __typename: Typename }>

  constructor(
    query: Query,
    fields: TNode,
    { name }: IObjectNodeOptions<Typename> = {}
  ) {
    super(query)

    this.fields = memoizedGetters(fields)
    this.name = name
  }
}
