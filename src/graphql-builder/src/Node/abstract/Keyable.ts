import { Node } from './Node'
import { DataProxy } from '../../DataProxy'

export type KeyFn<TNode extends Node<any>> = (
  data: DataProxy<TNode>
) => string | number

export class Keyable<TNode extends Node<any>> {
  constructor(public getKey?: KeyFn<TNode>) {}
}
