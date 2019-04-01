import {
  DocumentNode,
  SelectionNode,
  ArgumentNode,
  ObjectFieldNode,
  ValueNode,
} from 'graphql'
import { Query } from '../../Query'
import { mergeSelections } from './mergeSelections'
import {
  USelection,
  SelectionRoot,
  SelectionField,
  SelectionIndex,
  Selection,
} from '../Selection'
import { ScalarNode } from '../Node'

/**
 * @TODO:
 *
 * This can be optimized when multiple selections are combined into one query.
 * Currently it's recursively merging duplicated fields once it's in AST form
 */
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

  private getArguments(selection: SelectionField<any, any>) {
    if (!selection.args) return []

    return Object.entries(selection.args).map(
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

  private recurseSelections(selection: Selection<any, any>): SelectionNode[] {
    return [].concat(
      ...selection.selections.map(s => this.getSelections(s)).filter(Boolean)
    )
  }

  private getSelections(
    selection: Selection<any, any>,
    selections?: SelectionNode[]
  ): SelectionNode[] {
    if (selection instanceof SelectionField) {
      return [
        {
          kind: 'Field',
          name: {
            kind: 'Name',
            value: selection.field.name,
          },
          ...(selection.alias && {
            alias: { kind: 'Name', value: selection.dataProp },
          }),
          arguments: this.getArguments(selection),
          directives: [],
          selectionSet:
            selection.node instanceof ScalarNode
              ? null
              : {
                  kind: 'SelectionSet',
                  selections: [
                    ...(selections || this.recurseSelections(selection)),
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: '__typename',
                      },
                    },
                  ],
                },
        },
      ]
    }

    if (selection instanceof SelectionIndex) {
      return this.recurseSelections(selection)
    }

    return null
  }

  private getIndividualSelection(selection: USelection) {
    const path = selection.path.slice(1)

    const getSelectionsAtLevel = (index: number): SelectionNode[] => {
      if (!(index in path)) return undefined

      return [
        ...this.getSelections(path[index], getSelectionsAtLevel(index + 1)),
      ]
    }

    return getSelectionsAtLevel(0)
  }

  public buildDocument(...nodes: USelection[]) {
    const root = nodes.find(n => n instanceof SelectionRoot)
    const selections = root ? root.selections : nodes

    const selectionsAst = mergeSelections(
      [].concat(
        ...selections.map(selection => this.getIndividualSelection(selection))
      )
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
            selections: selectionsAst,
          },
        },
      ],
    }

    return doc
  }
}
