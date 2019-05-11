import { Node, NodeDataType } from '../Node'
import { NodeContainer } from '../NodeContainer'
import { FieldSelection } from '../../../Selection'
import { Arguments, ObjectNode, ArrayNode, ScalarNode } from '../..'
import { Accessor, FieldAccessor } from '../../../Accessor'
import isEqual from 'fast-deep-equal'
import { Outputable } from '../Outputable'

export class FieldNode<
  TNode extends Node<any>,
  TArguments extends Arguments<any, any> = any,
  TNullable extends boolean = false
> extends NodeContainer<TNode, TNullable> {
  public data: NodeDataType<TNode>
  public name: string = null

  constructor(node: TNode, public args?: TArguments, nullable?: TNullable) {
    super(node, nullable)
  }

  public getData(fieldsAccessor: Accessor) {
    const getSelection = (args: any) => {
      const selection: FieldSelection<
        TNode
      > = fieldsAccessor.selection.getField(selection => {
        if (!(selection instanceof FieldSelection)) return false

        return (
          selection.field.name === this.name && isEqual(selection.args, args)
        )
      })

      if (selection) return { justCreated: false, selection }

      return {
        justCreated: true,
        selection: new FieldSelection(
          fieldsAccessor.selection,
          this.ofNode,
          this,
          args
        ),
      }
    }

    const getData = (selection: FieldSelection<TNode>) => {
      // selection.root.dataAccessed(selection)

      const accessor =
        fieldsAccessor.getChild(a => a.selection === selection) ||
        new FieldAccessor(fieldsAccessor, selection)

      return this.ofNode instanceof Outputable
        ? this.ofNode.getData(accessor)
        : undefined
    }
    const argumentless = getSelection(null)
    const argumentlessData = getData(argumentless.selection)

    if (this.args) {
      // Return a proxy to a function
      return new Proxy(
        (args: NodeDataType<TArguments>) => {
          if (args === undefined) args = null

          // If we just created the argumentless selection
          // + it didn't already exist then destroy it, as it's not required
          if (args && argumentless.justCreated) {
            argumentless.selection.unselect()
          }

          const { selection } = getSelection(args)
          return getData(selection)
        },
        {
          get: (_, prop) => {
            const result = argumentlessData[prop]

            if (typeof result === 'function') {
              return result.bind(argumentlessData)
            }

            return result
          },
        }
      )
    }

    return argumentlessData
  }
}
