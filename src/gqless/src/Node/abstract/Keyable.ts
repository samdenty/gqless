import { Node } from './Node'
import { DataProxy } from '../../DataProxy'
import { FieldsNode, FieldNode } from './FieldsNode'
import { StringNode, NumberNode } from '../ScalarNode'
import { Accessor } from '../../Accessor'

export type KeyFn<TNode extends Node<any>> = (
  data: DataProxy<TNode>
) => string | number

export class Keyable<TNode extends Node<any>> {
  constructor(public keyGetter?: KeyFn<TNode>) {}

  public getKey(accessor: Accessor) {
    if (!this.keyGetter) return

    // startRecordingSelections()
    try {
      return this.keyGetter!(accessor.data)
    } finally {
      // stopRecordingSelections()
    }
  }
}

export const defaultKey = <TNode extends Node<any>>(
  node: TNode
): KeyFn<TNode> | undefined => {
  if (node instanceof FieldsNode) {
    const idField: FieldNode<Node<any>> = node.fields.id

    if (idField) {
      if (idField.ofNode instanceof StringNode)
        return (data: { id: string }) => data.id

      if (idField.ofNode instanceof NumberNode)
        return (data: { id: number }) => data.id
    }
  }

  return undefined
}
