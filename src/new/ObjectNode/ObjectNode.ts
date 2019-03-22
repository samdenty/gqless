import { Node } from '../Node'
import { Query } from '../../Query'
import { StringNode, NumberNode, UScalarNode, ScalarNode } from '../ScalarNode'
import { DataNode } from '../IDataNode'
import { Arguments, ArgumentsField } from '../Arguments'
import { ObjectNodeField } from './ObjectNodeField'
import { InputNode, InputNodeField } from '../InputNode'
import { ArrayNode } from '../ArrayNode'
import { NullableKeys, NonNullableKeys, NodeContainer } from '../NodeContainer'
import { memoizedGetters } from '../../utils'

export type IObjectNodeOptions = {
  name?: string
}

export type UObjectNode = ArrayNode<any> | ObjectNode<any, any> | UScalarNode

type UObjectNodeRecord<T extends keyof any> = Record<
  T,
  ObjectNodeField<UObjectNode>
>

export type UObjectNodeDataType<T extends Node> = T extends ScalarNode<infer U>
  ? U
  : T extends (ObjectNode<any, any>)
  ? T['data']
  : T extends ArrayNode<any>
  ? T['$$type']
  : never

type ObjectNodeDataType<T extends UObjectNodeRecord<keyof T>> = {
  [P in Exclude<keyof T, NonNullableKeys<T>>]?: UObjectNodeDataType<
    T[P]['node']
  >
} &
  {
    [P in Exclude<keyof T, NullableKeys<T>>]: UObjectNodeDataType<T[P]['node']>
  }

export class ObjectNode<
  T extends ObjectNodeDataType<TNode>,
  TNode extends UObjectNodeRecord<keyof T> = UObjectNodeRecord<keyof T>
> extends Node {
  public name?: string
  public fields: TNode

  constructor(query: Query, fields: TNode, { name }: IObjectNodeOptions = {}) {
    super(query)

    this.fields = memoizedGetters(fields)
    this.name = name
  }

  public data: DataNode<T>
}
