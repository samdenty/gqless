import {
  DocumentNode,
  SelectionNode,
  ArgumentNode,
  ObjectFieldNode,
  ValueNode,
} from 'graphql'
import { QueryNode, QueryField, QueryRoot } from '../QueryNode'
import { Query } from '../Query'
import { mergeSelections } from './mergeSelections'

export class QueryBuilder {
  constructor(protected query: Query) {}

  private getValue(value: any): ValueNode {
    return value === null
      ? { kind: 'NullValue' }
      : typeof value === 'string'
      ? { kind: 'StringValue', value }
      : typeof value === 'number'
      ? { kind: 'IntValue', value: `${value}` }
      : typeof value === 'boolean'
      ? { kind: 'BooleanValue', value: value }
      : value instanceof Array
      ? { kind: 'ListValue', values: value.map(value => this.getValue(value)) }
      : {
          kind: 'ObjectValue',
          fields: Object.entries(value).map(
            ([name, value]): ObjectFieldNode => ({
              kind: 'ObjectField',
              name: {
                kind: 'Name',
                value: name,
              },
              value: this.getValue(value),
            })
          ),
        }
  }

  private getArguments(node: QueryField) {
    if (!node.args) return []

    return node.args.map(
      ([name, value]): ArgumentNode => ({
        kind: 'Argument',
        name: {
          kind: 'Name',
          value: name,
        },
        value: this.getValue(value),
      })
    )
  }

  private getField(node: QueryNode, fields?: SelectionNode[]): SelectionNode {
    if (!(node instanceof QueryField)) return null

    return {
      kind: 'Field',
      name: {
        kind: 'Name',
        value: node.name as string,
      },
      ...(node.alias && { alias: { kind: 'Name', value: node.aliasedName } }),
      arguments: this.getArguments(node),
      directives: [],
      selectionSet:
        node.definition.type.kind === 'SCALAR'
          ? null
          : {
              kind: 'SelectionSet',
              selections: [
                ...(fields ||
                  node.fields.map(node => this.getField(node)).filter(Boolean)),
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: '__typename',
                  },
                },
              ],
            },
    }
  }

  private getSelections(node: QueryField) {
    const path = node.path.slice(1)

    const getSelectionsAtLevel = (index: number): SelectionNode[] =>
      path[index]
        ? [this.getField(path[index], getSelectionsAtLevel(index + 1))]
        : undefined

    return getSelectionsAtLevel(0)
  }

  public buildDocument(...nodes: (QueryRoot | QueryField)[]) {
    const fieldNodes = nodes.includes(this.query.root)
      ? this.query.root.fields
      : (nodes as QueryField[])

    const selections = mergeSelections(
      [].concat(...fieldNodes.map(node => this.getSelections(node)))
    )

    const doc: DocumentNode = {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          ...(this.query.options.queryName && {
            name: {
              kind: 'Name',
              value: this.query.options.queryName,
            },
          }),
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections,
          },
        },
      ],
    }

    return doc
  }
}
