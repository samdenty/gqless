import { Query } from '../Query'
import { QueryNode, QueryNodeJSON } from '.'
import { QueryFieldJSON } from './QueryField'

export type QueryRootJSON<T> = QueryNodeJSON<T>

export class QueryRoot<T = any> extends QueryNode<T, null> {
  static fromJSON<T>(query: Query<T>, json: QueryRootJSON<T>) {
    const root = new QueryRoot(query)

    const iterate = <T>(node: QueryNode, json: QueryNodeJSON<T>) => {
      Object.entries(json).forEach(
        ([name, { $_, ...fields }]: [string, QueryFieldJSON<unknown>]) => {
          const field = node.addField(name, $_.alias)

          field.args = $_.args

          iterate(field, fields)
        }
      )
    }

    iterate(root, json)

    return root
  }
}
