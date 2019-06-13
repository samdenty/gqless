import { Node, NodeDataType } from '../Node'
import { UScalarNode, ArrayNode, UnionNode } from '../../'
import { lazyGetters } from '@graphql-builder/utils'
import { FieldNode } from './FieldNode'

export type IFieldsNodeOptions<Typename> = {
  name?: Typename
}

export type UFieldsNode =
  | ArrayNode<any, boolean>
  | FieldsNode<any, any, any>
  | UnionNode<any>
  | UScalarNode

export type UFieldsNodeRecord<T extends keyof any> = {
  [K in T]: FieldNode<UFieldsNode>
}

export type FieldsDataType<TNode extends UFieldsNodeRecord<any>> = {
  [P in keyof TNode]: NodeDataType<TNode[P]['ofNode']>
}

export class FieldsNode<
  TNode extends UFieldsNodeRecord<keyof T>,
  T,
  Typename extends string = string,
  TDataType = unknown
> extends Node<TDataType extends unknown ? FieldsDataType<TNode> : TDataType> {
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
