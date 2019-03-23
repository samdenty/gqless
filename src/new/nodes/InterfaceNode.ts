import {
  FieldsNode,
  UFieldsNodeRecord,
  FieldsNodeDataType,
  IFieldsNodeOptions,
} from '../FieldsNode'

export class InterfaceNode<
  T extends FieldsNodeDataType<TNode, never>,
  TImplementations extends FieldsNode<any, any, any>,
  TNode extends UFieldsNodeRecord<keyof T> = UFieldsNodeRecord<keyof T>
> extends FieldsNode<T, TNode> {
  constructor(
    fields: TNode,
    public implementations: TImplementations[],
    options?: IFieldsNodeOptions<string>
  ) {
    super(fields, options)
  }
}
