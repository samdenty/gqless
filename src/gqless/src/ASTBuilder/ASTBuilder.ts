import {
  DocumentNode,
  SelectionNode,
  ArgumentNode,
  ValueNode,
  VariableDefinitionNode,
} from 'graphql/language'
import { FieldSelection, Selection } from '../Selection'
import { Keyable, NodeContainer, UArguments } from '../Node'
import { sortByPathLength } from './sortByPathLength'
import { Variable } from '../Variable'
import { toValueNode } from './toValueNode'
import { toTypeNode } from './toTypeNode'
import { initialSelections } from './initialSelections'
import { VariableEntry, uniqueVariables } from './uniqueVariables'
import { toVariableNode } from './toVariableNode'

interface CurrentDocument {
  variables: Map<Variable, VariableEntry>
}

export class ASTBuilder {
  constructor() {}

  private currentDocument: CurrentDocument | undefined

  private getValue(
    value: any,
    node: UArguments,
    nullable: boolean,
    variablePath: string[]
  ): ValueNode {
    if (value) {
      if (value instanceof Variable)
        return toVariableNode(
          this.currentDocument!.variables,
          value,
          node,
          nullable,
          variablePath
        )

      if (typeof value.toJSON === 'function') {
        value = value.toJSON()
      }
    }

    return toValueNode(value, node, (value, node, nullable) =>
      this.getValue(value, node, nullable, variablePath)
    )
  }

  private getArguments(selection: FieldSelection<any, any>, fieldName: string) {
    if (!selection.args) return []

    const { inputs } = selection.field.args!

    return Object.entries(selection.args)
      .filter(([name]) => name in inputs)
      .map(
        ([name, value]): ArgumentNode => {
          const field = inputs[name]

          return {
            kind: 'Argument',
            name: {
              kind: 'Name',
              value: name,
            },
            value: this.getValue(value, field.ofNode, field.nullable, [
              fieldName,
              name,
            ]),
          }
        }
      )
  }

  private selectionNode(
    selection: FieldSelection<any>,
    subSelections: SelectionNode[]
  ): SelectionNode {
    return {
      kind: 'Field',
      name: {
        kind: 'Name',
        value: selection.field.name!,
      },
      ...(selection.alias && {
        alias: { kind: 'Name', value: selection.dataProp! },
      }),
      arguments: this.getArguments(selection, selection.field.name),
      directives: [],
      selectionSet: subSelections.length
        ? { kind: 'SelectionSet', selections: subSelections }
        : undefined,
    }
  }

  private variableDefinition(
    variable: Variable,
    name: string
  ): VariableDefinitionNode {
    return {
      kind: 'VariableDefinition',
      variable: {
        kind: 'Variable',
        name: {
          kind: 'Name',
          value: name,
        },
      },
      type: {
        kind: 'NamedType',
        name: toTypeNode(variable.node!, variable.nullable!) as any,
      },
    }
  }

  private getRootSelections(selections: Selection[]) {
    selections.sort(sortByPathLength)

    const astMap = new Map<Selection, SelectionNode[]>()

    const addSelectionNode = (selection: Selection<any>) => {
      if (astMap.has(selection)) return

      const innerNode =
        selection.node instanceof NodeContainer
          ? selection.node.innerNode
          : selection.node

      if (innerNode instanceof Keyable) {
        // TODO
        // console.warn(selection.path.toString(), innerNode.keyGetter)
        // selection.node.keysForSelection
        // console.log(selection.path.toString(), selection.node.keyGetter)
      }

      const subSelections = initialSelections(selection)
      astMap.set(selection, subSelections)

      if (selection.parent) {
        const field = this.selectionNode(
          selection as FieldSelection<any>,
          subSelections
        )

        if (field) {
          astMap.get(selection.parent)!.push(field)
        }
      }
    }

    // Fill AstMap up
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

    const rootSelections = astMap.get(root)!
    return { rootSelections, root }
  }

  public buildDocument(queryName?: string, ...selections: Selection<any>[]) {
    if (!selections.length) return

    this.currentDocument = {
      variables: new Map(),
    }

    const { root, rootSelections } = this.getRootSelections(selections)

    const { variables, variablesObj } = uniqueVariables(
      this.currentDocument.variables
    )

    const doc: DocumentNode = {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: root.node.name === 'Mutation' ? 'mutation' : 'query',
          ...(queryName && {
            name: {
              kind: 'Name',
              value: queryName,
            },
          }),
          variableDefinitions: variables.map(({ variable, name }) =>
            this.variableDefinition(variable, name)
          ),
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: rootSelections,
          },
        },
      ],
    }

    return { doc, variables: variablesObj }
  }
}
