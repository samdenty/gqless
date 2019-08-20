import { Generic, Mix } from 'mix-classes'

import { defaultKey, FieldsNode, IFieldsNodeOptions, Keyable, NodeDataType, UFieldsNodeRecord } from './abstract'
import { Extension } from './Extension'
import { ObjectNode } from './ObjectNode'

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
