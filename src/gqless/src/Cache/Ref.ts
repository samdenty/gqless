import { Value } from './Value'
import { Node } from '../Node'

export class Ref extends Value {
  constructor(node: Node<any>, private cacheEntry: string) {
    super(node)
  }
}
