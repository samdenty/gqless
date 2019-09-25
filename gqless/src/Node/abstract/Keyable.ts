import { Accessor } from '../../Accessor'
import { ScalarNode } from '../ScalarNode'
import { FieldsNode } from './FieldsNode'
import { Node, NodeDataType } from './Node'

export type KeyFn<TNode extends Node> = (
  data: NodeDataType<TNode>
) => string | number

export class Keyable<TNode extends Node> {
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
  if (!(node instanceof FieldsNode)) return
  const idField = node.fields.id
  if (!idField) return

  // If args are required, don't use
  if (idField.args && idField.args.required) return

  // Only accept scalars
  if (!(idField.ofNode instanceof ScalarNode)) return

  return (data: { id: string }) => data.id
}
