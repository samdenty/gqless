export type NodeDataType<T extends Node> = T extends Node<infer U> ? U : never

export class Node<DataType = any> {
  private __dataType: DataType = undefined!

  constructor() {}
}
