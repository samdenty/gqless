import {
  FieldsNode,
  UFieldsNodeRecord,
  IFieldsNodeOptions,
  NodeDataType,
} from './abstract'
import { ObjectNode } from './ObjectNode'

export type IInterfaceNodeOptions<Typename> = IFieldsNodeOptions<Typename> & {}

export class InterfaceNode<
  TImplementations extends ObjectNode<any, any, any>,
  TNode extends UFieldsNodeRecord<keyof T>,
  T,
  Typename extends string = string
> extends FieldsNode<TNode, T, any, NodeDataType<TImplementations>> {
  constructor(
    fields: TNode,
    public implementations: TImplementations[],
    options?: IFieldsNodeOptions<Typename>
  ) {
    super(fields, options)
  }
}
