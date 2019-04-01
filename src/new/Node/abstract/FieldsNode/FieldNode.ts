import { Node, NodeDataType } from '../Node'
import { NodeContainer } from '../NodeContainer'
import { Selection, SelectionField } from '../../../Selection'
import { Arguments, ObjectNode, ArrayNode, ScalarNode } from '../..'

export class FieldNode<
  T extends Node<any>,
  TArguments extends Arguments<any, any> = never,
  TNullable extends boolean = false
> extends NodeContainer<T, TNullable> {
  public data: NodeDataType<T>
  public name: string = null

  constructor(node: T, public args?: TArguments, nullable?: TNullable) {
    super(node, nullable)
  }

  public getData(fieldsSelection: Selection<any, any>) {
    const getSelectionAlias = (alias: string) =>
      fieldsSelection.getSelection(
        selection => {
          if (!(selection instanceof SelectionField)) return false
          return selection.field.name === this.name && selection.alias === alias
        },
        () => new SelectionField(fieldsSelection, this.ofNode, this)
      )

    const getData = (selection = getSelectionAlias(null)) => {
      return this.ofNode instanceof ObjectNode
        ? this.ofNode.getData(selection)
        : this.ofNode instanceof ArrayNode
        ? this.ofNode.getData(selection)
        : this.ofNode instanceof ScalarNode
        ? this.ofNode.getData(selection)
        : undefined
    }

    if (this.args) {
      let unaliasedData: any

      // Return a proxy to a function
      return new Proxy(
        (args: NodeDataType<TArguments>, { alias = null } = {}) => {
          const selection = getSelectionAlias(alias)
          selection.setArguments(args)
          return getData(selection)
        },
        {
          get: (_, prop) => {
            if (!unaliasedData) unaliasedData = getData()
            const result = unaliasedData[prop]

            if (typeof result === 'function') {
              return result.bind(unaliasedData)
            }

            return result
          },
        }
      )
    }

    return getData()
  }
}
