import { Node, NodeDataType } from '../Node'
import { UScalarNode, ArrayNode } from '../nodes'
import { lazyGetters } from '../../utils'
import { UnionNode } from '../nodes/UnionNode'
import { FieldNode } from './FieldNode'

export type IFieldsNodeOptions<Typename> = {
  name?: Typename
}

export type UFieldsNode =
  | ArrayNode<any, boolean>
  | FieldsNode<any, any, any>
  | UnionNode<any>
  | UScalarNode

// interface NodeOfArray<T> extends ArrayNode<NodeOf<T>> {}

// export type NodeOf<T extends any> = T extends Array<infer T>
//   ? NodeOfArray<T>
//   : T extends boolean
//   ? BooleanNode<T>
//   : T extends string
//   ? StringNode<T>
//   : T extends number
//   ? NumberNode<T>
//   : T extends object
//   ? ObjectNode<T>
//   : never

export type UFieldsNodeRecord<T extends keyof any> = {
  [K in T]: FieldNode<UFieldsNode, any, any>
}

export type FieldsDataType<
  T extends UFieldsNodeRecord<any>,
  Typename extends string
> = { [P in keyof T]: NodeDataType<T[P]['ofNode']> } & {
  __typename: Typename
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
  TNode extends UFieldsNodeRecord<keyof T>,
  T,
  Typename extends string,
  TDataType = unknown
> extends Node<
  TDataType extends unknown ? FieldsDataType<TNode, Typename> : TDataType
> {
  public name?: Typename
  public fields: TNode

  constructor(fields: TNode, { name }: IFieldsNodeOptions<Typename> = {}) {
    super()

    this.name = name
    this.fields = lazyGetters(fields, (fieldName, field) => {
      // Called when the getter prop is evaluated
      field.name = fieldName as string
    })
  }
}
