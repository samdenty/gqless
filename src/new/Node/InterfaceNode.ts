import {
  FieldsNode,
  UFieldsNodeRecord,
  IFieldsNodeOptions,
  NodeDataType,
} from './abstract'
import { ObjectNode } from './ObjectNode'

export class InterfaceNode<
  TImplementations extends ObjectNode<any, any, any>,
  TNode extends UFieldsNodeRecord<keyof T>,
  T
> extends FieldsNode<TNode, T, any, NodeDataType<TImplementations>> {
  constructor(
    fields: TNode,
    public implementations: TImplementations[],
    options?: IFieldsNodeOptions<string>
  ) {
    super(fields, options)
  }
}
