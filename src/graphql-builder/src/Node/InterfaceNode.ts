import {
  FieldsNode,
  UFieldsNodeRecord,
  IFieldsNodeOptions,
  NodeDataType,
  Keyable,
  defaultKey,
} from './abstract'
import { ObjectNode } from './ObjectNode'
import { Mix, Generic } from 'mix-classes'

export type IInterfaceNodeOptions<Typename> = IFieldsNodeOptions<Typename> & {}

export interface InterfaceNode<
  TImplementations extends ObjectNode<any, any, any>,
  TNode extends UFieldsNodeRecord<keyof T>,
  T,
  Typename extends string = string
>
  extends FieldsNode<TNode, T, any, NodeDataType<TImplementations>>,
    Keyable<InterfaceNode<TImplementations, TNode, T, Typename>> {}

export class InterfaceNode<TImplementations, TNode, T, Typename> extends Mix(
  Generic(FieldsNode),
  Generic(Keyable)
) {
  constructor(
    fields: TNode,
    public implementations: TImplementations[],
    options?: IFieldsNodeOptions<Typename>
  ) {
    super([fields as any, options])

    this.keyGetter = defaultKey(this as any)
  }
}
