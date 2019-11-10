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
  public name$: string
  public fields$: UFieldsNodeRecord

  constructor(fields: UFieldsNodeRecord, { name }: IFieldsNodeOptions) {
    this.name$ = name
    this.fields$ = lazyGetters(fields, (fieldName, field) => {
      // Called when the getter prop is evaluated
      field.name$ = fieldName as string
    })
  }

  public toString() {
    return this.name$
  }
}
