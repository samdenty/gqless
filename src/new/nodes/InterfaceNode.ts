import {
  FieldsNode,
  UFieldsNodeRecord,
  FieldsNodeDataType,
  IFieldsNodeOptions,
} from '../FieldsNode'
import { NodeDataType } from '../Node'
import { ObjectNode } from './ObjectNode'

export class InterfaceNode<
  TData extends FieldsNodeDataType<TNode, never>,
  TImplementations extends ObjectNode<any, any, any>,
  TNode extends UFieldsNodeRecord<TData> = UFieldsNodeRecord<TData>
> extends FieldsNode<TData, TNode, any, NodeDataType<TImplementations>> {
  constructor(
    fields: TNode,
    public implementations: TImplementations[],
    options?: IFieldsNodeOptions<string>
  ) {
    super(fields, options)
  }
}
