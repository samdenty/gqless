export type NodeDataType<T extends Node<any>> = T extends Node<infer U>
  ? U
  : never

export class Node<DataType = never> {
  protected __dataType: DataType = undefined!

  constructor() {}
}
