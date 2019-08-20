import { Accessor } from '../../Accessor'
import { ScalarNode } from '../ScalarNode'
import { FieldsNode } from './FieldsNode'
import { Node, NodeDataType } from './Node'

export type KeyFn<TNode extends Node<any>> = (
  data: NodeDataType<TNode>
) => string | number

export class Keyable<TNode extends Node<any>> {
  constructor(public keyGetter?: KeyFn<TNode>) {}

  public getKey(accessor: Accessor) {
    if (!this.keyGetter) return

    // TODO
    // startRecordingSelections()
    try {
      return this.keyGetter!(accessor.data)
    } finally {
      // stopRecordingSelections()
    }
  }
}

export const defaultKey = <TNode extends Node>(
  node: TNode
): KeyFn<TNode> | undefined => {
  if (node instanceof FieldsNode) {
    const idField = node.fields.id

    if (idField) {
      if (idField.ofNode instanceof ScalarNode)
        return (data: { id: string }) => data.id
    }
  }

  return undefined
}
