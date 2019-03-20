import { Query } from '../Query'
import { QueryNode, QueryField, QueryRoot } from '.'

const nodes: (typeof QueryField | typeof QueryRoot)[] = [QueryField, QueryRoot]

type INode = typeof nodes[number]

export const fromJSON = (
  query: Query,
  parent: QueryNode = null,
  { constructorName, ...json }: ReturnType<INode['prototype']['toJSON']>
) => {
  const Node = nodes.find(({ name }) => name === constructorName)
  // @ts-ignore
  const node: INode['prototype'] = new Node(query)

  Object.assign(node, json, {
    parent,
    fields: json.fields.map(f => fromJSON(query, node, f)),
  })

  return node
}
