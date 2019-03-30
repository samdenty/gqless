import { Selection } from './selections'

export type NodeDataType<T extends Node<any>> = T extends Node<infer U>
  ? U
  : never

export abstract class Node<DataType = never> {
  // This needs to be here for some reason
  private __dataType: DataType

  constructor() {}

  public getData(selection: Selection<Node<DataType>>) {
    return selection.value
  }
}
