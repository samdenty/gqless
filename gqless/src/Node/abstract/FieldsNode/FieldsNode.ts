import { Node } from '../Node'
import { ScalarNode, ArrayNode, UnionNode, EnumNode } from '../../'
import { lazyGetters } from '@gqless/utils'
import { FieldNode } from './FieldNode'
import { Mix, Generic } from 'mix-classes'
import { Extension } from '../../Extension'
import { ObjectNode } from '../../ObjectNode'
import { InterfaceNode } from '../../InterfaceNode'

export type IFieldsNodeOptions = {
  name: string
  extension?: Extension
}

export type UFieldsNode =
  | ObjectNode
  | InterfaceNode
  | UnionNode
  | ArrayNode
  | ScalarNode
  | EnumNode

export type UFieldsNodeRecord = Record<string, FieldNode<UFieldsNode>>

export interface FieldsNode<TData = any> extends Node<TData> {}

export class FieldsNode<TData> extends Mix(Generic(Node)) {
  public name: string
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
