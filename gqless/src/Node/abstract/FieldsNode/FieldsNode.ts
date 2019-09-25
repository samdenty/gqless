import { Node } from '../Node'
import { ScalarNode, ArrayNode, UnionNode, EnumNode } from '../../'
import { lazyGetters } from '@gqless/utils'
import { FieldNode } from './FieldNode'
import { Outputable } from '../Outputable'
import { Mix, Generic } from 'mix-classes'
import { Extension } from '../../Extension'

export type IFieldsNodeOptions = {
  name: string
  extension?: Extension
}

export type UFieldsNode =
  | ArrayNode<any>
  | FieldsNode<any>
  | UnionNode<any>
  | ScalarNode
  | EnumNode

export type UFieldsNodeRecord = Record<string, FieldNode<UFieldsNode>>

export interface FieldsNode<TData = any> extends Node<TData> {}

export class FieldsNode<TData> extends Mix(Outputable, Generic(Node)) {
  public name?: string
  public fields: UFieldsNodeRecord

  constructor(
    fields: UFieldsNodeRecord,
    { name, extension }: IFieldsNodeOptions
  ) {
    super([extension])

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
