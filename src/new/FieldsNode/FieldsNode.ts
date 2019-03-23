import { Node, NodeDataType } from '../Node'
import { UScalarNode, ArrayNode } from '../nodes'
import { memoizedGetters } from '../../utils'
import { UnionNode } from '../nodes/UnionNode'
import { FieldNode } from './FieldNode'

export type IFieldsNodeOptions<Typename> = {
  name?: Typename
}

export type UFieldsNode =
  | ArrayNode<any, boolean>
  | FieldsNode<any, any>
  | UnionNode<any>
  | UScalarNode

export type UFieldsNodeRecord<T extends keyof any> = Record<
  T,
  FieldNode<UFieldsNode, any, any>
>

export type FieldsNodeDataType<
  T extends UFieldsNodeRecord<keyof T>,
  Typename extends string
> = { [P in keyof T]: NodeDataType<T[P]['ofNode']> } & {
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

export abstract class FieldsNode<
  T extends FieldsNodeDataType<TNode, Typename>,
  TNode extends UFieldsNodeRecord<keyof T> = UFieldsNodeRecord<keyof T>,
  Typename extends string = string
> extends Node<T> {
  public name?: Typename
  public fields: TNode

  constructor(fields: TNode, { name }: IFieldsNodeOptions<Typename> = {}) {
    super()

    this.fields = memoizedGetters(fields)
    this.name = name
  }
}
