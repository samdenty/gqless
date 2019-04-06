import {
  DocumentNode,
  SelectionNode,
  ArgumentNode,
  ObjectFieldNode,
  ValueNode,
} from 'graphql'
import { SelectionField, SelectionIndex, Selection } from '../Selection'
import { ScalarNode } from '../Node'
import { sortByPathLength } from './optimiseSelections'

export class ASTBuilder {
  constructor(private queryName?: string) {}

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

  private selectionNode(
    selection: Selection<any>,
    subSelections: SelectionNode[]
  ): SelectionNode {
    if (selection instanceof SelectionField) {
      return {
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
        selectionSet: subSelections.length
          ? { kind: 'SelectionSet', selections: subSelections }
          : null,
      }
    }

    return null
  }

  public buildDocument(...selections: Selection<any>[]) {
    if (!selections.length) return null
    selections.sort(sortByPathLength)
    const astMap = new Map<Selection<any>, SelectionNode[]>()

    const getSubselections = (selection: Selection<any>) => {
      if (selection instanceof SelectionIndex)
        return astMap.get(selection.parent)

      const subSelections: SelectionNode[] = []

      if (!(selection.node instanceof ScalarNode)) {
        subSelections.push({
          kind: 'Field',
          name: {
            kind: 'Name',
            value: '__typename',
          },
        })
      }

      return subSelections
    }

    const addSelectionNode = (selection: Selection<any>) => {
      if (astMap.has(selection)) return

      const subSelections = getSubselections(selection)
      astMap.set(selection, subSelections)

      if (selection.parent) {
        const field = this.selectionNode(selection, subSelections)

        if (field) {
          astMap.get(selection.parent).push(field)
        }
      }
    }

    selections.forEach(selection => {
      // Ensure this node is referenced back to the root
      selection.path.forEach(s => {
        addSelectionNode(s)
      })

      const recurse = (selection: Selection<any>) => {
        selection.selections.forEach(subSelection => {
          addSelectionNode(subSelection)
          recurse(subSelection)
        })
      }

      recurse(selection)
    })

    const { root } = selections[0]
    const rootSelections = astMap.get(root)

    const doc: DocumentNode = {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: root.node.name === 'Mutation' ? 'mutation' : 'query',
          ...(this.queryName && {
            name: {
              kind: 'Name',
              value: this.queryName,
            },
          }),
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: rootSelections,
          },
        },
      ],
    }

    return doc
  }
}
