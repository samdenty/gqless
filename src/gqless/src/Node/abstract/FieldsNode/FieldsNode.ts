import { Node } from '../Node'
import { ScalarNode, ArrayNode, UnionNode, EnumNode } from '../../'
import { lazyGetters } from '@gqless/utils'
import { FieldNode } from './FieldNode'

export type IFieldsNodeOptions = {
  name: string
}

export type UFieldsNode =
  | ArrayNode<any>
  | FieldsNode<any>
  | UnionNode<any>
  | ScalarNode
  | EnumNode

export type UFieldsNodeRecord = Record<string, FieldNode<UFieldsNode>>

export class FieldsNode<TData = any> extends Node<TData> {
  public name?: string
  public fields: UFieldsNodeRecord

  constructor(fields: UFieldsNodeRecord, { name }: IFieldsNodeOptions) {
    super()

    this.name = name
    this.fields = lazyGetters(fields, (fieldName, field) => {
      // Called when the getter prop is evaluated
      field.name = fieldName as string
    })
  }

  public toString() {
    return this.name
  }
}
