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
import { Extension } from '../Extension'

export type IInterfaceNodeOptions = IFieldsNodeOptions & {
  extension?: Extension
}

export interface InterfaceNode<TImplementations extends ObjectNode<any>>
  extends FieldsNode<NodeDataType<TImplementations>>,
    Keyable<InterfaceNode<TImplementations>> {}

export class InterfaceNode<TImplementations = any> extends Mix(
  Generic(FieldsNode),
  Generic(Keyable)
) {
  constructor(
    fields: UFieldsNodeRecord,
    public implementations: TImplementations[],
    options: IInterfaceNodeOptions
  ) {
    super([fields as any, options])

    this.keyGetter = defaultKey(this as any)
  }
}
