import { Node, NodeDataType } from '../Node'
import { NodeContainer } from '../NodeContainer'
import { Arguments } from '../Arguments'
import { Selection, SelectionField } from '../selections'

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
          return selection.field === this.name && selection.alias === alias
        },
        () => new SelectionField(fieldsSelection, this.ofNode, this.name)
      )

    const getData = (selection = getSelectionAlias(null)) => {
      return this.ofNode.getData(selection)
    }

    if (this.args) {
      let unaliasedData: ReturnType<typeof getData>

      return new Proxy(
        (args, { alias = null } = {}) => {
          const selection = getSelectionAlias(alias)

          return getData(selection)
        },
        {
          get: (_, prop) => {
            if (!unaliasedData) unaliasedData = getData()

            return unaliasedData[prop]
          },
        }
      )
    }

    return getData()
  }
}
