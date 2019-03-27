import { ObjectNode } from './nodes'

type NodeData<T extends Node<any>> = T extends Node<infer U> ? U : never

export type NodeDataType<T extends Node<any>> = T extends ObjectNode<
  any,
  any,
  infer Typename
>
  ? NodeData<T> & { __typename?: Typename }
  : NodeData<T>

export abstract class Node<DataType = never> {
  // This needs to be here for some reason
  private __dataType: DataType

  constructor() {}
}
