import { Query } from '../Query'

export abstract class Node {
  constructor(protected query: Query) {}
}
