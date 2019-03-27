import { Node, NodeDataType } from '../Node'
import {
  UScalarNode,
  ArrayNode,
  StringNode,
  ObjectNode,
  NumberNode,
  BooleanNode,
} from '../nodes'
import { memoizedGetters } from '../../utils'
import { UnionNode } from '../nodes/UnionNode'
import { FieldNode } from './FieldNode'
import { Arguments } from '../Arguments'

export type IFieldsNodeOptions<Typename> = {
  name?: Typename
}

export type UFieldsNode =
  | ArrayNode<any, boolean>
  | FieldsNode<any, any>
  | UnionNode<any>
  | UScalarNode

interface NodeOfArray<T> extends ArrayNode<NodeOf<T>> {}

export type NodeOf<T extends any> = T extends Array<infer T>
  ? NodeOfArray<T>
  : T extends boolean
  ? BooleanNode<T>
  : T extends string
  ? StringNode<T>
  : T extends number
  ? NumberNode<T>
  : T extends object
  ? ObjectNode<T>
  : never

export type UFieldsNodeRecord<T extends any> = {
  [K in keyof T]: FieldNode<NodeOf<T[K]>, any, any>
}

export type FieldsNodeDataType<T extends any, Typename extends string> = {
  [P in keyof T]: NodeDataType<T[P]['ofNode']>
} & {
  __typename?: Typename
} /* @TODO: This type breaks for some reason (to a plain {}) if all fields are nullable (same with InputObject)
  {
  [P in Exclude<keyof T, NonNullableKeys<T>>]?: UObjectNodeDataType<
    T[P]['node']
  >
} &
  {
    [P in Exclude<keyof T, NullableKeys<T>>]: UObjectNodeDataType<T[P]['node']>
  }*/

export /*abstract*/ class FieldsNode<
  TData extends FieldsNodeDataType<TNode, Typename>,
  TNode extends UFieldsNodeRecord<TData> = UFieldsNodeRecord<TData>,
  Typename extends string = string,
  TDataType extends any = TData
> extends Node<TDataType> {
  public name?: Typename
  public fields: TNode

  constructor(fields: TNode, { name }: IFieldsNodeOptions<Typename> = {}) {
    super()

    this.fields = memoizedGetters(fields)
    this.name = name
  }
}
