import { Query } from '../Query'

export type NodeDataType<T extends Node<any>> = T['$$dataType']

export abstract class Node<DataType = never> {
  public $$dataType: DataType

  constructor(protected query: Query) {}
}
