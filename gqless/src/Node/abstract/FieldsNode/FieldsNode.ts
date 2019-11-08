import { ScalarNode, ArrayNode, UnionNode, EnumNode } from '../../'
import { lazyGetters } from '@gqless/utils'
import { FieldNode } from './FieldNode'
import { NodeExtension } from '../../Extension'
import { ObjectNode } from '../../ObjectNode'
import { InterfaceNode } from '../../InterfaceNode'

export type IFieldsNodeOptions = {
  name: string
  extension?: NodeExtension
}

export type UFieldsNode =
  | ObjectNode
  | InterfaceNode
  | UnionNode
  | ArrayNode
  | ScalarNode
  | EnumNode

export type UFieldsNodeRecord = Record<string, FieldNode<UFieldsNode>>

export class FieldsNode {
  public _name: string
  public _fields: UFieldsNodeRecord

  constructor(fields: UFieldsNodeRecord, { name }: IFieldsNodeOptions) {
    this._name = name
    this._fields = lazyGetters(fields, (fieldName, field) => {
      // Called when the getter prop is evaluated
      field._name = fieldName as string
    })
  }

  public toString() {
    return this._name
  }
}
