import { QueryNode, QueryNodeJSON } from '.'
import { Query } from '../Query'

export type QueryIndexJSON<T> = QueryNodeJSON<T>

export class QueryFieldList<T = any> extends QueryNode<T> {
  constructor(query: Query, parent: QueryNode, public index: number) {
    super(query, parent)
  }
}
