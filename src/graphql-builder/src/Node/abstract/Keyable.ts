import { Node } from './Node'
import { DataProxy } from '../../DataProxy'
import { FieldsNode, FieldNode } from './FieldsNode'
import { StringNode, NumberNode } from '../ScalarNode'
import { computed } from '../../utils'

export type KeyFn<TNode extends Node<any>> = (
  data: DataProxy<TNode>
) => string | number

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

export class Keyable<TNode extends Node<any>> {
  constructor(getKey?: KeyFn<TNode>) {
    this.getKey = getKey
  }

  private _getKey: KeyFn<TNode> | undefined
  public set getKey(getKey: KeyFn<TNode> | undefined) {
    this._getKey = getKey
  }

  @computed(function(this: Keyable<TNode>) {
    return [this._getKey]
  })
  public get getKey(): KeyFn<TNode> | undefined {
    if (!this._getKey) return undefined

    return (...args) => {
      // startRecordingSelections()
      try {
        return this._getKey!(...args)
      } finally {
        // stopRecordingSelections()
      }
    }
  }
}
