import {
  FieldsNode,
  IFieldsNodeOptions,
  FieldsNodeDataType,
  UFieldsNodeRecord,
} from '../FieldsNode'

export type IObjectNodeOptions<Typename> = IFieldsNodeOptions<Typename> & {}
export class ObjectNode<
  T extends FieldsNodeDataType<TNode, Typename>,
  TNode extends UFieldsNodeRecord<keyof T> = UFieldsNodeRecord<keyof T>,
  Typename extends string = string
> extends FieldsNode<T, TNode, Typename> {
  public data: T

  constructor(fields: TNode, options?: IObjectNodeOptions<Typename>) {
    super(fields, options)
  }
}
